# AGENTS.md

## Build Commands
- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Production build (output: `dist/`)
- `npm run lint` - Run ESLint on all JS/JSX files
- `npm run preview` - Preview production build

## Code Style Guidelines

### Imports (in order)
1. React and hooks: `import React, { useState, useEffect } from "react";`
2. Third-party libraries (react-router, iconify, lucide-react)
3. Local components
4. Data/utilities
5. Assets

### Naming Conventions
- Components: PascalCase (`MyComponent.jsx`)
- Utilities/data files: kebab-case (`personal-data.js`)
- Style objects: camelCase (`heroStyles.js`)

### Component Patterns
- Functional components with hooks only (no class components)
- Default exports: `export default function ComponentName() {}`
- Use IntersectionObserver for scroll-based animations

### Styling
- Tailwind CSS utility classes preferred
- Inline style objects for dynamic/complex CSS
- `<style>` tags for component-specific keyframe animations

### ESLint
- ES2020+ syntax, React Hooks rules enforced
- Unused vars starting with uppercase allowed (component imports)
