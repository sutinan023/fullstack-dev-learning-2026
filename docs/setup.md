# Project Setup

> Thai version: [setup.th.md](./setup.th.md)

This is a [Next.js](https://nextjs.org) application using React 19, Tailwind CSS 4, and Supabase for authentication and data.
Turbopack is configured in `next.config.ts` to use this project directory as the root.

## Prerequisites

- **Node.js** 18 or 20+ (recommended)
- **npm** (included with Node.js)

Verify installation:

```bash
node -v
npm -v
```

## Installation

1. Clone or open the project directory.

2. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env.local` file at the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
```

These variables are used in `libs/supabase.js` for Supabase client initialization and GitHub OAuth sign-in.

To obtain the values:

1. Create a project at [supabase.com](https://supabase.com).
2. Open **Project Settings → API**.
3. Copy **Project URL** and **anon public** key.

> Do not commit `.env.local` to version control. It is already ignored by `.gitignore`.

## Running the Project

### Development

Start the development server with hot reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To use a different port:

```bash
npm run dev -- -p 3001
```

### Production

Build and run the production server:

```bash
npm run build
npm run start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script        | Description                          |
|---------------|--------------------------------------|
| `npm run dev` | Start development server             |
| `npm run build` | Build for production               |
| `npm run start` | Start production server (after build) |
| `npm run lint`  | Run ESLint                         |

## Tech Stack

| Technology        | Version |
|-------------------|---------|
| Next.js           | 16.2.9  |
| React             | 19.2.4  |
| Tailwind CSS      | 4       |
| Supabase JS       | 2.x     |
| TypeScript        | 5       |

## Project Structure

```
app/              # Next.js App Router pages and components
  artists/        # Artist listing, create, and detail pages
  songs/          # Song listing and detail pages
  history/        # User watch history page
  products/       # Products pages
  users/          # Users pages
  components/     # Shared UI components
libs/             # Supabase client, auth, and data models
public/           # Static assets
docs/             # Project documentation
```

## Main Routes

| Route            | Description        |
|------------------|--------------------|
| `/`              | Home page          |
| `/artists`       | Artist list        |
| `/artists/create`| Create artist      |
| `/artists/[id]`  | Artist detail      |
| `/songs`         | Song list          |
| `/songs/[id]`    | Song detail        |
| `/history`       | User watch history |
| `/products`      | Products           |
| `/users`         | Users              |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Missing `node_modules` | Run `npm install` |
| Supabase or auth errors | Check `.env.local` values and Supabase project status |
| Port 3000 in use | Run `npm run dev -- -p 3001` or stop the other process |
| Build failures | Run `npm run lint` and fix reported issues |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
