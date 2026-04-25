# AGENTS.md

Règles communes pour tout agent IA (Claude, Gemini, Codex, etc.) travaillant dans ce repo.

## Ordre de lecture obligatoire

1. `AGENTS.md`
2. `instructions.md`
3. `CLAUDE.md` (complément, si présent)

## Règles non négociables

- Ne jamais écraser `instructions.md` avec un contenu template.
- Ne jamais modifier `AGENTS.md`, `instructions.md`, `CLAUDE.md`, `PROMPT_READY.md` sans demande explicite.
- Zéro page 404.
- Zéro placeholder.
- Blog 100% Supabase (aucun faux article).
- Toute page liée doit exister réellement, sinon supprimer le lien.
- Tout lien vers le même domaine doit être interne dofollow.
- Respect des contraintes SEO/egress définies dans `instructions.md` et `CLAUDE.md`.
- `npm run build` doit passer.

## Sortie attendue

- Implémentation complète et cohérente avec la thématique.
- Liste des fichiers modifiés.
- Résumé court des choix design/SEO.
