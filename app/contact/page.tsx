import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get a Quote | Advertising & Signage in Lagos | Beyond Home",
  absolute: true,
  description:
    "Call, email or WhatsApp Beyond Home Limited in Ikeja, Lagos for billboards, signage, vehicle branding and campaign quotes. Or send the quote form.",
  path: "/contact",
});

/* TODO-CLIENT: add real social profile URLs in lib/site.ts. Icons render
   only for non-empty URLs so no dead links ship. */
const socialLinks = [
  { label: "Facebook", href: site.socials.facebook },
  { label: "Instagram", href: site.socials.instagram },
  { label: "X (Twitter)", href: site.socials.twitter },
].filter((s) => s.href);

export default function ContactPage() {
  return (
    <>
      {/* Direct channels */}
      <SectionContainer tone="dark">
        {/* No entry animation: above-the-fold heading is the LCP element */}
        <SectionHeading dark="Get a" gold="Quote" as="h1" onDark />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Tell us the brand, the format and where you want it seen. Use the
          form, or skip it and message us directly.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0.05}>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full bg-white/5 p-7 transition-colors hover:bg-gold"
            >
              <WhatsAppIcon className="h-8 w-8 text-gold group-hover:text-ink" />
              <span className="display-heading mt-4 block text-xl text-white group-hover:text-ink">
                WhatsApp
              </span>
              <span className="mt-1 block text-sm text-white/70 group-hover:text-ink/80">
                Fastest way to reach us
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={site.phoneHref}
              className="group block h-full bg-white/5 p-7 transition-colors hover:bg-gold"
            >
              <PhoneIcon className="h-8 w-8 text-gold group-hover:text-ink" />
              <span className="display-heading mt-4 block text-xl text-white group-hover:text-ink">
                {site.phoneDisplay}
              </span>
              <span className="mt-1 block text-sm text-white/70 group-hover:text-ink/80">
                {site.hours}
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={`mailto:${site.email}`}
              className="group block h-full bg-white/5 p-7 transition-colors hover:bg-gold"
            >
              <span className="display-heading block text-3xl leading-8 text-gold group-hover:text-ink">
                @
              </span>
              <span className="display-heading mt-4 block break-all text-lg text-white group-hover:text-ink">
                {site.email}
              </span>
              <span className="mt-1 block text-sm text-white/70 group-hover:text-ink/80">
                For briefs and documents
              </span>
            </a>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Quote form */}
      <SectionContainer id="quote">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <SectionHeading dark="Request a" gold="quote" />
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Five fields and you are done. We reply with options and a price
              on the next business day.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm showBudget />
          </Reveal>
        </div>
      </SectionContainer>

      {/* Address, hours, map, socials */}
      <SectionContainer tone="gray">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <SectionHeading dark="Visit" gold="us" />
            <ul className="mt-6 space-y-2 text-base text-ink/80">
              <li>{site.address}</li>
              <li>{site.hours}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Beyond Home on WhatsApp"
                className="flex h-11 w-11 items-center justify-center bg-ink text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center bg-ink px-4 text-xs font-bold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <iframe
              src="https://www.google.com/maps?q=Ogba,+Ikeja,+Lagos,+Nigeria&output=embed"
              title="Map showing Beyond Home Limited's area in Ogba, Ikeja, Lagos"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 bg-white"
            />
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
