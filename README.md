# Beyond Home Limited — website

Marketing site for Beyond Home Limited (beyondhome), a media advertising
solutions provider in Ogba, Ikeja, Lagos. Built with Next.js (App Router),
Tailwind CSS and Framer Motion. See HANDOFF.md for open client items.

## Run it

```bash
npm install
npm run dev     # local dev server
npm run build   # production build
npm start       # serve the production build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `FORMSUBMIT_TARGET` — where quote-form leads are emailed, via
  [FormSubmit](https://formsubmit.co). Use the raw inbox address first
  (`info@beyondhome.com.ng`), then switch to the random alias FormSubmit
  provides after activation. Server-only; never exposed to the browser.
- `NEXT_PUBLIC_SITE_URL` — absolute production URL. Canonicals, Open
  Graph, JSON-LD, sitemap and robots derive from it.

## Quote-form email delivery (FormSubmit)

Both quote forms (contact page and every service page) post to the
internal `/api/quote` route. The route validates the fields, drops
honeypot (bot) submissions, then forwards the lead server-side to
`https://formsubmit.co/ajax/{FORMSUBMIT_TARGET}` so the destination
address never appears in client code.

Setup on Vercel:

1. Add `FORMSUBMIT_TARGET=info@beyondhome.com.ng` to the project's
   environment variables.
2. **One-time activation:** the first submission makes FormSubmit send a
   confirmation email to that inbox. Click the activation link in it;
   until then, no leads are delivered.
3. After activation, FormSubmit shows a random alias for the address.
   Replace `FORMSUBMIT_TARGET` with the alias — same inbox, but the raw
   address stays out of configuration.
4. FormSubmit's free tier is enough for this site's volume.

If delivery fails or the variable is missing, the route logs the complete
lead to the server logs (search for `[quote]`) and the visitor is asked to
reach out on WhatsApp instead, so no lead is lost silently.

## Deploying

The site deploys as a standard Next.js app on Vercel. All pages are
statically generated except `/api/quote`.
