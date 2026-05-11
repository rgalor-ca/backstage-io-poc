# Frontier Developer Platform

This is the Frontier Developer Platform, a lightweight Backstage portal scaffold. It keeps the official Backstage app source in place and adds a local Software Template named `Lightweight Web App`.

See [docs/technical-documentation.md](docs/technical-documentation.md) for the full architecture, configuration, GitHub publishing, operation, and troubleshooting guide.

The template creates a dependency-free static web app with:

- `index.html`, `styles.css`, and `app.js`
- a tiny `server.js` preview server
- `catalog-info.yaml` for Backstage registration

To start the app, run:

```powershell
node .yarn\releases\yarn-4.4.1.cjs install
$env:GITHUB_TOKEN = gh auth token
node .yarn\releases\yarn-4.4.1.cjs start
```

Frontier Developer Platform will be available at http://localhost:3000 and its backend at http://localhost:7007.

This scaffold was created with `npx @backstage/create-app@latest --skip-install` to avoid filling the current drive with dependencies. Install dependencies when you have enough free disk space for a full Backstage local setup.
