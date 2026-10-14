<h1>
  <img src="./public/logo.png" alt="Fernboard logo" height="40" style="vertical-align:middle; margin-right:10px;" />
  Fernboard
</h1>

Fernboard is an AI-powered whiteboard for brainstorming, organizing ideas, and turning them into action.

## Features

- Interactive idea board for notes and workflows
- AI-assisted brainstorming and generation
- Dashboard for managing projects and ideas
- Modern UI for fast collaboration and exploration

## Tech stack

- Next.js
- React
- TypeScript
- PostgreSQL
- Drizzle ORM
- NextAuth
- Inngest

## Getting started

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Environment

Create a `.env.local` file with:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/fernboard"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
INNGEST_EVENT_KEY="your-inngest-key"
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run db:push
npm run db:studio
npm run inngest:dev
```

## Status

Fernboard is still under active development.
