# Indruka Tours and Travels — Privacy Policy Components

Fully modular, responsive Privacy Policy built with **Next.js (App Router)**, **shadcn/ui**, and **Tailwind CSS**.  
Primary brand color: **Blue (`blue-600`)**.

---

## 📁 File Structure

```
├── privacyData.ts                        ← All content + types (edit here)
├── app/
│   └── privacy-policy/
│       └── page.tsx                      ← Next.js route (drop into your app/)
└── components/
    └── privacy/
        ├── index.ts                      ← Barrel export
        ├── PrivacyPage.tsx               ← Main composed layout
        ├── PrivacyHero.tsx               ← Blue hero banner with shield icon
        ├── PrivacyTableOfContents.tsx    ← Sticky sidebar (desktop) + accordion (mobile)
        ├── PrivacySection.tsx            ← Individual policy section block
        ├── PrivacySummaryBanner.tsx      ← "At a glance" 4-card summary
        └── PrivacyContactCard.tsx        ← Contact card with email/phone/address
```

---

## 🚀 Quick Start

### 1. Copy files into your project

```
privacyData.ts          → src/privacyData.ts  (or lib/privacyData.ts)
components/privacy/     → src/components/privacy/
app/privacy-policy/     → src/app/privacy-policy/
```

### 2. Make sure you have shadcn/ui installed

```bash
npx shadcn@latest init
npx shadcn@latest add button
```

### 3. Tailwind config — no extra plugins needed

The components use only core Tailwind utility classes.

### 4. Update your path alias

Make sure `@/` is mapped to your `src/` (or root) in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🎨 Customization

### Update company info

Edit `privacyData.ts` at the top:

```ts
export const COMPANY_NAME = "Indruka Tours and Travels";
export const COMPANY_EMAIL = "info@indrukattours.com";
export const COMPANY_PHONE = "+975 XXXX XXXX";
export const COMPANY_ADDRESS = "Thimphu, Bhutan";
export const LAST_UPDATED = "January 1, 2025";
```

### Add / edit policy sections

All sections live in the `privacySections` array in `privacyData.ts`.  
Each section supports three content block types:

```ts
{ type: "paragraph"; text: string }
{ type: "subheading"; text: string }
{ type: "list"; items: string[] }
```

### Change primary color

Replace `blue-600` / `blue-700` / `blue-800` globally to any Tailwind color.  
A global find-and-replace across the `components/privacy/` folder does the job.

---

## 🧩 Use Individual Components

You can import any component independently:

```tsx
import {
  PrivacyPage,           // full page layout
  PrivacyHero,           // hero banner only
  PrivacySummaryBanner,  // "at a glance" 4-card grid
  PrivacyTableOfContents,// sticky TOC
  PrivacySectionBlock,   // single policy section
  PrivacyContactCard,    // blue contact card
} from "@/components/privacy";
```

### Example: embed just the contact card in your Contact page

```tsx
import { PrivacyContactCard } from "@/components/privacy";

export default function ContactPage() {
  return (
    <main>
      {/* ... your content ... */}
      <PrivacyContactCard />
    </main>
  );
}
```

---

## ✅ Features

- **Responsive** — mobile-first, collapses to single column on small screens
- **Sticky Table of Contents** with active-section highlighting (desktop)
- **Accordion TOC** on mobile
- **Smooth scroll** to sections
- **"At a glance" summary** with 4 highlight cards
- **Contact card** with direct mailto/tel links
- **Fully typed** with TypeScript interfaces
- **shadcn/ui Button** component used (easily swappable)
- **No external dependencies** beyond shadcn + Tailwind + lucide-react
