# Yashwant Shukla — Portfolio

Premium personal portfolio for Yashwant Shukla, Manager — Automation & Operations.

## Stack

- **React 18** — UI framework
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion 11** — Animations
- **Lucide React** — Icons

## Structure

```
src/
├── components/        # All UI sections
│   ├── Nav.jsx        # Sticky nav + mobile hamburger drawer
│   ├── Hero.jsx       # Hero section with animated background
│   ├── Metrics.jsx    # Impact dashboard with animated counters
│   ├── Timeline.jsx   # Career evolution timeline
│   ├── CaseStudies.jsx  # Featured case studies (expandable)
│   ├── AdditionalProjects.jsx  # 5 additional automation cards
│   ├── Approach.jsx   # 7-step process diagram
│   ├── TechStack.jsx  # Tech categories (no skill bars)
│   ├── Contact.jsx    # Contact form + social links
│   └── Footer.jsx     # Footer with back-to-top
├── data/
│   └── index.js       # All content data (edit here)
├── hooks/
│   └── useInView.js   # Scroll-triggered animation hooks
├── App.jsx
├── main.jsx
└── index.css
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push this repo to GitHub
2. Import in [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — click Deploy

### Option 3 — Drag & Drop
1. Run `npm run build`
2. Drag the `dist/` folder to [vercel.com/new](https://vercel.com/new)

## Customisation

### Update your contact info
Edit `src/components/Contact.jsx` — replace the LinkedIn URL and email address.

### Update resume link
Replace `href="/resume.pdf"` in `Nav.jsx` and `Hero.jsx` with your actual resume URL, and place `resume.pdf` in the `public/` folder.

### Update content
All text content lives in `src/data/index.js`. Edit metrics, timeline entries, case studies, and tech stack there.

### Wire up the contact form
In `Contact.jsx`, replace the `handleSubmit` function with a real form handler:
- [Formspree](https://formspree.io) — easiest, free tier available
- [Resend](https://resend.com) — email API

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
  setLoading(false)
}
```

## SEO

Update `index.html` with:
- Your real domain in `<link rel="canonical">`
- Your real OG image URL
- Your LinkedIn profile URL in the structured data

## Responsive Breakpoints

| Breakpoint | Width  | Layout                        |
|------------|--------|-------------------------------|
| Mobile     | 375px  | Single column, full-width CTAs |
| Mobile L   | 430px  | Single column                 |
| Tablet     | 768px  | 2-column grids                |
| Desktop    | 1024px | Full multi-column layouts     |
| Wide       | 1440px | Max-width container           |
