import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/work";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: `${study.client}: ${study.title}`,
    description: study.metaDescription,
    path: `/work/${study.slug}`,
  });
}

const serviceName = (slug: string) =>
  services.find((s) => s.slug === slug)?.name ?? slug;

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const steps = [
    { label: "The challenge", body: study.challenge },
    { label: "The strategy", body: study.strategy },
    { label: "The execution", body: study.execution },
  ];

  return (
    <>
      {/* Client & title. No entry animation: heading/hero are LCP candidates */}
      <SectionContainer tone="dark">
        <p className="text-sm font-bold uppercase tracking-widest text-gold">
          {study.client} · {study.industry}
        </p>
        <SectionHeading
          dark={study.headingDark}
          gold={study.headingGold}
          as="h1"
          onDark
          className="mt-4"
        />
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-white/60">
          {study.services.map(serviceName).join(" · ")}
        </p>
      </SectionContainer>

      {/* Hero image, shown contained because source photos are profile crops.
          TODO-CLIENT: request original photos for larger display. */}
      <SectionContainer>
        <div className="relative mx-auto aspect-[4/3] max-w-3xl overflow-hidden bg-mist">
          <Image
            src={study.hero.src}
            alt={study.hero.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </SectionContainer>

      {/* Challenge, strategy, execution */}
      <SectionContainer tone="gray">
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.07} className="h-full">
              <div className="h-full border-t-4 border-gold bg-white p-7">
                <h2 className="display-heading text-xl text-ink">
                  {step.label}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* Gallery */}
      {study.gallery.length > 0 && (
        <SectionContainer>
          <Reveal>
            <SectionHeading dark="On" gold="site" />
          </Reveal>
          <div
            className={`mt-10 grid gap-6 ${
              study.gallery.length > 1 ? "sm:grid-cols-2" : "max-w-xl"
            }`}
          >
            {study.gallery.map((image, i) => (
              <Reveal key={image.src} delay={i * 0.07}>
                <figure className="bg-mist">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="p-4 text-sm text-ink/70">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Results: rendered only once the client supplies verifiable metrics
          in lib/work.ts. Never invent numbers. */}
      {study.results.length > 0 && (
        <SectionContainer tone="gray">
          <Reveal>
            <SectionHeading dark="The" gold="results" />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {study.results.map((result) => (
              <li
                key={result}
                className="border-l-4 border-gold bg-white p-6 text-base font-semibold text-ink"
              >
                {result}
              </li>
            ))}
          </ul>
        </SectionContainer>
      )}

      {/* Attributed quote: rendered only when a real quote exists. */}
      {study.quote && (
        <SectionContainer>
          <Reveal>
            <blockquote className="mx-auto max-w-2xl border-l-4 border-gold pl-6">
              <p className="text-xl leading-relaxed text-ink">
                &quot;{study.quote.text}&quot;
              </p>
              <footer className="mt-4 text-sm font-semibold text-ink/70">
                {study.quote.name}, {study.quote.role}
              </footer>
            </blockquote>
          </Reveal>
        </SectionContainer>
      )}

      {/* CTA + next case study */}
      <SectionContainer tone="dark">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <SectionHeading
                dark="Want something"
                gold="like this?"
                onDark
              />
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                Tell us your brand and where you want it seen. We will come
                back with options and a price.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Get a Quote</Button>
              <Button href={`/work/${next.slug}`} variant="outline">
                Next: {next.client}
              </Button>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}
