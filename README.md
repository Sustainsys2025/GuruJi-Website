# Cambridge GuruJi Parivaar Website

A spiritual community website for Cambridge GuruJi Parivaar, built with Next.js 16, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Generation)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Roboto Condensed, Italiana (Google Fonts)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, community intro, CTA, subscribe |
| About Us | `/about` | Community info, mission, gatherings, seva |
| Satsang Schedule & Venue | `/schedule` | Schedule tables, venue details, guidelines |
| Photo Gallery | `/gallery` | Grid of 12 event galleries |
| Event Gallery | `/gallery/[slug]` | Individual event photos with lightbox |
| Books & Guides | `/books` | Spiritual literature |
| Contact Us | `/contact` | Contact info, Google Maps, contact form |

**Total:** 23 statically generated pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Editing Content

All text content is stored in **editable JSON files** in `src/data/`:

| File | Controls |
|------|----------|
| `site.json` | Site name, nav links, contact info, announcement banner |
| `home.json` | Homepage hero, intro, CTA, subscribe section |
| `about.json` | About page sections with images |
| `schedule.json` | Satsang schedule, venue, guidelines |
| `gallery.json` | Gallery events with photo paths |
| `books.json` | Books & guides listing |
| `contact.json` | Contact form, business info, Google Maps embed |

### Adding a New Event Gallery

1. Create a folder in `public/images/gallery/` with event photos
2. Add a new entry to `src/data/gallery.json` in the `events` array
3. The dynamic route `/gallery/[slug]` will automatically pick it up
4. Run `npm run build` to generate the new static page

## Design System

| Token | Value |
|-------|-------|
| Primary | Maroon `#800020` / Saffron `#FF9933` / Gold `#D4A843` |
| Background | Cream `#FFF8F0` |
| Heading Font | Roboto Condensed (Bold 700) |
| Decorative Font | Italiana |
| Body Font | Roboto Condensed (Regular 400) |
| Container Max Width | 1280px (`max-w-7xl`) |

## Deployment

Compatible with:

- **Vercel** (recommended) - zero config
- **Netlify** - use static export
- **Any static host** - use static export

## Project Structure

```
guruji-site/
├── public/
│   └── images/
│       ├── gallery/        # 12 event folders with photos
│       └── guruji-pics/    # Site-wide GuruJi images
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── books/
│   │   ├── contact/
│   │   ├── gallery/
│   │   │   └── [slug]/
│   │   ├── schedule/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/         # 11 reusable React components
│   └── data/               # 7 editable content JSON files
├── package.json
├── tsconfig.json
└── README.md
```
