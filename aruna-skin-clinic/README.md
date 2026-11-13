# Aruna Skin Clinic website

Bilingual (English/Hindi) Next.js 15 starter website for Aruna Skin Clinic, Khatima.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/en or http://localhost:3000/hi.

## Clinic assets

The supplied clinic emblem/banner, storefront and portrait have been added under `public/images/` and integrated into the homepage. Confirm that the portrait is Dr. Sachin Goyal and approve it for public use before launch.

## Verify before launch

- Confirm clinic address and consultation timings against the current clinic details.
- Confirm WhatsApp number `+91 70105 01030`.
- Confirm the Google Maps pin and replace `mapUrl` in `lib/clinic.ts` if needed.
- Confirm doctor portrait and logo usage rights.
- Review all medical copy with the treating doctor.
- Add the clinic's domain and configure metadata/analytics.

## Current scope

Version 1 focuses exclusively on Dr. Sachin Goyal and dermatology services. Child-specialist services are intentionally deferred. A bilingual full doctor profile is available at `/en/about` and `/hi/about`. The existing premium green, ivory and gold visual direction is retained.

## Architecture

- Next.js App Router + TypeScript
- Tailwind CSS
- English/Hindi content in `lib/content.ts`
- Clinic details and WhatsApp configuration in `lib/clinic.ts`
- No database or API required for this first version

## Treatment pages (V1 milestone 2)

The site now includes a bilingual treatment directory and static treatment detail pages:

- `/en/treatments` and `/hi/treatments`
- Acne: `/[locale]/treatments/acne-treatment`
- Hair fall and scalp concerns: `/[locale]/treatments/hair-fall-treatment`
- Pigmentation: `/[locale]/treatments/pigmentation-treatment`
- GFC / PRP therapy: `/[locale]/treatments/gfc-prp-therapy`
- Dermatosurgery: `/[locale]/treatments/dermatosurgery`
- Nail disorders: `/[locale]/treatments/nail-disorders`

All treatment pages use static content in `lib/treatments.ts`; no database or API is required. Medical descriptions are intentionally general and should be reviewed and approved by Dr. Sachin Goyal before publication. Do not publish procedure claims, pricing, success rates or treatment availability unless confirmed by the clinic.


## V2.2 homepage refinements
- Entire treatment cards are clickable and point to their matching detail pages.
- Added six generated editorial treatment image assets under `public/images/`.
- Removed decorative circle overlays from doctor photography.
- Removed the offset square frame from the doctor introduction image.
- Synced hair-care and nail-care slugs with the homepage routes.


## V2.3 patient feedback section
- Replaced the Aruna Approach value-proposition band with a patient feedback section.
- Added a responsive, accessible carousel with previous/next controls and slide indicators.
- Feedback data lives in `lib/reviews.ts`.
- The review list is intentionally empty until genuine patient feedback and permission to publish are supplied; the homepage displays a feedback invitation rather than fabricated testimonials.


## V2.4 testimonial card carousel
- Updated patient feedback to match the supplied three-card reference layout.
- Centered section heading and subtitle above a row of review cards.
- Shows up to three cards on desktop and adapts to tablet/mobile.
- Previous/next controls and pagination dots rotate through review groups.
- Uses the existing forest-green brand background with translucent cards and sand accents.
- Empty state uses clearly labelled placeholders, not fabricated patient testimonials.


## V2.5 light testimonial section
- Removed the full-width dark green testimonial background.
- Recreated the supplied reference style: warm white section, deep teal review cards, gold quote marks, and compact circular avatars.
- Retains three visible cards on desktop.
- Carousel arrows and pagination appear when there are more than three genuine reviews.
- Keeps the empty state honest and avoids fabricated patient testimonials.


## V2.6 testimonial carousel autoplay
- Automatically advances the three-card review window every 5 seconds when more than three genuine reviews are configured.
- Pauses while the visitor hovers over or focuses within the testimonial section.
- Stops autoplay when the browser tab is hidden and respects `prefers-reduced-motion`.
- Manual arrows and pagination remain available.
- With only three placeholder cards and no real reviews, there is nothing additional to scroll through; add at least four genuine, consented reviews to activate autoplay.


## V3 Phase 2 — SEO and Google foundations
- Localized homepage metadata, canonical URLs and English/Hindi hreflang alternates.
- Open Graph and Twitter metadata.
- MedicalClinic structured data using supplied clinic information.
- Dynamic sitemap and robots routes.
- Environment variables for production site URL and Search Console verification.
- See `SEO-SETUP.md` for manual Google Search Console and Business Profile setup.
