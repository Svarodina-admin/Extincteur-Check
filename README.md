# Inspect360 — Contrôle extincteurs CFF

Application de contrôle d'extincteurs (scan GIAI, import CSV, rapports PDF).

## Structure

```
index.html          Interface
css/app.css         Styles
js/config.js        Firebase + constantes
js/app.js           Logique métier
```

## Rôles

| Rôle | Compte | Droits |
|------|--------|--------|
| **admin** | svarodina@protonmail.com | Entreprises, users, tout |
| **responsable** | thibaut.petric@sbb.ch | Sites + users de son entreprise, PDF, reset |
| **technicien** | créé par admin | Scan, contrôle, édition ligne |
| **lecteur** | créé par admin | Lecture seule |

## Fonctionnalités

- Recherche multi-critères + filtres À faire / Contrôlés
- Saisie manuelle N° série + bip confirmation
- Rôles, entreprises, sites, attribution users
- Validation PDF (case + nom technicien)
- Branding CFF conditionnel
- Maintenance légale 3 ans (vert / orange / rouge)

## Déploiement

Servir à la racine (GitHub Pages / Firebase Hosting). Modules ES nécessitent HTTP (pas file://).

## Bootstrap admin

1. Compte Auth `svarodina@protonmail.com`
2. Connexion → profil admin auto-créé
3. Créer entreprise CFF (slug: cff)
4. Créer users agents `@sbb.ch`
