import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import ServiceIcon from "@/components/ServiceIcon";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Advertising & Branding Services in Lagos, Nigeria | Beyond Home",
  absolute: true,
  description:
    "Media strategy, social media, digital marketing, design, large format printing and signage. Six services, one team, from brief to installation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <SectionContainer tone="dark">
        {/* No entry animation: above-the-fold heading is the LCP element */}
        <SectionHeading dark="Our" gold="Services" as="h1" onDark />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Six ways we get brands seen and remembered. Every one is handled
          by our own team, from the first strategy session to the finished
          installation, so nothing gets lost between vendors.
        </p>
      </SectionContainer>

      <SectionContainer tone="gray">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col border-b-4 border-transparent bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
              >
                <ServiceIcon
                  slug={service.slug}
                  className="h-10 w-10 text-gold-deep"
                />
                <h2 className="display-heading mt-5 text-2xl text-ink group-hover:text-gold-deep">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.summary}
                </p>
                <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-wide text-gold-text">
                  See what&apos;s included
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer tone="dark">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <SectionHeading dark="Not sure which" gold="you need?" onDark />
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                Describe the problem and we will tell you what we would do
                about it, before any money changes hands.
              </p>
            </div>
            <Button href="/contact">Get a Quote</Button>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}
