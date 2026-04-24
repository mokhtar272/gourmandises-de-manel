# Gourmandises de Manel

Site e-commerce généré par [Lumen AI](https://lumen.ai).

## 🚀 Déploiement

Ce projet se déploie automatiquement sur Cloudflare Workers via GitHub Actions.

### Setup
1. Ajoutez les secrets GitHub :
   - `CF_API_TOKEN` : votre token API Cloudflare
   - `CF_ACCOUNT_ID` : votre Account ID Cloudflare

2. Faites un push sur `main` → déploiement automatique

### Structure
```
├── src/App.jsx        ← Composant React principal
├── src/index.css      ← Styles CSS custom
├── index.html         ← Entry point (React + Tailwind CDN)
└── .github/
    └── workflows/
        └── deploy.yml ← GitHub Actions → Cloudflare
```

### URL de production
https://gourmandises-de-manel-d9rb1.mokhtarrida30.workers.dev

---
*Dernière mise à jour : 24/04/2026 — v1*
