# Elementa Riding Academy — Next.js Website Build Prompt

## Design System Reference (read before every phase)

### Brand Identity
The logo is a **circular Art Nouveau emblem** with a white magnolia/lotus flower on a deep crimson background, surrounded by botanical leaf silhouettes. All brand assets share:
- **Deep crimson** as the primary color: `#7B1015` (use this exact value)
- **Off-white parchment** as the secondary background: `#F5F0EA`
- **Pure white** for icon fills and text on dark surfaces
- **Art Nouveau ornamental motifs**: botanical curves, leaf patterns, decorative corner pieces

### Typography
- **Display / Headings**: `Canela` (serif) — import via `@fontsource/canela` or self-host from `/public/fonts/`. Fallback: `'Playfair Display', Georgia, serif`
- **Body / UI**: `Inter` or `DM Sans` — clean, neutral
- **Scale**: h1 96px → h2 60px → h3 40px → h4 28px → body 16px

### Color Tokens (define in `tailwind.config.ts` and `globals.css`)
```
--crimson:        #7B1015
--crimson-dark:   #550B0F
--crimson-light:  #A01820
--parchment:      #F5F0EA
--parchment-dark: #EDE5D8
--ink:            #1A1008
--muted:          #7A6A5A
--white:          #FFFFFF
```

### Ornamental Assets (`/public/media/`)
Copy the provided files from `./media` to `public/media/`:
- `logo.png` — main circular logo
- `post_corner.png` — ornamental corner for cards/sections
- `reels_corner.png` — corner variant
- `0.png` — icon sprite sheet (6 crimson circular icons)

---

## Phase 1 — Project Scaffold & Design Tokens

**Goal**: Set up Next.js 14 with App Router, Tailwind, fonts, and the global design system.

### Prompt for IDE:

```
Create a new Next.js 14 project with App Router, TypeScript, and Tailwind CSS.

1. Install dependencies:
   - @next/font or next/font for Canela (self-hosted) and Inter (Google)
   - framer-motion (for animations)
   - clsx and tailwind-merge (for className utilities)

2. In tailwind.config.ts, extend the theme with:
   - colors: crimson (#7B1015), crimsonDark (#550B0F), crimsonLight (#A01820),
     parchment (#F5F0EA), parchmentDark (#EDE5D8), ink (#1A1008), muted (#7A6A5A)
   - fontFamily: canela: ['Canela', 'Playfair Display', 'Georgia', 'serif'],
     sans: ['Inter', 'sans-serif']
   - Extend borderRadius with: ornamental: '0px' (we use decorative SVG borders
     instead of CSS radius on key sections)

3. In app/globals.css:
   - Define all CSS custom properties from the color tokens above
   - Add a `.paper-texture` utility: use a subtle noise SVG data URI as background,
     overlaid at 4% opacity on parchment bg — creates the handmade paper feel matching
     the brand assets
   - Add `.ornament-corner` utility for positioning corner PNGs absolutely

4. Create lib/fonts.ts:
   - Load Canela (self-hosted woff2 in /public/fonts/) using next/font/local
   - Load Inter from next/font/google
   - Export both as CSS variables: --font-canela and --font-sans

5. In app/layout.tsx:
   - Apply both font CSS variables to <html>
   - Set default bg to parchment (#F5F0EA), text to ink (#1A1008)
   - Add <meta name="theme-color" content="#7B1015">

6. Create components/ui/ folder with:
   - OrnamentDivider.tsx — renders the floral divider SVG (the lotus motif from
     post_corner.png) as a centered SVG separator between sections
   - OrnamentCorner.tsx — places corner PNG at a given position (tl/tr/bl/br)
     as an absolute-positioned decorative element inside a relative container
   - CrimsonBadge.tsx — circular badge matching the icon style: dark crimson
     background, white SVG icon, botanical leaf pattern ring around the border

7. Create a design-tokens story page at /design-system (dev only) showing all
   colors, type scale, and ornament components rendered together.
```

---

## Phase 2 — Hero Section with Fullscreen Video

**Goal**: A cinematic fullscreen video header with Art Nouveau overlay and animated text entrance.

### Prompt for IDE:

```
Create app/components/sections/Hero.tsx for Elementa Riding Academy.

Requirements:

1. FULLSCREEN VIDEO BACKGROUND:
   - <video> element: autoPlay muted loop playsInline
   - Source: /videos/hero.mp4 (user will place their file here)
   - object-fit: cover, position: absolute, inset: 0, z-index: 0
   - Fallback poster image: /media/hero-poster.jpg

2. DARK OVERLAY:
   - A gradient overlay on top of the video:
     linear-gradient(to bottom, rgba(30,5,5,0.55) 0%, rgba(80,10,15,0.35) 60%, rgba(245,240,234,1) 100%)
   - This creates a cinematic fade into the parchment below — matching the
     "torn paper reveal to crimson" aesthetic in brand assets

3. NAVIGATION BAR (inside hero, transparent):
   - Logo: <Image src="/media/logo.png"> on the left, 56px circle
   - Nav links centered: "О нас" | "Тренировки" | "Наши кони" | "Цены" | "Контакты"
   - Font: Canela 15px, letter-spacing 0.15em, text white
   - Instagram link (icon) on the right
   - On scroll > 80px: switch to sticky header with bg crimson (#7B1015), smooth transition

4. HERO CONTENT (centered, z-index above video):
   - Eyebrow text: "ELEMENTA RIDING ACADEMY" — Inter, 12px, letter-spacing 0.3em,
     text white, opacity 0.8
   - Main headline (2 lines):
     Line 1: "Верховая езда —" — Canela, 80px, text white
     Line 2: "это контакт" — Canela, 80px, italic, text white
   - Subline: "Школа верховой езды в 20 минутах от Праги"
     Inter 18px, text white, opacity 0.75
   - CTA button: "Записаться на тренировку"
     — crimson background, white text, Canela 16px,
     no border-radius (rectangular is more classical),
     border: 1px solid rgba(255,255,255,0.3),
     padding: 14px 36px
   - Scroll indicator: animated chevron-down at bottom center

5. ORNAMENTAL CORNERS:
   - Place post_corner.png at top-left and (mirrored CSS scaleX(-1)) top-right
   - Size: 140px, opacity: 0.6
   - These sit above the overlay, below the nav

6. ENTRANCE ANIMATION (framer-motion):
   - Eyebrow fades in at 0.3s delay
   - Line 1 slides up from 30px below at 0.6s
   - Line 2 slides up at 0.9s
   - Subline fades at 1.1s
   - CTA scales from 0.95 at 1.3s
   - Use useReducedMotion() to disable for accessibility

Section height: 100vh minimum.
```

---

## Phase 3 — Philosophy / About Section

**Goal**: Elegant editorial section presenting the four pillars of the academy with Art Nouveau icon badges.

### Prompt for IDE:

```
Create app/components/sections/Philosophy.tsx

This section introduces Elementa's teaching system. Background: parchment (#F5F0EA)
with paper texture overlay.

1. SECTION HEADER:
   - OrnamentDivider component at the top (the lotus SVG, crimson)
   - Section label: "НАША ФИЛОСОФИЯ" — Inter 11px, letter-spacing 0.35em,
     color crimson, centered
   - Headline: "Лошадь и всадник учатся понимать друг друга"
     — Canela 52px, color ink (#1A1008), centered, max-width 700px, margin auto
   - Paragraph intro from the "About us" content — Inter 17px, line-height 1.8,
     color muted (#7A6A5A), max-width 620px, centered

2. FOUR PILLARS GRID:
   Layout: 4-column grid on desktop, 2-col on tablet, 1-col on mobile

   Each pillar card:
   - Top: a circular crimson icon badge (80px) using the icon style from 0.png
     (the six icon circles). Each badge has a botanical ring pattern.
     Use inline SVG for the four icons:
     • Пиллар 1 "Биомеханика всадника" → horse silhouette icon
     • Пиллар 2 "Правильная посадка" → horseshoe icon
     • Пиллар 3 "Зоопсихология лошади" → horse head icon
     • Пиллар 4 "Классическая школа" → rocking horse / ribbon icon
   - Badge background: radial crimson gradient matching 0.png style
   - Title: Canela 22px, ink color, centered, margin-top 16px
   - Description: Inter 15px, muted color, centered, 2-3 lines
   - Thin crimson bottom border (1px) on hover

   Card background: white (#FFFFFF), no border-radius (classical feel),
   padding 40px 32px, border: 1px solid rgba(123,16,21,0.12)

3. SERVICES TEASER (below the grid):
   A horizontal crimson band (#7B1015), full-width, 80px tall
   Centered text: "Мы предлагаем · Тренировки · Прогулки · Фотосессии · Мероприятия"
   — Inter 13px, letter-spacing 0.25em, white, opacity 0.9
   Animate text with a slow marquee (CSS animation) — infinite loop

4. Animation: each pillar card uses Intersection Observer to animate in with
   staggered fade-up (0.15s per card) when section enters viewport.
```

---

## Phase 4 — Our Horses Carousel

**Goal**: A rich, full-bleed horizontal scroll showcase of the four horses with detailed profile cards.

### Prompt for IDE:

```
Create app/components/sections/Horses.tsx

Four horses to display: Корнет, Дюшес, Гангстер, Соломина.

1. SECTION HEADER:
   - Parchment background with paper texture
   - Label + headline same pattern as Phase 3
   - Headline: "Наши кони" — Canela 64px

2. HORSE CAROUSEL:
   Layout: horizontal scroll container with snap-x scroll-mandatory
   Each card: 480px wide on desktop, 90vw on mobile, full-height (580px)
   Gap between cards: 24px
   Custom scrollbar: hidden (overflow-x: auto, scrollbar-width: none)

   Each Horse Card:
   a) IMAGE AREA (top 65% of card):
      - <Image> component with fill, object-fit cover
      - Source: /media/horses/[name].jpg (user places photos)
      - Gradient overlay at bottom: transparent → ink (for text legibility)
      - Ornament corner PNG at top-right, 80px, opacity 0.5

   b) INFO AREA (bottom 35%, crimson bg #7B1015):
      - Horse name: Canela 36px, white, italic
      - Breed + age: Inter 13px, white opacity 0.7, letter-spacing 0.1em
      - Short description: 2 lines, Inter 14px, white opacity 0.85
      - Suitability badge: rounded pill, white text, small icon
        (e.g. "Для опытных" / "Для новичков" / "Универсальный")

   c) HOVER STATE:
      - Card scales to 1.02
      - A crimson decorative rule (2px, full width) slides in from left at top of info area
      - Description expands to show full text (max-height animation)

3. NAVIGATION ARROWS:
   - Custom prev/next buttons using the ornamental crimson circular badge style
   - Position: outside the carousel on left and right
   - Arrow icon in white, 24px
   - On mobile: hidden, use swipe only

4. HORSE COUNTER:
   Small "01 / 04" style indicator — Canela italic, crimson, centered below carousel

5. CONTENT DATA: Define a horsesData array in the component with all four
   horses' details from the provided content.
```

---

## Phase 5 — Pricing Section

**Goal**: An elegant, easy-to-read pricing table styled as an equestrian programme card.

### Prompt for IDE:

```
Create app/components/sections/Pricing.tsx

Background: alternate between parchment and white for visual rhythm.

1. SECTION STRUCTURE:
   - Three columns on desktop: "Тренировки", "Прогулки", "Услуги"
   - Full-width on mobile (stacked)

2. EACH PRICING COLUMN:
   Container: white background, border: 1px solid rgba(123,16,21,0.15),
   no border-radius, padding 48px 40px
   Top ornamental corner images (post_corner.png) at tl and tr, 60px, opacity 0.4

   Header:
   - Canela 28px, ink, category title
   - 1px crimson rule below, centered diamond/floral ornament (SVG) on the rule

   Price rows:
   Each row:
   - Service name: Inter 15px, ink, line-height 1.5
   - Price: Canela 24px, crimson, right-aligned, bold
   - Thin 0.5px dashed separator: rgba(123,16,21,0.15)
   - On hover: row bg changes to rgba(123,16,21,0.04)

3. SPECIAL CARDS (highlighted):
   - Children's prices card: parchment bg, crimson left border 3px
   - Photo session card: crimson bg, white text, OrnamentCorner on all 4 corners
   - Events card: ink bg, white text, "Обсуждается индивидуально" in Canela italic

4. BOOKING NOTE:
   Bottom of section, centered:
   - Icon: calendar (from brand icon set)
   - Text: "Предоплата за бронирование — 500 крон. Отмена позднее чем за 24 часа — не возвращается."
   - Inter 14px, muted color

5. CTA below pricing:
   Large crimson button: "Записаться и уточнить расписание"
   Below it: "или позвоните: 778-071-177" — Inter 14px, muted, linked as tel:
```

---

## Phase 6 — Trainers & Languages + Instagram Feed

**Goal**: Trust-building section with language badges and a mocked Instagram grid.

### Prompt for IDE:

```
Create app/components/sections/TrustSection.tsx

Part A — LANGUAGES BAND:
Full-width crimson strip (#7B1015), 120px height
Centered flex row with language flags/labels:
🇷🇺 Русский · 🇨🇿 Česky · 🇺🇦 Українська · 🇬🇧 English
Each with Inter 14px, white, letter-spacing 0.1em
Separated by the small crimson floral ornament (reels_corner used as separator, 20px)

Part B — "WHY ELEMENTA" GRID:
3 × 2 card grid on parchment background
Each card has:
- Large Canela italic number ("01", "02"...) in crimson at top-left, 72px, opacity 0.15
- Short benefit title: Canela 22px, ink
- Description: Inter 14px, muted, 3 lines
Cards: white bg, 1px crimson-tinted border, generous padding

Benefits to display:
1. Индивидуальный подход — only by appointment
2. Опытные тренеры — multilingual staff
3. 4 уникальных коня — from champion bloodlines
4. Мягкие методы — Pat Parelli methods
5. 20 минут от Праги — easy access
6. Фотосессии и мероприятия — unique experiences

Part C — INSTAGRAM TEASER:
Section label "МЫ В INSTAGRAM" — styled same as other labels
@elementa.riding.academy link in Canela 28px, crimson, underline on hover

Photo grid: 6 placeholder tiles (300×300px each) in a 3×2 grid
Each tile: dark crimson bg with a centered white logo icon (opacity 0.3)
On hover: overlay with Instagram icon and "Смотреть в Instagram"
Link each to https://www.instagram.com/elementa.riding.academy

Note: In production, replace with real Instagram embed or API integration.
```

---

## Phase 7 — Contact & Location Section

**Goal**: Location details, map embed, and contact form — all in brand style.

### Prompt for IDE:

```
Create app/components/sections/Contact.tsx

Layout: two-column on desktop (info left, map right), single column on mobile.

LEFT COLUMN — Contact Info:
Background: ink (#1A1008), padding 64px 56px
OrnamentCorner at all four corners, opacity 0.3, 100px

- Logo: /media/logo.png, 72px, centered
- Academy name: Canela 32px, white
- Crimson ornament divider

Info rows (each with icon + text):
📍 Bojanovice 107 — 20 минут от Праги
📞 778-071-177
📸 @elementa.riding.academy (linked)
🕐 Без выходных, только по записи

Languages row (same as band from Phase 6)

Contact form (minimal):
- Name input: parchment bg, no border-radius, 1px crimson border
- Phone/email input
- Message textarea: 4 rows
- Submit: crimson button, white Canela text, full-width
- Form uses react-hook-form for validation (install it)
- On submit: POST to /api/contact (create a Next.js API route that sends
  an email via nodemailer or logs to console in dev)

RIGHT COLUMN — Map:
Embed Google Maps iframe for "Bojanovice 107, Czech Republic"
Height: 100% of column (min 500px)
Custom map style: desaturated warm tones to match brand (use a snazzy maps
style JSON for muted/sepia look — apply via Maps JS API or use static map)
Crimson marker pin overlay (absolute positioned SVG horseshoe icon)

BOTTOM: Full-width footer
- Parchment bg
- Centered logo (40px) + "© 2024 Elementa Riding Academy" in Inter 13px muted
- OrnamentDivider above footer line
- Privacy policy link, Instagram link
```

---

## Phase 8 — Polish, Animations & SEO

**Goal**: Tie everything together with scroll animations, micro-interactions, performance, and metadata.

### Prompt for IDE:

```
Apply final polish across the entire Elementa Riding Academy website.

1. SCROLL ANIMATIONS (framer-motion):
   Create a reusable <FadeUp> wrapper component:
   - Uses useInView + motion.div
   - Default: opacity 0→1, y 40→0, duration 0.7, easing [0.25, 0.1, 0.25, 1]
   - Wrap every section's primary content in <FadeUp>
   - Respect useReducedMotion()

   Create <StaggerChildren> for grids:
   - Wraps a list and staggers children by 0.12s each

2. STICKY HEADER TRANSITION:
   useScrollPosition hook → when scrollY > 80:
   - Header bg: transparent → crimson (#7B1015) with backdrop-blur: 0
   - Logo changes from full-color to white version
   - Nav link color: white → white (stays white)
   - Box shadow: 0 2px 20px rgba(80,10,15,0.3)

3. CURSOR (desktop only):
   Custom cursor: small crimson circle (12px) that follows mouse with a slight lag
   On clickable elements: cursor expands to 40px, fills with rgba(123,16,21,0.15)

4. PAGE TRANSITIONS:
   Use next/navigation and framer-motion AnimatePresence for route transitions:
   - Outgoing page: opacity 1→0, y 0→-20, duration 0.25
   - Incoming page: opacity 0→1, y 20→0, duration 0.35, delay 0.1

5. SEO & METADATA (app/layout.tsx and each page):
   export const metadata = {
     title: 'Elementa Riding Academy — Школа верховой езды в Праге',
     description: 'Верховая езда, тренировки, прогулки и фотосессии в 20 минутах от Праги. Bojanovice 107. Запись: 778-071-177',
     keywords: ['верховая езда Прага', 'конная школа Чехия', 'horse riding Prague', 'jezdectví Praha'],
     openGraph: {
       title: 'Elementa Riding Academy',
       description: '...',
       images: ['/media/og-image.jpg'],
       locale: 'ru_RU',
       type: 'website',
     },
     robots: { index: true, follow: true },
   }

6. PERFORMANCE:
   - All <Image> components use priority={true} for above-fold images
   - Lazy load below-fold horse images with loading="lazy"
   - Video in hero: add <link rel="preload"> in <head> for hero.mp4
   - Bundle analysis: add @next/bundle-analyzer to scripts
   - Use next/dynamic for heavy sections (map, carousel) with ssr: false

7. ACCESSIBILITY:
   - Skip-to-main-content link as first focusable element
   - All images have descriptive alt text in Russian
   - Focus styles: crimson outline (2px solid #7B1015) on all interactive elements
   - aria-labels on icon-only buttons
   - Landmark roles: <header>, <main>, <nav>, <section>, <footer>

8. MOBILE MENU:
   Hamburger menu for screens < 768px
   Full-screen overlay: ink background, ornament corners, centered nav links
   Canela 48px links, staggered entrance animation
   Close button top-right, ESC key support

9. FINAL FILE STRUCTURE should look like:
   app/
     layout.tsx
     page.tsx (imports all section components in order)
     api/contact/route.ts
   components/
     sections/ (Hero, Philosophy, Horses, Pricing, TrustSection, Contact)
     ui/ (OrnamentDivider, OrnamentCorner, CrimsonBadge, FadeUp, StaggerChildren)
     layout/ (Header, Footer, MobileMenu)
   lib/
     fonts.ts
     hooks/ (useScrollPosition, useReducedMotion)
   public/
     media/ (logo.png, post_corner.png, reels_corner.png, 0.png, horses/)
     fonts/ (Canela woff2 files)
     videos/ (hero.mp4)
```

---

## Quick Reference: Color Usage Rules

| Element | Color |
|---|---|
| Section backgrounds | Alternating parchment `#F5F0EA` and white `#FFFFFF` |
| Accent sections (band/footer) | Crimson `#7B1015` or Ink `#1A1008` |
| Primary text | Ink `#1A1008` |
| Secondary text | Muted `#7A6A5A` |
| All headings on light bg | Ink `#1A1008` |
| All headings on dark bg | White `#FFFFFF` |
| Prices, accent labels | Crimson `#7B1015` |
| Buttons (primary) | Crimson `#7B1015` bg, white text |
| Ornamental elements | Crimson `#7B1015` |
| Hover highlights | `rgba(123,16,21,0.06)` |

## Typography Rules

| Role | Font | Size | Style |
|---|---|---|---|
| Hero headline | Canela | 80–96px | italic |
| Section headline | Canela | 48–64px | normal |
| Card title | Canela | 22–28px | normal |
| Price display | Canela | 24–32px | normal |
| Body copy | Inter | 15–17px | normal |
| Labels / eyebrows | Inter | 11–13px | uppercase, 0.3em spacing |
| Navigation | Inter | 14–15px | 0.15em spacing |