# Mrugank Deshpande — Portfolio

A modern portfolio website built with **Next.js 14**, **React Three Fiber**, and **Framer Motion**.

## Stack

- **Framework:** Next.js 14 (App Router)
- **3D:** React Three Fiber + @react-three/drei + Three.js
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS + CSS Variables
- **Language:** TypeScript
- **Font:** Space Grotesk + Inter + JetBrains Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or simply push to GitHub and connect the repo on [vercel.com](https://vercel.com).

## Customize

All content lives in `lib/data.ts` — update your name, links, projects, experience there.

## Structure

```
portfolio/
├── app/
│   ├── globals.css     ← global styles & CSS vars
│   ├── layout.tsx      ← metadata & root layout
│   └── page.tsx        ← assembles all sections
├── components/
│   ├── Cursor.tsx      ← custom animated cursor
│   ├── Navbar.tsx      ← sticky nav
│   ├── HeroScene.tsx   ← Three.js canvas (particles + geometry)
│   ├── Hero.tsx        ← hero section
│   ├── About.tsx       ← about + stats + code block
│   ├── Experience.tsx  ← timeline
│   ├── Projects.tsx    ← project cards grid
│   ├── Skills.tsx      ← skill groups
│   ├── Credentials.tsx ← certs + research + extras
│   ├── Contact.tsx     ← contact section
│   └── Footer.tsx      ← footer
└── lib/
    └── data.ts         ← ALL content (update this!)
```
