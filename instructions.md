# Brief de génération de site (niche-starter)

Ce fichier est auto-généré depuis Website Manager.
L'agent doit lire d'abord `AGENTS.md`, puis ce fichier.
⚠️ Ce fichier est la source de vérité du brief: ne pas l'écraser avec un template générique.

---

## 1) Infos projet

- `site_name`: messagerieorange.fr
- `site_domain`: messagerieorange.fr
- `site_url`: https://messagerieorange.fr
- `default_locale`: fr-FR
- `site_id` (UUID Supabase): 7f4ce3c1-84b7-4cea-80e3-8d918986efab
- `tier` (`tier1` / `tier2`): tier2

## 2) Positionnement éditorial

- Thématique: Technologie, Telecom
- Audience cible:
- Objectif business:
- Ton éditorial:
- Angles à privilégier:
- Angles interdits:

## 3) Arborescence souhaitée

- Pages de navigation (hors blog):
- Sections homepage attendues:
- CTA principal:
- CTA secondaire:

## 4) Contraintes SEO

- Requêtes principales:
- Entités importantes:
- Concurrents de référence:
- Règles de maillage interne spécifiques:
- URLs legacy à rediriger (si applicable):
  - (aucune)
  - Si l'URL contient des caractères encodés (`%C3%A9`, etc.), la décoder d'abord puis slugifier proprement (ne jamais produire des slugs de type `c3a9`/`c3a8`).

## 5) Direction artistique

- Univers visuel:
- Inspirations:
- Couleurs souhaitées / évitées:
- Style typographique:
- Niveau d'animation:
- Niveau de sobriété (1-10):

## 6) Assets (R2 / médias)

- Bucket/source:
- Liste images hero:
- Liste images sections:
- Liste images guides/blog:
- Contraintes de ratio/poids:

## 7) Contraintes techniques

- Le code doit respecter strictement les règles de `AGENTS.md`.
- Ne pas modifier les fichiers Core interdits.
- Pas de `select("*")` ajouté.
- Pas de faux articles.
- Aucune page 404.
- Toute page additionnelle liée (outil, carte, simulateur, etc.) doit être implémentée et réellement remplie.
- Si une page n'existe pas, aucun lien ne doit pointer vers elle.
- Tout lien vers le même domaine doit être traité comme lien interne dofollow.
- Les redirections legacy doivent pointer vers des slugs décodés/normalisés (jamais vers des slugs encodés type `c3a9`).
- `npm run build` doit passer.

## 8) Données légales à injecter

- Mentions légales (éditeur):
- Contact public:
- DPO/contact RGPD:
- Hébergeur:

---

## 9) Données source Website Manager

### Brief éditorial brut

Ok, l'idée du site, c'est de faire un site qui est spécialisé sur le fournisseur Télécom France Orange, sur sa messagerie, sur toutes les questions qu'on peut avoir sur la messagerie Orange. Donc, est-ce que c'est facile de changer de messagerie ? Comment transférer ses mails ? J'ai plus de place sur ma boîte mail ? Je reçois des spams ? Est-ce que je peux recevoir tel type de courrier ? Est-ce que je peux bloquer telle personne ? Tout ce genre de truc qu'on peut se poser comme question sur la messagerie Orange. Je suis chez Orange ou je veux devenir client chez Orange. Quelles questions je peux me poser ? Ce site doit répondre à ce genre d'informations, en parlant spécifiquement de la messagerie d'Orange et d'Orange en général et de ce qui se passe autour, mais surtout répondre à des questions nichées sur cette thématique.

### Description générée

## Messagerie Orange - Guide Complet et Support Technique

**MessagerieOrange.fr** est un site spécialisé dédié exclusivement à la messagerie électronique d'Orange, le géant français des télécommunications. Ce site de niche se positionne comme LA référence pour tous les utilisateurs Orange (actuels ou futurs) qui rencontrent des questions techniques, des problèmes de configuration ou cherchent à optimiser leur utilisation de leur boîte mail Orange.

### Objectif et Public Cible

Le site répond à un besoin précis : centraliser toutes les informations, guides pratiques et solutions concernant la messagerie Orange. Il s'adresse aux particuliers et professionnels utilisant les services Orange, depuis les débutants qui découvrent leur boîte mail jusqu'aux utilisateurs avancés cherchant des solutions techniques pointues. L'objectif principal est de générer du trafic SEO qualifié sur des requêtes long-tail très spécifiques ("comment transférer mails Orange", "bloquer spam messagerie Orange", etc.) et de monétiser via l'affiliation ou la recommandation de services Orange complémentaires.

### Stratégie de Contenu

Le contenu se structure autour de guides pratiques détaillés, de FAQ techniques, de tutoriels pas-à-pas et d'articles de résolution de problèmes. Chaque article cible une problématique précise rencontrée par les utilisateurs Orange, créant un écosystème de contenu hautement spécialisé et utile qui favorise le référencement naturel et la fidélisation des visiteurs.

### Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu spécialisé dans la messagerie Orange.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : MessagerieOrange.fr
- Domaine : messagerieorange.fr
- Type de site : Site de niche spécialisé / Money site
- Thématiques : Technologie, Télécommunications, Support technique Orange
- Objectif business : SEO long-tail + affiliation services Orange
- Audience cible : Utilisateurs Orange (débutants à avancés) cherchant de l'aide technique

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs clés** : Fiable, Technique, Accessible, Professionnel, Rassurant
- **Références visuelles mentales** : Interface Orange moderne, écrans de smartphones, bureaux tech propres, assistance technique professionnelle
- **Émotions à évoquer** : Confiance technique, facilité d'usage, support expert, fiabilité Orange

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers Orange/tech professionnel, l'agent développeur devra :
1. S'inspirer de l'orange signature Orange (mais pas copier exactement)
2. Créer une palette UNIQUE avec :
   - Couleur principale : Orange moderne/tech (version raffinée du orange Orange)
   - Couleur secondaire : Bleu tech professionnel (confiance/technologie)
   - Couleur d'accent : Vert validation/succès pour les solutions
   - Couleur de fond : Gris très clair tech/blanc cassé
   - Variantes hover plus saturées
3. Assurer un excellent contraste pour la lecture technique

### Typographie
- **Police suggérée** : Inter ou Source Sans Pro (lisibilité technique optimale)
- Alternative : Open Sans ou Nunito Sans
- Priorité : lisibilité parfaite pour les guides techniques

## 2. SEO & métadonnées
- **Titre SEO principal** : "Messagerie Orange : Guide Complet, Aide & Support Technique"
- **Méta-description principale** : "Guide complet de la messagerie Orange : configuration, transfert de mails, gestion spam, stockage. Solutions expertes pour tous vos problèmes techniques."

## 3. Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

Les images suivantes ont été générées et sont disponibles sur le bucket R2. Tu dois les télécharger et les intégrer dans le projet :

- **Hero principal** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/messagerieorange-fr-home-hero-orange-tech.jpeg
- **Section guides** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/messagerieorange-fr-home-guides-email-setup.jpeg
- **Section problèmes** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/messagerieorange-fr-home-problems-spam-blocking.jpeg
- **Section FAQ** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/messagerieorange-fr-home-faq-technical-support.jpeg
- **Section contact** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/messagerieorange-fr-home-contact-orange-support.jpeg
- **Page guides - Hero** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/messagerieorange-fr-guides-hero-step-by-step.jpeg
- **Page FAQ - Hero** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/messagerieorange-fr-faq-hero-questions-answers.jpeg

## 4. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation spécialisée)
  - `app/globals.css` (créer la palette Orange/tech UNIQUE)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase pour articles techniques

## 5. Contenu & structure à mettre en place

### Page d'accueil (/) - Sections obligatoires :
- **Hero** : "Messagerie Orange : Tous vos problèmes résolus" + CTA vers guides populaires
- **Section Guides Populaires** : Top 6 guides les plus consultés avec vignettes
- **Section Problèmes Fréquents** : 4 problématiques courantes avec solutions rapides
- **Section FAQ Express** : 8-10 questions/réponses ultra-courantes
- **Section Contact/Support** : Liens vers support Orange officiel + ressources

### Pages importantes :
- `/guides` : Tous les guides techniques détaillés
- `/faq` : FAQ complète organisée par thématiques
- `/problemes` : Diagnostic et résolution de problèmes
- `/blog` : Actualités et nouveautés messagerie Orange

### Clusters thématiques :
- **Configuration** : Paramétrage initial, serveurs, ports
- **Transfert & Migration** : Changement de messagerie, import/export
- **Gestion** : Organisation, dossiers, règles de tri
- **Sécurité** : Spam, virus, mots de passe
- **Stockage** : Espace, archivage, suppression
- **Mobile** : Applications, synchronisation
- **Problèmes techniques** : Bugs, dysfonctionnements

## 6. Navigation spécialisée
- Menu principal : Guides | FAQ | Problèmes | Blog | Contact
- Sous-menus par thématique technique
- Moteur de recherche proéminent
- Fil d'Ariane technique détaillé

## 7. Consignes éditoriales
- **Ton** : Expert mais accessible, pédagogique, rassurant
- **Style** : Guides pas-à-pas détaillés, captures d'écran, listes à puces
- **Types d'articles** : Tutoriels, dépannage, FAQ, actualités Orange
- **Éviter** : Jargon trop technique, promesses de support direct, critiques d'Orange

## 8. Fonctionnalités spécialisées
- Système de recherche avancé par problématique
- Tags techniques précis (IMAP, POP, SMTP, etc.)
- Système de vote "Cette solution a-t-elle fonctionné ?"
- Liens vers support Orange officiel systématiques
- Breadcrumb technique détaillé

## 9. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=messagerieorange.fr)
- Mise à jour `config/site.ts` avec navigation spécialisée
- **Création palette Orange/tech UNIQUE** dans `app/globals.css`
- Téléchargement et intégration des 7 images pré-générées
- Logos Orange-compatibles (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Structure des articles techniques optimisée

## 10. Anti-patterns à éviter
❌ Design trop généraliste (non spécialisé Orange)
❌ Couleurs non cohérentes avec l'univers Orange/tech
❌ Navigation trop complexe pour les utilisateurs non-tech
❌ Contenus généralistes (non spécifiques Orange)
❌ Promesses de support client direct
❌ Copie du design officiel Orange (problèmes légaux)
