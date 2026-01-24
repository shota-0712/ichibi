# CLAUDE.md - AI Assistant Guide for Ichibi Restaurant Website

This document provides comprehensive guidance for AI assistants working on the 一期一美 (Ichibi) restaurant website codebase.

## Project Overview

**Project Name**: 一期一美 (Ichibi) - Ten-Percent Soba & Creative Izakaya
**Type**: Production restaurant website (Japanese cuisine)
**Location**: Kimitsu City, Chiba Prefecture, Japan
**Live Site**: https://i-chi-bi.com
**Tech Stack**: React 18 + TypeScript + Vite 5
**Deployment**: Netlify (continuous deployment from main branch)

### Project Philosophy

This is a **performance-first, SEO-optimized** website with a focus on:
- Fast loading times (code splitting, lazy loading, WebP images)
- Accessibility (WCAG AA compliance)
- Progressive Web App capabilities (offline support)
- Japanese typography and aesthetics
- Mobile-first responsive design

## Technology Stack

### Core Dependencies
- **React** 18.3.1 - UI framework
- **TypeScript** ~5.5.0 - Type safety (strict mode enabled)
- **Vite** 5.4.2 - Build tool and dev server
- **React Router DOM** 6.22.3 - Client-side routing
- **Tailwind CSS** 3.4.1 - Utility-first styling
- **Framer Motion** 11.0.3 - Animations and transitions

### UI & Utilities
- **Radix UI** - Accessible component primitives (HoverCard, Slot)
- **Lucide React** - Icon library
- **React Helmet Async** - SEO metadata management
- **class-variance-authority** - Component variant utilities
- **tailwind-merge** - Class name merging utility

### Build & Development Tools
- **ESLint** 9.9.1 - Code linting (strict TypeScript rules)
- **Terser** 5.29.2 - JavaScript minification
- **tsx** 4.20.6 - TypeScript execution for scripts
- **Cheerio** 1.1.2 - HTML manipulation in build scripts

## Directory Structure

```
/home/user/ichibi/
├── .github/
│   └── workflows/
│       └── update-ratings.yml    # Daily Google Places rating updates
├── public/
│   ├── image/                    # Optimized WebP images
│   ├── fonts/yuji-syuku/         # Self-hosted fonts (WOFF2/TTF)
│   ├── service-worker.js         # PWA offline support
│   ├── manifest.json             # PWA manifest
│   ├── sitemap.xml               # SEO sitemap
│   ├── robots.txt                # Search engine directives
│   └── ratings.json              # Google Places ratings (auto-updated)
├── scripts/
│   ├── prerender.ts              # SSR pre-rendering script
│   ├── fetch-ratings.ts          # Google Places API integration
│   ├── get-place-id.ts           # Place ID lookup utility
│   └── generate-font-subset.py   # Font optimization (Python)
├── src/
│   ├── components/
│   │   ├── Layout.tsx            # Master layout with navigation
│   │   ├── LazyImage.tsx         # Optimized lazy-loaded images
│   │   ├── PageTransitionSplash.tsx  # Page transition overlay
│   │   ├── home/                 # Home page sections
│   │   ├── menu/                 # Menu components
│   │   ├── social/               # SNS integration
│   │   ├── ui/                   # Reusable UI primitives
│   │   └── icons/                # Custom icon components
│   ├── pages/
│   │   ├── Home.tsx              # Homepage (eagerly loaded)
│   │   ├── Menu.tsx              # Menu page (lazy)
│   │   ├── StoreInfo.tsx         # Store info (lazy)
│   │   ├── Contact.tsx           # Contact form (lazy)
│   │   ├── DiningPhilosophy.tsx  # Philosophy overview (lazy)
│   │   └── philosophy/           # 7 philosophy sub-pages (lazy)
│   ├── hooks/
│   │   └── useNavigationPreload.ts  # Smart preloading on hover
│   ├── data/
│   │   ├── menu-data.ts          # Menu items with allergens
│   │   └── store-info.ts         # Restaurant metadata
│   ├── types/
│   │   └── menu.ts               # TypeScript interfaces
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn helper)
│   ├── App.tsx                   # Root component with routes
│   ├── main.tsx                  # Client entry point
│   ├── entry-server.tsx          # SSR entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML shell with SEO metadata
├── vite.config.ts                # Vite build configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js              # ESLint rules
├── netlify.toml                  # Netlify deployment config
└── package.json                  # Dependencies and scripts
```

## Key Architectural Patterns

### 1. Route-Based Code Splitting

**Strategy**: Only the Home page is eagerly loaded; all other routes use React.lazy + Suspense.

```typescript
// Home page - eagerly loaded
import { Home } from './pages/Home';

// All other pages - lazy loaded
const Menu = lazy(() => import('./pages/Menu').then(m => ({ default: m.Menu })));
const StoreInfo = lazy(() => import('./pages/StoreInfo').then(m => ({ default: m.StoreInfo })));
```

**Routing Pattern**:
```typescript
<Route path="/" element={<Home />} />
<Route path="/menu" element={
  <Suspense fallback={null}>
    <Menu />
  </Suspense>
} />
```

**Manual Chunk Strategy** (vite.config.ts:26-44):
- `react-vendor` - React, ReactDOM, React Router
- `animation-vendor` - Framer Motion
- `icons-vendor` - Lucide React
- Individual page chunks (menu, storeinfo, contact, etc.)
- `vendor-css` - All CSS from node_modules

### 2. Performance Optimization Patterns

#### Image Optimization
- **Format**: All images in WebP format
- **Loading**: Custom `LazyImage` component with Intersection Observer
- **Preloading**: Critical images preloaded during page transitions
- **Attributes**: `loading="lazy"`, `fetchpriority="high"` for critical images
- **Placeholder**: SVG data URI placeholders (src/components/LazyImage.tsx:20)

#### Font Optimization
- **Font**: Yuji Syuku (OFL licensed) - self-hosted
- **Format**: WOFF2 (primary) with TTF fallback
- **Preload**: `<link rel="preload">` in index.html:61
- **Fallback**: Yu Mincho (system font) for body text
- **Usage**: Headers use `font-kanteiryuu`, body uses serif

#### Smart Preloading Hook
```typescript
// src/hooks/useNavigationPreload.ts
// Preloads route chunks on link hover/touch using requestIdleCallback
useNavigationPreload();
```

### 3. Styling Conventions

**Tailwind CSS**: Utility-first approach with custom configuration

**Custom Colors** (tailwind.config.js:37-48):
```javascript
'japanese-red': '#A6324D'
'japanese-indigo': '#1B315E'
'japanese-gold': '#B4A582'
'a11y-blue': '#0066CC'      // WCAG AA compliant (4.5:1 contrast)
'a11y-blue-dark': '#004499' // WCAG AAA (7.2:1 contrast)
```

**Font Classes**:
- `font-yuji` - Yuji Syuku for headers
- `font-kanteiryuu` - Yuji with cursive fallbacks for decorative text

**Responsive Breakpoints**:
- Default: Mobile-first (base styles)
- `md:` - Tablet and up (768px+)
- `lg:`, `xl:`, `2xl:` - Available but rarely used

**Component Variants**: Uses CVA (class-variance-authority)
```typescript
// src/components/ui/button-variants.ts
const buttonVariants = cva("base-classes", {
  variants: { variant: {...}, size: {...} }
});
```

### 4. TypeScript Patterns

**Strict Mode Enabled**:
- No implicit `any`
- Strict null checks
- No unused variables (error level)
- ES2020 target

**Common Patterns**:
```typescript
// Component props with optional fields
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

// Menu item with allergens
interface MenuItem {
  name: string;
  description?: string;
  price: number;
  allergens?: string[];
  subsections?: MenuSubsection[];
}
```

### 5. SEO & Metadata Management

**Strategy**: React Helmet Async for dynamic metadata

**Structured Data**: JSON-LD in index.html with restaurant schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "一期一美",
  "servesCuisine": "Japanese",
  "priceRange": "¥¥",
  "openingHoursSpecification": [...],
  "aggregateRating": {...}
}
```

**Meta Tags**: Open Graph + Twitter Cards for social sharing

**Pre-rendering**: SSR for main routes using scripts/prerender.ts

## Development Workflows

### Daily Development Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Type checking and linting
npm run lint

# Production build
npm run build

# Preview production build
npm run preview

# Analyze bundle size
npm run analyze
```

### Build Process

1. **Vite Build** (`npm run build`):
   - TypeScript compilation (ES2020 target)
   - Terser minification (2-pass compression, drop console logs)
   - CSS code splitting
   - Asset hashing for cache busting
   - Manual chunk splitting

2. **Post-Build** (`npm run postbuild`):
   - Executes `scripts/prerender.ts`
   - Pre-renders routes: `/`, `/menu`, `/store-info`, `/dining-philosophy`
   - Injects route-specific metadata
   - Generates static HTML files

3. **Output**: `dist/` directory ready for deployment

### Automated Workflows

#### Daily Ratings Update (update-ratings.yml)

**Schedule**: Daily at 3:00 AM JST (18:00 UTC)
**Triggers**: Cron schedule, manual dispatch, push to main
**Process**:
1. Fetches Google Places API ratings
2. Updates `index.html` with new rating/review count
3. Updates `public/ratings.json`
4. Commits with `[skip ci]` flag to prevent recursive builds

**Environment Variables Required**:
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`

### Deployment Pipeline

**Platform**: Netlify
**Trigger**: Push to `main` branch
**Build Command**: `npm run build`
**Publish Directory**: `dist`

**Configuration** (netlify.toml):
- SPA routing: `/*` → `/index.html` (200 status)
- Asset compression: Gzip/Brotli for CSS/JS/HTML
- Cache headers:
  - HTML: `max-age=0, must-revalidate`
  - Static assets: `max-age=3600`
- Redirect: `/crepe` → external site
- Security headers: X-Frame-Options, Permissions-Policy

## Critical Conventions & Best Practices

### 1. File Naming

- **Components**: PascalCase (`LazyImage.tsx`, `HeroSection.tsx`)
- **Pages**: PascalCase (`Home.tsx`, `Menu.tsx`)
- **Utilities/Data**: kebab-case (`menu-data.ts`, `store-info.ts`)
- **Hooks**: camelCase with `use` prefix (`useNavigationPreload.ts`)
- **Types**: PascalCase (`menu.ts` contains `MenuItem` interface)

### 2. Component Patterns

**Functional Components with Hooks**:
```typescript
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // ...
  return <img />;
};
```

**Layout Composition**:
```typescript
<Layout>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Layout>
```

### 3. State Management

- **No global state library** - Use React Context when needed
- **URL state** - React Router for navigation state
- **Local state** - useState/useReducer for component-level state
- **Form state** - Controlled components

### 4. Accessibility Requirements

**MUST Follow**:
- WCAG AA color contrast minimum (4.5:1 for text)
- Use semantic HTML (`<nav>`, `<header>`, `<main>`, `<section>`)
- Provide `alt` attributes for all images
- Use `aria-label` for icon buttons
- Include `.sr-only` class for screen reader text
- Test keyboard navigation

**Custom Colors**: Use `a11y-*` variants for links/interactive elements

### 5. Performance Budget

**Keep in Mind**:
- Main bundle: Target < 200KB gzipped
- Initial page load: Target < 1s on 3G
- Chunk size warning: 600KB (vite.config.ts:53)
- Lighthouse score: Target 90+ for Performance

**Optimization Checklist**:
- [ ] Images are WebP format
- [ ] Images use lazy loading (except hero)
- [ ] Route is lazy-loaded (except Home)
- [ ] No console logs in production code
- [ ] CSS is split by route
- [ ] Fonts are preloaded

### 6. Code Quality Standards

**ESLint Rules** (eslint.config.js):
- No unused variables (error)
- No console warnings (warning in dev, dropped in production)
- React hooks rules enforced
- TypeScript strict mode

**Pre-commit Checklist**:
```bash
npm run lint          # Must pass with no errors
npm run build         # Must build successfully
```

### 7. Git Workflow

**Branch Strategy**:
- `main` - Production branch (auto-deploys to Netlify)
- Feature branches: `feature/description` or `fix/issue-number`

**Commit Messages**:
```
feat: Add new menu section for seasonal items
fix: Correct lazy loading behavior on Safari
chore: Update Google Maps ratings [skip ci]
docs: Update README with deployment instructions
```

**Important**: Use `[skip ci]` flag for automated commits that shouldn't trigger builds

## Common Tasks & How-To Guide

### Adding a New Page

1. Create page component in `src/pages/`:
```typescript
// src/pages/NewPage.tsx
export const NewPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1>New Page</h1>
    </div>
  );
};
```

2. Add lazy import in `src/App.tsx`:
```typescript
const NewPage = lazy(() =>
  import('./pages/NewPage').then(m => ({ default: m.NewPage }))
);
```

3. Add route:
```typescript
<Route path="/new-page" element={
  <Suspense fallback={null}>
    <NewPage />
  </Suspense>
} />
```

4. Update navigation in `src/components/Layout.tsx`

5. Add to sitemap (`public/sitemap.xml`)

6. Update prerender script if needed (`scripts/prerender.ts`)

### Adding a Menu Item

1. Open `src/data/menu-data.ts`

2. Add item to appropriate section:
```typescript
export const sobaMenu = [
  {
    name: "新しい蕎麦",
    nameEn: "New Soba",
    description: "説明文",
    price: 1200,
    allergens: ["そば", "小麦"],
  },
  // ...
];
```

3. Rebuild and test: `npm run build`

### Updating Store Information

1. Edit `src/data/store-info.ts` for app content

2. Edit `index.html` for structured data (JSON-LD schema)

3. Edit `public/sitemap.xml` if URL changes

### Optimizing a New Image

1. Convert to WebP:
```bash
# Using cwebp (install via: brew install webp)
cwebp -q 80 input.jpg -o output.webp
```

2. Place in `public/image/`

3. Use with LazyImage component:
```typescript
<LazyImage
  src="/image/output.webp"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Updating Fonts

1. Place font files in `public/fonts/yuji-syuku/`

2. Update CSS in `public/fonts/yuji-syuku/yuji-syuku.css`

3. Update preload link in `index.html:61`

4. Optionally generate subset:
```bash
npm run generate-font-subset
```

### Testing PWA Functionality

1. Build production version:
```bash
npm run build
npm run preview
```

2. Open DevTools → Application → Service Workers

3. Test offline:
   - Check "Offline" in Network tab
   - Navigate between pages
   - Verify cached resources load

4. Test installation:
   - Look for install prompt
   - Verify manifest.json loads
   - Check icon rendering

### Debugging Performance Issues

1. **Analyze bundle**:
```bash
npm run analyze
```

2. **Check Lighthouse scores**:
   - Open Chrome DevTools → Lighthouse
   - Run audit for Performance, SEO, Accessibility

3. **Profile runtime performance**:
   - DevTools → Performance tab
   - Record page load or interaction
   - Look for long tasks, layout shifts

4. **Common issues**:
   - Large images: Ensure WebP + lazy loading
   - Bundle too large: Check for duplicate dependencies
   - Slow fonts: Verify WOFF2 preload
   - Layout shift: Add width/height to images

## Important Gotchas & Pitfalls

### 1. Service Worker Caching

**Issue**: Old assets served after deployment
**Solution**: Update `CACHE_NAME` in `public/service-worker.js`
**Best Practice**: Include version or timestamp in cache name

### 2. Font Loading Flash

**Issue**: FOUT (Flash of Unstyled Text) on slow connections
**Current Solution**: Preload WOFF2 in index.html
**Fallback**: System fonts (Yu Mincho) used until custom font loads

### 3. React Router Redirects

**Issue**: Direct URL access returns 404 on Netlify
**Solution**: Already configured in netlify.toml (`/* /index.html 200`)
**Note**: This is SPA routing, not server-side redirects

### 4. Image Paths

**Correct**: `/image/photo.webp` (absolute path from public/)
**Incorrect**: `./image/photo.webp`, `image/photo.webp`
**Reason**: Vite serves public/ at root in production

### 5. TypeScript Import Extensions

**Correct**: `import { Menu } from './pages/Menu'`
**Incorrect**: `import { Menu } from './pages/Menu.tsx'`
**Reason**: TypeScript module resolution

### 6. Tailwind Class Conflicts

**Issue**: Class specificity conflicts
**Solution**: Use `cn()` utility from `src/lib/utils.ts`
```typescript
import { cn } from '@/lib/utils';
className={cn("base-classes", conditionalClass && "added-class")}
```

### 7. Build vs Dev Environment

**Differences**:
- Console logs removed in production (terser config)
- Source maps disabled in production
- Dev server has different caching headers
- Service Worker only registers in production

**Testing Production Builds**:
```bash
npm run build
npm run preview  # Not just npm run dev
```

### 8. Automated Rating Updates

**Issue**: Ratings workflow fails silently
**Debug**:
1. Check GitHub Actions logs
2. Verify secrets are set: `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`
3. Test locally: `npm run fetch-ratings`
4. Check API quota limits

### 9. Lazy Loading Suspense

**Pattern**: Always use `fallback={null}` for route-level suspense
**Reason**: Custom loading states handled by PageTransitionSplash
**Anti-pattern**: Multiple nested loading states create janky UX

### 10. Mobile Menu State

**Issue**: Body scroll persists when mobile menu open
**Solution**: Layout component adds/removes `overflow-hidden` on body
**Test**: Always verify mobile menu on actual devices

## Architecture Decision Records (ADRs)

### Why Vite Instead of Create React App?

**Decision**: Use Vite 5 as build tool
**Reasoning**:
- Native ES modules (faster dev server)
- Superior HMR performance
- Better tree-shaking
- Smaller bundle sizes
- Active maintenance (CRA deprecated)

### Why Self-Host Fonts?

**Decision**: Host Yuji Syuku locally instead of Google Fonts
**Reasoning**:
- GDPR compliance (no third-party requests)
- Faster loading (same origin)
- Guaranteed availability (no CDN dependency)
- Better caching control
- Subset optimization possible

### Why No State Management Library?

**Decision**: Use React Context and local state only
**Reasoning**:
- Simple application (mostly presentational)
- No complex shared state
- Reduces bundle size
- Easier maintenance
- React 18 concurrent features sufficient

### Why Manual Chunk Splitting?

**Decision**: Manual chunks instead of Vite defaults
**Reasoning**:
- Vendor chunks (React, animations, icons) cached separately
- Page chunks loaded on-demand
- Better long-term caching
- Predictable bundle analysis
- Optimal for CDN caching

### Why Netlify Over Vercel/Cloudflare?

**Decision**: Deploy to Netlify
**Reasoning**:
- Simple SPA hosting
- Generous free tier
- Easy redirect management
- Good CDN performance in Japan
- Integrated form handling (future contact form)

## Testing Strategy

### Current State

**No Automated Tests**: This project currently has no unit tests, integration tests, or E2E tests.

**Manual Testing Checklist**:
- [ ] Visual regression on each page
- [ ] Mobile responsiveness (iOS Safari, Android Chrome)
- [ ] Lazy loading behavior
- [ ] Navigation between routes
- [ ] Service Worker registration
- [ ] Offline functionality
- [ ] Font loading
- [ ] Image loading
- [ ] Lighthouse scores (90+ target)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)

### Future Testing Recommendations

If adding tests in the future, consider:
- **Vitest** - Fast unit testing (Vite-native)
- **React Testing Library** - Component testing
- **Playwright** - E2E testing
- **Lighthouse CI** - Performance regression testing

## SEO Checklist

### On-Page SEO (Implemented)

- [x] Unique `<title>` tags per page
- [x] Meta descriptions (React Helmet Async)
- [x] JSON-LD structured data (Restaurant schema)
- [x] Open Graph tags for social sharing
- [x] Twitter Card metadata
- [x] Canonical URLs
- [x] Language declaration (`lang="ja"`)
- [x] Semantic HTML structure
- [x] Alt text for all images
- [x] Internal linking structure
- [x] Mobile-friendly responsive design
- [x] Fast page load times

### Technical SEO (Implemented)

- [x] Sitemap.xml (`/sitemap.xml`)
- [x] Robots.txt (`/robots.txt`)
- [x] HTTPS (Netlify provides SSL)
- [x] Clean URL structure (no `.html` extensions)
- [x] 404 error handling (SPA fallback)
- [x] Breadcrumbs (philosophy sub-pages)
- [x] Schema markup validation (Google Rich Results Test)

### Content SEO (Ongoing)

- [ ] Regular content updates
- [ ] Blog/news section (future consideration)
- [ ] Local SEO optimization (Google My Business integration)
- [ ] Review schema with aggregated ratings (auto-updated daily)

## Accessibility Checklist

### WCAG AA Compliance (Required)

- [x] Color contrast ratios ≥ 4.5:1 for normal text
- [x] Color contrast ratios ≥ 3:1 for large text (18pt+)
- [x] All images have alt text
- [x] Semantic HTML elements
- [x] Keyboard navigation support
- [x] Focus indicators visible
- [x] Skip-to-content links (via Layout)
- [x] ARIA labels for icon buttons
- [x] Screen reader tested classes (`.sr-only`)
- [x] Responsive text sizing (rem units)

### Additional Accessibility Features

- [x] High contrast mode support
- [x] No flashing animations (Framer Motion respects prefers-reduced-motion)
- [x] Form labels properly associated
- [x] Error messages clearly announced
- [x] Sufficient touch target sizes (44x44px minimum)

## Performance Optimization Checklist

### Implemented Optimizations

- [x] Code splitting by route
- [x] Vendor chunk separation
- [x] Tree-shaking (Vite + ESM)
- [x] Image lazy loading (Intersection Observer)
- [x] Image format optimization (WebP)
- [x] Font preloading (WOFF2)
- [x] Font subsetting (glyphs used only)
- [x] CSS code splitting
- [x] Terser minification (2-pass)
- [x] Console log removal in production
- [x] Asset hashing for cache busting
- [x] Service Worker caching
- [x] Resource hints (preload, preconnect)
- [x] Inline critical CSS (in index.html)
- [x] Async script loading (Google Tag Manager)
- [x] Navigation preloading (hover intent)

### Future Optimization Opportunities

- [ ] Image CDN with automatic resizing (Cloudinary/ImageKit)
- [ ] Preload critical route chunks (Home → Menu most common)
- [ ] HTTP/3 (when Netlify supports)
- [ ] Resource hints for external domains
- [ ] Service Worker background sync
- [ ] Push notifications (future feature)

## Monitoring & Analytics

### Current Implementation

**Google Tag Manager**: Loaded asynchronously after first user interaction (index.html)

**Manual Monitoring**:
- Check Netlify Analytics dashboard
- Review Google Search Console
- Monitor Lighthouse CI scores (manual)
- Track Google Places rating updates (automated)

### Future Recommendations

- Set up Sentry for error tracking
- Configure Web Vitals monitoring
- Add Plausible/Fathom for privacy-friendly analytics
- Set up uptime monitoring (UptimeRobot)
- Configure performance budget alerts

## Contact & Support

**Repository**: Internal/private repository
**Website**: https://i-chi-bi.com
**Primary Language**: Japanese (日本語)
**Development Team**: Check git log for contributors

## Additional Resources

### Official Documentation Links

- [React 18 Docs](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router v6 Docs](https://reactrouter.com/en/main)
- [Framer Motion API](https://www.framer.com/motion)

### Build Tool Configuration References

- Vite manual chunks: https://vitejs.dev/config/build-options.html#build-rollupoptions
- Terser options: https://github.com/terser/terser#minify-options
- Tailwind safelist: https://tailwindcss.com/docs/content-configuration#safelisting-classes

### Performance Resources

- Web Vitals: https://web.dev/vitals
- Lighthouse scoring: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- Image optimization: https://web.dev/fast/#optimize-your-images

---

**Last Updated**: 2026-01-24
**Document Version**: 1.0.0
**Codebase Version**: 1.0.0

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server (localhost:5173)
npm run lint             # Run ESLint
npm run build            # Production build
npm run preview          # Preview production build
npm run analyze          # Bundle analysis

# Scripts
npm run fetch-ratings    # Update Google Places ratings
npm run get-place-id     # Get Google Place ID
npm run generate-font-subset  # Generate optimized font

# Git workflow
git checkout -b feature/new-feature
git add .
git commit -m "feat: Add new feature"
git push origin feature/new-feature
# Create PR to main branch

# Debugging
npx vite --debug         # Vite debug mode
npx tsc --noEmit         # Type check without build
```

## Summary for AI Assistants

When working on this codebase:

1. **Always run `npm run lint`** before committing
2. **Test production builds** with `npm run build && npm run preview`
3. **Follow TypeScript strict mode** - no `any` types
4. **Use Tailwind utility classes** - avoid custom CSS
5. **Lazy load new routes** - only Home is eagerly loaded
6. **Optimize images to WebP** before adding to public/image/
7. **Update sitemap.xml** when adding new pages
8. **Maintain WCAG AA compliance** for accessibility
9. **Keep bundle size small** - check with `npm run analyze`
10. **Test on mobile devices** - mobile-first design philosophy

**Core principle**: Performance, accessibility, and user experience are non-negotiable. Every change should improve or maintain these metrics.
