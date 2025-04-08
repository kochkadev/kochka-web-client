# Kochka Web Client

This is a web application client built with [Next.js](https://nextjs.org).

## Project Structure

```
kochka-web-client/
├── src/                    # Source code
│   ├── app/               # Next.js app directory
│   │   ├── page.tsx      # Main page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── api/              # API related code
│   ├── config/           # Configuration files
│   └── stores/           # Zustand stores
│       └── counter.ts    # Example store
├── public/               # Static files
│   ├── images/          # Application images
│   └── fonts/           # Font files
├── .next/               # Next.js build
├── node_modules/        # Project dependencies
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration
├── eslint.config.mjs    # ESLint configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project configuration
```

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

- `/src/app` - Next.js app directory containing:
  - `page.tsx` - Main application page
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles

- `/src/stores` - Zustand state management:
  - `counter.ts` - Example store implementation

- `/public` - Static files:
  - `images` - Application images
  - `fonts` - Font files

## Technologies

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Zustand](https://zustand-demo.pmnd.rs) - State management solution


