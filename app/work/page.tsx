import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import WorkGrid from "@/components/WorkGrid";
import { fieldGallery } from "@/lib/work";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Work | Billboards, Signage & Brand Campaigns Across Nigeria",
  absolute: true,
  description:
    "Case studies from Beyond Home Limited: billboards, neon signage, building wraps, vehicle branding and installations for brands across Nigeria.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <SectionContainer tone="dark">
        {/* No entry animation: above-the-fold heading is the LCP element */}
        <SectionHeading dark="Our" gold="Work" as="h1" onDark />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          What we have planned, printed and installed for brands across
          Nigeria. Filter by what you need done or by your industry.
        </p>
      </SectionContainer>

      <SectionContainer>
        <Reveal>
          <WorkGrid />
        </Reveal>
      </SectionContainer>

      {/* Real work without a full case study yet.
          TODO-CLIENT: any of these can become a case study once the brief,
          role and results are confirmed. */}
      <SectionContainer tone="gray">
        <Reveal>
          <SectionHeading dark="More from" gold="the field" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Other installations and production work from the archive.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fieldGallery.map((image, i) => (
            <Reveal key={image.src} delay={(i % 4) * 0.05}>
              <figure className="bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm text-ink/70">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer tone="dark">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <SectionHeading dark="Want yours" gold="up there?" onDark />
            <Button href="/contact">Get a Quote</Button>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}
