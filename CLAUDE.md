# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

Node version: 18.13.0 (managed by Volta)

## Architecture Overview

This is a bilingual (Japanese/English) personal portfolio site built with Next.js, TypeScript, and Zustand for state management.

### Core Architecture Patterns

**Atomic Design Structure:**
- `atoms/` - Basic reusable components (Button)
- `molecules/` - Small functional components (Footer, WorkImageContent)
- `organisms/` - Complex sections (SelfIntroductionContent, CurrentWorkContent, etc.)
- `templates/` - Page layouts (AboutTemplate, WorkTemplate)
- `pages/` - Next.js pages with bilingual routing

**Bilingual Content System:**
All content components use the `IContent` interface pattern:
```typescript
interface IContent {
  value: ReactElement | string;
  value_en?: ReactElement | string;  // English version
  isDisableBr?: boolean;
  isDisableDot?: boolean;
}
```

**State Management:**
- `useLanguageStore` - Language switching (Japanese/English)
- `usePageStore` - Current page tracking

### Page Structure

**About Page** (`/`, `/about_en`): Personal introduction, work history, education, qualifications
- Template renders 10+ organism components in sequence: SelfIntroductionContent → CurrentWorkContent → InternContent → etc.

**Work Page** (`/work`, `/work_en`): Project showcase with image/video carousels

### Content Management Pattern

Each content section is an independent organism that:
1. Defines its data as `IContent[]` arrays
2. Uses `ContentsDisplay()` to render with language switching
3. Handles both Japanese and English via `value`/`value_en` properties

When adding new content sections, follow this pattern and update the appropriate template to include the new organism component.

### Deployment

Site deploys automatically to https://baplisca.onrender.com/ when code is pushed to main branch.