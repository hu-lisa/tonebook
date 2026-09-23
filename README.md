# ToneBook

ToneBook is a web app for musicians to keep track of their gear, songs, and tone presets in one place.

## Features

- **Songs** — Track songs you want to learn, are learning, or have learned. Search, filter, tag, and log the last time you practiced each one.
- **Gear** — Catalog your guitars, amps, and pedals.
- **Presets** — Save per-gear settings for a song, so you can recall your exact tone next time you play it.
- **Accounts** — Simple email/password authentication to keep your data private.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, Server Actions)
- [NextAuth](https://authjs.dev) for authentication
- [Drizzle ORM](https://orm.drizzle.team) with PostgreSQL
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)

## Getting Started

1. Set up a PostgreSQL database and add its connection string to `.env`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run migrations:
   ```bash
   npx drizzle-kit migrate
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000).
