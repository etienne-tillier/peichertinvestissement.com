# CLAUDE.md — Directives pour construire un site depuis niche-starter

## Objectif
Tu construis un site web complet à partir de ce template. Le fichier `instructions.md` contient le brief thématique. Lis-le intégralement avant de commencer.

## ⛔ FICHIERS INTERDITS — NE JAMAIS MODIFIER
```
lib/supabase.ts, lib/blog.ts, lib/dofollow.ts, lib/sitemap-helper.ts
components/MarkdownLink.tsx, components/LanguageSwitcher.tsx
types/index.ts, app/robots.ts
app/sitemap.xml/route.ts, app/sitemap_*.xml/route.ts
next.config.ts, package.json, tsconfig.json, postcss.config.js, eslint.config.mjs
```

## ✅ FICHIERS À CRÉER
- `config/site.ts` — Config du site (name, domain, url, mainNav)
- `app/globals.css` — MODIFIER : ajouter palette CSS unique + variables
- `app/layout.tsx` — MODIFIER : Google Fonts + Header + Footer + metadata
- `app/page.tsx` — Page d'accueil complète
- `app/blog/page.tsx` — Liste des articles
- `app/blog/[slug]/page.tsx` — Page article (voir patterns ci-dessous)
- `app/blog/categorie/[slug]/page.tsx` — Articles par catégorie
- `app/contact/page.tsx`, `app/a-propos/page.tsx`, `app/mentions-legales/page.tsx`, `app/politique-confidentialite/page.tsx`
- `components/Header.tsx`, `components/Footer.tsx`, `components/BlogCard.tsx`
- `app/icon.svg` — Favicon adapté

## 📐 RÈGLES TECHNIQUES

### ISR — OBLIGATOIRE sur chaque page
```typescript
export const revalidate = 3600; // 1h
```

### Blog [slug]/page.tsx — Pattern obligatoire
```typescript
import { MarkdownLink } from "@/components/MarkdownLink";
import { injectDofollowMarker } from "@/lib/dofollow";
import { getBlogPostBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Traduction :
let displayH1 = post.h1;
let displayBody = post.body_md;
if (post.slug !== slug && post.translations) {
  for (const [_key, val] of Object.entries(post.translations)) {
    if ((val as any).slug === slug) {
      displayH1 = (val as any).h1 || displayH1;
      displayBody = (val as any).body_md || displayBody;
      break;
    }
  }
}

// Rendu :
const bodyMd = injectDofollowMarker(displayBody || "");
<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
  {bodyMd}
</ReactMarkdown>
```

### Hreflang dans generateMetadata
```typescript
const languages: Record<string, string> = {};
languages[post.default_locale || "fr-FR"] = `${siteUrl}/blog/${post.slug}`;
if (post.translations) {
  Object.entries(post.translations).forEach(([locale, t]: [string, any]) => {
    if (t.slug) languages[locale] = `${siteUrl}/blog/${t.slug}`;
  });
}
return { alternates: { languages } };
```

### Images — Télécharger depuis R2
```bash
curl -L "URL_R2" -o public/images/nom.jpeg
```
Utiliser `/images/nom.jpeg` dans le code, pas les URLs R2 directes.

## 🎨 DESIGN — Design Unique Obligatoire

### Phase 1 : Analyse (AVANT de coder)
- 5 adjectifs décrivant l'ambiance du site
- 3 références visuelles (objets, textures, lieux)
- 2 émotions à évoquer

### Phase 2 : Design System
CSS variables dans `globals.css` : `--color-primary`, `--color-secondary`, `--color-accent`, `--color-background`, `--color-foreground`, `--color-muted`

Contraste WCAG AA : ratio 4.5:1 minimum texte/fond.

### Phase 3 : Variation (Anti-footprint)
**Layout** (choisir 1) : Hero plein écran | Split-screen | Bento Grid | Hero vidéo | Masonry
**Navigation** (choisir 1) : Navbar transparente scroll | Navbar classique | Sidebar hamburger | Minimaliste centré
**Typographie** (choisir 1 paire) : Serif+Sans | Display+Mono | Sans uniforme | Humaniste | Bold statement
**Effets** (choisir 2-3) : Hover elevation | Gradient overlays | Animations fade-in | Glassmorphism | Dividers décoratifs

## ⚠️ EXIGENCES ABSOLUES
1. AUCUN placeholder (Lorem ipsum, [À compléter])
2. AUCUN lien cassé (Footer/Header → pages existantes uniquement)
3. Logo/favicon personnalisés dans `app/icon.svg`
4. Header + Footer sur toutes les pages via `layout.tsx`
5. `npm run build` doit passer : 0 erreur
6. Design visuellement distinct de tout autre site du réseau
