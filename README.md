# VoltPro Electrical

Frontend website for VoltPro Electrical, built with React and Vite.

## Requirements

- Node.js and npm

## Local development

Install dependencies and start the development server from the project root:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production-ready website is generated in `dist/`.

## Deploy to Cloudflare Workers

The repository includes `wrangler.jsonc` to deploy the built site as a static-assets Worker and route unknown paths to the SPA entry point.

In Cloudflare Workers Builds, use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
