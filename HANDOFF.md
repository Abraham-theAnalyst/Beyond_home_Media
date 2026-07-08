# Handoff notes

## Asset extraction (2026-07-08)

Both source files are genuine PDFs (not ZIP archives as the build brief
warned). Embedded images were extracted at native resolution with pypdf,
which is better quality than cropping page renders. The crop coordinates in
the original build notes were not needed.

### Skipped / flagged assets

- Profile page 7 "branded building" photo (extracted/profile/p6_Im184.jpg):
  has a beyondhome watermark card baked into the image. Skipped; request the
  original photo from the client.
- Cover photo (p0_Im38.jpg): stock photo of two people at a laptop, not
  company work. Skipped.
- Team member photos on the CEO/team page are too small to crop. Use styled
  initial-avatars until the client supplies photos.
- macallan-abuja-billboard.jpg has a date/address overlay baked into the
  bottom right. Usable at card size; request a clean original.
- The logo wordmark's tagline text ("Marketing and Strategy Consulting") is
  white, so the wordmark only reads on dark backgrounds. Header and footer
  are dark for this reason. Use logo-icon.png on light surfaces.

### Corrections

- CEO photo: the portrait first extracted (glasses, white shirt and jacket,
  profile page 4 Im127) is NOT O'Lekan Oladimeji. The correct CEO portrait
  is the man in the black cap and beyondhome polo with arms crossed
  (page 4 Im121, 292x434 native). public/images/team/olekan-oladimeji.jpg
  now holds the correct photo. Confirm identity of the Im127 portrait with
  the client; it may belong on the team grid once named.

### Quote-form email delivery (FormSubmit)

Quote submissions post to our own /api/quote route, which validates,
filters bots, then forwards the lead server-side to formsubmit.co.

Setup:
1. Set the FORMSUBMIT_TARGET env variable in Vercel (see .env.example).
   Start with the raw address: info@beyondhome.com.ng
2. IMPORTANT, one-time activation: the first submission triggers a
   confirmation email to info@beyondhome.com.ng. Someone must click the
   activation link in it before any leads are delivered.
3. After activation, FormSubmit shows a random alias string for the
   address. Swap FORMSUBMIT_TARGET to that alias; it delivers to the same
   inbox without the raw address sitting in configuration.
4. FormSubmit's free tier covers this site's expected volume.

If delivery ever fails (service down, env variable missing), the API logs
the full lead to the server logs with the prefix "[quote]" and the visitor
is told to reach us on WhatsApp, so no lead disappears silently. Check
Vercel's function logs for "[quote]" if leads seem to stop.

### TODO-CLIENT

- Replace profile-crop photos with original camera files for anything shown
  larger than a card.
- Confirm the client of the teardrop banner photo (sales office, estate
  development) before naming them on the Work page.
- Supply approved client logo files before the logo wall ships with real
  marks.
- Confirm business hours (site currently shows Monday to Friday, 9am to
  5pm as a default).
- Supply social profile URLs (Facebook, Instagram, X) in lib/site.ts;
  icons stay hidden until then.
- Memberships/associations (APCON, OAAN) are NOT claimed anywhere yet;
  confirm before adding a memberships block to the About page.
- Case-study results and quotes in lib/work.ts are empty on purpose;
  sections appear automatically once real, verifiable data is added.
- Confirm the production domain and set NEXT_PUBLIC_SITE_URL in the
  deployment environment (lib/seo.ts falls back to
  https://beyondhome.com.ng). Canonicals, OG URLs, JSON-LD, sitemap and
  robots all derive from it.
- Replace the approximate Ogba-area geo coordinates in
  components/JsonLd.tsx with the exact premises coordinates.

## Build status

- Done: scaffold (Next 16 App Router, Tailwind v4, TypeScript, Framer Motion
  installed), design system (tokens, Anton + Manrope, SectionHeading, Button,
  SectionContainer, AccentShape), header, footer, WhatsApp float, mobile
  sticky bar, and minimal real-copy pages for /, /services,
  /services/[slug], /work, /about, /contact, /blog so every nav link
  resolves.
- Next phase: full Home sections (client wall, featured work, why us),
  full service pages with quote forms, case-study templates, about page
  workflow + team grid + map, contact form, SEO/JSON-LD, performance pass.
