# Inspect360

Plateforme web mobile (PWA) de contrôle et d’inspection d’équipements — scan QR / GIAI, import de listes, rapports PDF, gestion multi-entreprises.

> Module actuel : **extincteurs** (contrôle incendie). L’architecture est conçue pour accueillir d’autres types d’équipements.

## Structure

```
index.html          Interface
js/app.js           Logique métier + Firebase
logo-inspect360.svg Logo application
```

## Rôles

| Rôle | Compte | Droits |
|------|--------|--------|
| **admin** | svarodina@protonmail.com | Entreprises, sites, utilisateurs |
| **responsable** | créé par admin | Sites de son entreprise, PDF, reset |
| **technicien** | créé par admin | Scan, contrôle, édition ligne |

## Fonctionnalités

- Gestion entreprises → sites → utilisateurs
- Scan QR / saisie manuelle N° série
- Import CSV, export Excel / PDF
- Recherche et filtres À faire / Contrôlés
- Branding client (ex. CFF) côté technicien

## Déploiement

GitHub Pages (branche `main`) ou Firebase Hosting. Modules ES : accès en HTTP (pas `file://`).

## Bootstrap admin

1. Connexion `svarodina@protonmail.com`
2. Créer une entreprise + sites
3. Créer les utilisateurs et leur attribuer sites + rôle
