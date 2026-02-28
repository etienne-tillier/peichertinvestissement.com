# CLAUDE.md — Directives pour construire un site depuis niche-starter

## Objectif
Tu construis un site web **distinctif, production-grade et visuellement mémorable** à partir de ce template. Le fichier `instructions.md` contient le brief thématique. Lis-le intégralement avant de commencer.

## ⛔ FICHIERS INTERDITS — NE JAMAIS MODIFIER, NE PAS OUVRIR, NE PAS RECRÉER
```
lib/supabase.ts, lib/blog.ts, lib/dofollow.ts, lib/sitemap-helper.ts
components/MarkdownLink.tsx, components/LanguageSwitcher.tsx
types/index.ts, app/robots.ts
app/sitemap.xml/route.ts, app/sitemap_*.xml/route.ts
next.config.ts, package.json, tsconfig.json, postcss.config.js, eslint.config.mjs
```

## ✅ FICHIERS À CRÉER
- `config/site.ts` — Config du site (name, domain, url, mainNav)
- `app/globals.css` — MODIFIER : palette CSS unique + variables + animations
- `app/layout.tsx` — MODIFIER : Google Fonts distinctives + Header + Footer + metadata
- `app/page.tsx` — Page d'accueil complète
- `app/blog/page.tsx` — Liste des articles (état vide si aucun article)
- `app/blog/[slug]/page.tsx` — Page article
- `app/blog/categorie/[slug]/page.tsx` — Articles par catégorie
- `app/contact/page.tsx` — Page contact REMPLIE (formulaire mailto:contact@DOMAIN)
- `app/a-propos/page.tsx` — Page à propos REMPLIE (contenu fictif cohérent)
- `app/mentions-legales/page.tsx` — Mentions légales REMPLIES
- `app/politique-confidentialite/page.tsx` — Politique REMPLIE
- `components/Header.tsx`, `components/Footer.tsx`, `components/BlogCard.tsx`
- `app/icon.svg` — Favicon adapté

## 🚫 AUCUN FAUX ARTICLE DE BLOG
Les articles viennent EXCLUSIVEMENT de Supabase. Ne JAMAIS générer de faux articles ni hardcoder de titres/résumés d'articles.
- Home : pas de section "Derniers articles" avec des données fictives. Si section articles, appeler `getPublishedBlogPosts()` et gérer le cas vide.
- Blog/catégories vides → message EXACT : **"Aucun article publié pour le moment."**
- **INTERDIT** : "En préparation", "En construction", "À venir", "Bientôt disponible"

## 🚨 RÈGLE D'OR : ZÉRO PAGE 404

**Aucune page du site ne doit JAMAIS afficher une 404.**
- Chaque lien du Header/Footer DOIT pointer vers une page existante
- Ne JAMAIS créer de lien vers une page non créée
- Les pages thématiques : les créer remplies OU redirect vers `/blog?category=xxx`
- `/blog` sans articles → "Aucun article publié pour le moment."
- `/blog/[slug]` article inexistant → `notFound()` (pas page blanche)

## 📄 PAGES OBLIGATOIRES (toujours remplies)
- **Contact** : PAS DE FORMULAIRE — texte thématique + email contact@DOMAIN bien visible à copier-coller
- **À propos** : histoire fictive cohérente, mission, valeurs
- **Mentions légales** : éditeur, hébergeur, propriété intellectuelle
- **Confidentialité** : données collectées, droits utilisateurs, contact DPO

## 📐 RÈGLES TECHNIQUES

### ISR — OBLIGATOIRE sur chaque page
```typescript
export const revalidate = 3600;
```

### Blog [slug]/page.tsx — Pattern obligatoire
```typescript
import { MarkdownLink } from "@/components/MarkdownLink";
import { injectDofollowMarker } from "@/lib/dofollow";
import { getBlogPostBySlug } from "@/lib/blog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { notFound } from "next/navigation";

const post = await getBlogPostBySlug(slug);
if (!post) return notFound();

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
const bodyMd = injectDofollowMarker(displayBody || "");

// 1. IMAGE COVER
{post.cover?.file_url && (
  <Image src={post.cover.file_url} alt={post.cover.alt || displayH1}
    width={1200} height={630} priority className="w-full rounded-lg object-cover" />
)}

// 2. SÉLECTEUR DE LANGUE — OBLIGATOIRE
<LanguageSwitcher post={post} currentSlug={slug} />

// 3. CONTENU
<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
  {bodyMd}
</ReactMarkdown>

// 4. AUTEUR — OBLIGATOIRE en bas de l'article
{post.author && (
  <div className="flex items-center gap-4 mt-8 pt-8 border-t">
    {post.author.avatar_url && (
      <Image src={post.author.avatar_url} alt={post.author.name}
        width={64} height={64} className="rounded-full object-cover" />
    )}
    <div>
      <p className="font-semibold">{post.author.name}</p>
      {post.author.bio && <p className="text-sm opacity-70">{post.author.bio}</p>}
    </div>
  </div>
)}
```

### Images Blog — TOUJOURS afficher les covers
Les images des articles viennent de Supabase via `post.cover.file_url`. **OBLIGATOIRE** :
- **BlogCard** : afficher `post.cover.file_url` avec `<Image>` de Next.js
- **Page article** : afficher le cover en grand en haut de l'article avec `priority`
- Utiliser `post.cover.alt || post.h1` comme alt text

### Images statiques — Télécharger depuis R2
```bash
curl -L "URL_R2" -o public/images/nom.jpeg
```

## 🎨 DESIGN — Frontend Distinctif

### Design Thinking (AVANT de coder)
1. **Ton** : Choisis un extrême — brutaliste, luxe, éditorial, organique, art déco, etc.
2. **Différenciation** : Qu'est-ce qui rend ce site INOUBLIABLE ?

### Typographie
**INTERDITS** : Inter, Roboto, Arial, system-ui, Space Grotesk.
Paires audacieuses : Cormorant+Montserrat, Fraunces+WorkSans, DM Sans+IBM Plex Mono, Archivo Black+Karla, Vollkorn+Nunito Sans, Lora+Raleway, Sora+Lexend, Manrope+Space Mono...

### Couleurs
CSS variables. Dominante + accents vifs > palette timide. Contraste WCAG AA 4.5:1.

### Composition & Motion
Asymétrie, overlap, animations CSS d'entrée, hover effects, backgrounds texturés.

### ❌ Anti-patterns
- Polices génériques, gradients violets, layouts cookie-cutter, fonds blancs unis, palette timide

## ⚠️ EXIGENCES ABSOLUES
1. ZÉRO page 404 — aucun lien vers page inexistante
2. AUCUN placeholder (Lorem ipsum, TODO, [À compléter])
3. Toutes pages obligatoires REMPLIES
4. Blog fonctionnel (articles OU message "à venir")
5. Favicon dans `app/icon.svg`
6. `npm run build` : 0 erreur
7. `revalidate = 3600` sur chaque page
8. NE JAMAIS modifier les fichiers Core
