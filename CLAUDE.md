# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WebLeads-Landing is a Next.js 15 marketing site for WebLeads, a B2B lead generation SaaS that searches Google Maps for business leads. The site includes multiple landing pages, a blog system, and extensive SEO optimization.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS with custom brand theme
- **UI Components**: shadcn/ui (50+ Radix UI-based components in `components/ui/`)
- **Icons**: Lucide React
- **Forms**: react-hook-form + Zod validation
- **Error Tracking**: Sentry

### Directory Structure
- `app/` - Next.js App Router pages (home, blog, landing pages for different services)
- `components/` - React components (landing-specific + shadcn/ui in `ui/`)
- `content/blog/` - Markdown blog posts with frontmatter
- `lib/` - Utilities (`utils.ts` has `cn()` for className merging, `blog.ts` for post parsing)
- `hooks/` - Custom React hooks (`use-mobile.tsx`, `use-toast.ts`)
- `SEO/` - SEO strategy documentation and keyword research

### Key Patterns
- Use `'use client'` directive for interactive components
- Use `cn()` from `lib/utils.ts` for conditional Tailwind classes
- Blog posts are file-based markdown in `content/blog/` with gray-matter frontmatter

## Design System

### Brand Colors (defined in `tailwind.config.js`)
- **Primary**: `#8A3033` (burgundy) - `bg-brand-primary`, `text-brand-primary`
- **Secondary**: `#2D3142` (dark blue-gray) - `bg-brand-secondary`
- **Accent**: `#D8B26E` (gold) - `bg-brand-accent`

### Typography
- Font: Inter (sans-serif)
- Hero headings: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary`
- Body: `text-base sm:text-lg text-gray-600`

### Common Component Patterns
- Cards: `bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-brand-primary/5`
- Primary buttons: `bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl shadow-lg`
- Background blobs: Floating elements with `bg-brand-primary/8 blur-3xl animate-float-blob-*`

See `STYLE_GUIDE.md` for complete design system documentation.

## Blog System

Blog posts live in `content/blog/*.md` with this frontmatter format:

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
author: "Author Name"
tags: ["tag1", "tag2"]
image: "/images/blog/image.jpg"
---
```

See `BLOG_GUIDE.md` for detailed blog authoring instructions.

## SEO Content Guidelines

When writing SEO content for this project:
- Write at 7th-grade reading level
- Target keywords: business data scraping, google maps scraper, business leads
- 400-800 word articles
- Include placeholders for personal stories/examples: `[add a story here]`, `[add an example here]`
- Service description: "Search on demand" - users create queries for business types/areas, receive results via email, can filter by Google Maps ratings/reviews

## Configuration Notes

- `next.config.mjs`: ESLint and TypeScript errors are ignored during build; images are unoptimized for static export
- Path alias: `@/*` maps to project root
