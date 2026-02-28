# CLAUDE.md — Directives pour construire un site depuis niche-starter

## Objectif
Tu construis un site web **distinctif, production-grade et visuellement mémorable** à partir de ce template. Le fichier `instructions.md` contient le brief thématique. Lis-le intégralement avant de commencer.

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
- `app/globals.css` — MODIFIER : ajouter palette CSS unique + variables + animations
- `app/layout.tsx` — MODIFIER : Google Fonts distinctives + Header + Footer + metadata
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

## 🎨 DESIGN EXCELLENCE — Frontend Distinctif

### Design Thinking (AVANT de coder)
1. **Objectif** : Quel problème résout ce site ? Qui l'utilise ?
2. **Ton** : Choisis un extrême — brutalement minimal, organique, luxe, ludique, éditorial, brutaliste, art déco, industriel, etc.
3. **Différenciation** : Qu'est-ce qui rend ce site INOUBLIABLE ?

### Typographie
**INTERDITS** : Inter, Roboto, Arial, system-ui, sans-serif générique, Space Grotesk.
Choisis des polices belles, uniques et pleines de caractère. Paire une display distinctive avec une body raffinée. Exemples :
- Cormorant Garamond + Montserrat (luxe)
- Fraunces + Work Sans (éditorial)
- DM Sans + IBM Plex Mono (tech)
- Archivo Black + Karla (bold)
- Vollkorn + Nunito Sans (chaleureux)

Ne JAMAIS réutiliser la même paire entre deux sites.

### Couleurs & Thème
CSS variables dans `globals.css` : `--color-primary`, `--color-secondary`, `--color-accent`, `--color-background`, `--color-foreground`, `--color-muted`, `--color-surface`, `--color-border`.
- Couleur dominante + accents vifs > palette timide
- Contraste WCAG AA : 4.5:1 minimum

### Composition Spatiale
Layouts inattendus, asymétrie, overlap, flux diagonal, éléments qui brisent la grille.
- Hero plein écran / Split-screen 60/40 / Bento Grid / Overlap layers / Scroll horizontal
- Y varier d'un site à l'autre

### Motion
Animations CSS-only de préférence :
- Staggered reveals au chargement (animation-delay séquentiel)
- Hover cards : translateY(-4px) + scale subtil
- Fade-in/slide-up au scroll
- Transition navbar au scroll

### Backgrounds & Textures
Pas de fonds blancs unis partout. Créer de l'atmosphère :
- Gradient meshes subtils, grain overlay, patterns géométriques
- Transparences, ombres dramatiques, dividers créatifs (vagues SVG)

### ❌ Anti-patterns (JAMAIS)
- Polices génériques (Inter, Roboto, Arial)
- Gradients violets sur blanc (cliché IA)
- Layouts cookie-cutter sans caractère
- Fonds unis sans texture
- Animations timides ou inexistantes
- Palette timide de 2 couleurs

## ⚠️ EXIGENCES ABSOLUES
1. AUCUN placeholder (Lorem ipsum, [À compléter])
2. AUCUN lien cassé (Footer/Header → pages existantes uniquement)
3. Logo/favicon dans `app/icon.svg`
4. Header + Footer sur toutes les pages via `layout.tsx`
5. `npm run build` doit passer : 0 erreur
6. Design visuellement INOUBLIABLE et distinct
7. Contraste WCAG AA partout
8. `revalidate = 3600` sur chaque page
