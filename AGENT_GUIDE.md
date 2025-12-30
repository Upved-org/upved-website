# Agent Guide for UPVED Church Website

## Project Overview
This is a Next.js 16 (App Router) project for the UPVED Foundation, a Vedic spiritual community. The website uses Tailwind CSS for styling and shadcn/ui components.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (globals.css), Lucide Icons
- **UI Components**: shadcn/ui (in `@/components/ui`)
- **Package Manager**: **pnpm** (Do NOT use npm or yarn)

## Project Structure
- `/app`: App Router pages and global layouts
  - `/app/globals.css`: Global styles (Tailwind directives)
- `/components`: reusable UI components
  - `/components/ui`: shadcn/ui atomic components
- `/public`: Static assets (images, fonts)
- `/lib`: Utility functions (`utils.ts`, etc.)
- `/business`: Business logic and documentation artifacts (`upved-vision.md`)

## Key Guidelines for Agents
1. **Package Management**: ALWAYS use `pnpm` for installing dependencies.
   - ❌ `npm install package`
   - ✅ `pnpm add package`
2. **Component Style**: Use functional components with TypeScript interfaces.
3. **Styling**: Use Tailwind utility classes. Avoid arbitrary values (e.g., `w-[123px]`) unless absolutely necessary.
4. **Icons**: Use `lucide-react` for icons.
5. **Images**:
   - Prefer standard HTML `<img>` tags or specialized usage for static sites where `next/image` complexity isn't needed, but current convention uses `next/image` with `fill` or `width/height`.
   - Optimized images are stored in `/public` in `.webp` format.
6. **Navigation**: Uses a custom sidebar layout. Be careful when modifying `sidebar.tsx` or `navigation.tsx` to maintain state sync.

## Common Tasks & Commands
- **Dev Server**: `pnpm dev`
- **Build**: `pnpm build`
- **Start Production**: `pnpm start`
- **Run Scripts**: `pnpm run <script-name>`
