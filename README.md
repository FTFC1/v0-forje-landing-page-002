# FORJE Landing Page

A modern Next.js landing page built with v0 and deployed on GitHub Pages.

[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/NzdsgAjhCOe)

## Overview

This is a Next.js project migrated from v0.app to save costs by using GitHub Pages for deployment instead of Vercel.

## Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This site is deployed via GitHub Pages from the `main` branch.

Live URL: **https://ftfc1.github.io/v0-forje-landing-page-002/**

### Setup GitHub Pages

1. Push your changes to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click Save

For Next.js static export, add to `next.config.mjs`:
```js
output: 'export',
basePath: '/v0-forje-landing-page-002',
```

## Editing the Site

You can continue to edit this site in two ways:

1. **Directly in this repository** - Edit files and push to GitHub (free!)
2. **Using v0.app** - Continue building at [v0.app/chat/projects/NzdsgAjhCOe](https://v0.app/chat/projects/NzdsgAjhCOe)

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui components
