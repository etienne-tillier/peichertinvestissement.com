---
description: Comment créer un nouveau site à partir du template niche-starter
---

# Créer un Nouveau Site

## Prérequis
- Le repo `niche-starter` doit être "Template repository" sur GitHub
- Le fichier `instructions.md` doit être prêt (généré par n8n ou manuellement)

## Étapes

### 1. Créer le repo depuis le template
```bash
gh repo create VOTRE_ORG/mon-site.com --template VOTRE_ORG/niche-starter --private --clone
cd mon-site.com
```

### 2. Configurer l'environnement
```bash
cp .env.example .env.local
```
Éditer `.env.local` avec les vraies valeurs Supabase + SITE_DOMAIN.

### 3. Ajouter instructions.md
Copier le `prompt_md` de n8n ou écrire manuellement.

### 4. Installer
// turbo
```bash
npm install
```

### 5. Lancer l'agent
> "Lis le fichier instructions.md et construis le site complet en suivant les Skills."

### 6. Vérifier et pousser
// turbo
```bash
npm run build
```
```bash
git add . && git commit -m "Initial site build" && git push origin main
```

### 7. Coolify déploie automatiquement
