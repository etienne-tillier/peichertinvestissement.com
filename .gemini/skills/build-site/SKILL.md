---
name: build-site
description: Construire un site web complet à partir du template niche-starter et du fichier instructions.md
---

# 🏗️ SKILL : Construire un Site Web Complet

Tu es chargé de construire un site web **complet, fonctionnel et prêt à déployer** à partir de ce template `niche-starter`.

Le fichier `instructions.md` à la racine contient le **brief thématique** (description, design, contenu, images). Lis-le intégralement avant de commencer.

---

## ⛔ FICHIERS INTERDITS — NE JAMAIS MODIFIER

Ces fichiers contiennent la logique critique (SEO, netlinking, Supabase). Ils sont **parfaits** et ne doivent **jamais** être modifiés, renommés ou supprimés :

```
lib/supabase.ts          ← Client Supabase admin (safe-init)
lib/blog.ts              ← CRUD blog optimisé (select ciblé)
lib/dofollow.ts          ← Injection dofollow dans le Markdown
lib/sitemap-helper.ts    ← Génération XML sitemaps
components/MarkdownLink.tsx  ← Liens dofollow/nofollow automatiques
components/LanguageSwitcher.tsx  ← Sélecteur de langue
types/index.ts           ← Interfaces TypeScript
app/robots.ts            ← robots.txt dynamique
app/sitemap.xml/route.ts ← Sitemap index
app/sitemap_*.xml/route.ts ← Sitemaps par locale (x5)
next.config.ts           ← Configuration Next.js
package.json             ← Dépendances verrouillées
tsconfig.json            ← Configuration TypeScript
postcss.config.js        ← PostCSS
eslint.config.mjs        ← ESLint
```

## ✅ FICHIERS À CRÉER OU MODIFIER

Tu DOIS créer ou modifier **uniquement** ces fichiers :

| Fichier | Action |
|---------|--------|
| `config/site.ts` | **CRÉER** — Config du site (name, domain, url, mainNav) |
| `app/globals.css` | **MODIFIER** — Ajouter la palette CSS unique + variables |
| `app/layout.tsx` | **MODIFIER** — Ajouter Google Fonts + `<Header />` + `<Footer />` + metadata |
| `app/page.tsx` | **CRÉER** — Page d'accueil complète |
| `app/blog/page.tsx` | **CRÉER** — Liste des articles |
| `app/blog/[slug]/page.tsx` | **CRÉER** — Page article (voir section Blog ci-dessous) |
| `app/blog/categorie/[slug]/page.tsx` | **CRÉER** — Articles par catégorie |
| `app/contact/page.tsx` | **CRÉER** — Page contact |
| `app/a-propos/page.tsx` | **CRÉER** — Page à propos |
| `app/mentions-legales/page.tsx` | **CRÉER** — Mentions légales |
| `app/politique-confidentialite/page.tsx` | **CRÉER** — Politique de confidentialité |
| `components/Header.tsx` | **CRÉER** — Header du site |
| `components/Footer.tsx` | **CRÉER** — Footer du site |
| `components/BlogCard.tsx` | **CRÉER** — Carte d'article pour les listings |
| `app/icon.svg` | **CRÉER** — Favicon SVG adapté à la thématique |

---

## 📐 RÈGLES TECHNIQUES ABSOLUES

### ISR Revalidation
```typescript
// OBLIGATOIRE sur CHAQUE page sans exception
export const revalidate = 3600; // 1h minimum
```

### Page Blog `[slug]/page.tsx` — Pattern OBLIGATOIRE
```typescript
import { MarkdownLink } from "@/components/MarkdownLink";
import { injectDofollowMarker } from "@/lib/dofollow";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Dans le composant :
const bodyMd = injectDofollowMarker(displayBodyMd || "");

<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{ a: MarkdownLink }}
>
  {bodyMd}
</ReactMarkdown>
```

### Détection de traduction
```typescript
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
```

### Hreflang dans generateMetadata
```typescript
const languages: Record<string, string> = {};
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
languages[post.default_locale || "fr-FR"] = `${siteUrl}/blog/${post.slug}`;
if (post.translations) {
  Object.entries(post.translations).forEach(([locale, t]: [string, any]) => {
    if (t.slug) languages[locale] = `${siteUrl}/blog/${t.slug}`;
  });
}
return { alternates: { languages } };
```

### Images — Télécharger OBLIGATOIREMENT
```bash
mkdir -p public/images
curl -L "URL_R2_IMAGE" -o public/images/nom-fichier.jpeg
```
- **TOUJOURS** télécharger les images listées dans `instructions.md`
- **TOUJOURS** utiliser `/images/nom.jpeg` dans le code, pas les URLs R2
- Utiliser `<Image>` de Next.js avec `priority` sur le hero

---

## 🎨 DESIGN PLAYBOOK — Design Unique Obligatoire

### Phase 1 : Analyse Émotionnelle (AVANT de coder)
1. Lire le brief dans `instructions.md`
2. Identifier **5 adjectifs** : l'ambiance du site
3. Identifier **3 références visuelles** : objets, lieux, textures associés
4. Identifier **2 émotions** à évoquer chez le visiteur

### Phase 2 : Design System Unique
Créer une palette dans `globals.css` en CSS variables :
- `--color-primary` : couleur principale issue de l'univers thématique
- `--color-secondary` : couleur complémentaire
- `--color-accent` : couleur d'accent pour CTA
- `--color-background` : fond principal
- `--color-foreground` : texte principal
- `--color-muted` : texte secondaire

**Règles de contraste ABSOLUES :**
- Ratio minimum 4.5:1 (WCAG AA) entre texte et fond
- Tester CHAQUE combinaison texte/fond
- ❌ Jamais texte clair sur fond clair
- ❌ Jamais texte foncé sur fond foncé

### Phase 3 : Variation Structurelle (Anti-footprint)
Varier ALÉATOIREMENT entre ces patterns selon la thématique :

**Layouts de page d'accueil** (choisir 1) :
- Hero plein écran + sections empilées verticalement
- Split-screen (image gauche, texte droite)
- Bento Grid asymétrique
- Hero avec vidéo/animation de fond
- Grille de cartes masonry

**Structures de navigation** (choisir 1) :
- Navbar fixe transparente qui se solidifie au scroll
- Navbar classique avec barre colorée
- Sidebar menu hamburger sur mobile + navbar desktop
- Header minimaliste centré

**Styles typographiques** (choisir 1 paire) :
- Serif titres + Sans-serif corps (ex: Playfair Display + Inter)
- Display titres + Mono accents (ex: Space Grotesk + JetBrains Mono)
- Sans-serif uniforme moderne (ex: Plus Jakarta Sans)
- Humaniste chaleureux (ex: Nunito + Merriweather)
- Bold statement (ex: Outfit + Source Sans 3)

**Effets visuels** (choisir 2-3) :
- Hover cards avec élévation (shadow + translateY)
- Gradient overlays sur images
- Border-radius géométriques (rounded-2xl vs sharp)
- Animations d'entrée subtiles (fade-in, slide-up)
- Glassmorphism / backdrop-blur sur certains composants
- Dividers décoratifs (vagues, diagonales, courbes)

### Phase 4 : Développement
- Créer TOUTES les pages listées dans `instructions.md`
- Chaque page doit avoir du contenu RÉEL (pas de Lorem ipsum)
- Le formulaire de contact doit être fonctionnel (ou au minimum un mailto:)
- Le Footer doit lister UNIQUEMENT des pages qui existent

---

## ⚠️ EXIGENCES ABSOLUES — Zéro Tolérance

1. **AUCUN placeholder** : Pas de Lorem ipsum, [À compléter], [Nom]
2. **AUCUN lien cassé** : Tous les liens du Footer/Header pointent vers des pages existantes
3. **AUCUN composant décoratif** non fonctionnel : Si tu mets une barre de recherche, elle doit marcher
4. **Logo/favicon personnalisés** : Créer `app/icon.svg` adapté à la thématique
5. **Header + Footer sur TOUTES les pages** : Via le `layout.tsx`
6. **Contraste lisible** : Ratio 4.5:1 minimum partout
7. **`npm run build` doit passer** : 0 erreur TypeScript, 0 erreur de build
8. **ISR activé partout** : `export const revalidate = 3600` sur chaque page

---

## 🔍 CHECKLIST FINALE

Avant de terminer, vérifie :

- [ ] `npm run build` passe sans erreur
- [ ] Toutes les pages listées dans `instructions.md` existent
- [ ] Le Header contient la navigation définie dans `config/site.ts`
- [ ] Le Footer ne contient AUCUN lien vers une page inexistante
- [ ] Les images ont été téléchargées dans `public/images/`
- [ ] `ReactMarkdown` utilise `MarkdownLink` (pas de `<a>` standard)
- [ ] `injectDofollowMarker()` est appliqué AVANT le rendu Markdown
- [ ] `revalidate = 3600` est présent sur toutes les pages
- [ ] La palette de couleurs est UNIQUE et adaptée à la thématique
- [ ] Les polices Google sont chargées dans `layout.tsx`
- [ ] Le design est visuellement distinct de tout autre site du réseau
- [ ] Le contraste texte/fond est suffisant partout (WCAG AA)
