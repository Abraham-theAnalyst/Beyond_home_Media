import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import ProcessSteps from "@/components/ProcessSteps";
import QuoteForm from "@/components/QuoteForm";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { services, getService } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.metaTitle} | Beyond Home`,
    absolute: true,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* 1. Bold intro. No entry animation: the heading is the LCP element */}
      <SectionContainer tone="dark">
        <ServiceIcon slug={service.slug} className="h-12 w-12 text-gold" />
        <SectionHeading
          dark={service.headingDark}
          gold={service.headingGold}
          as="h1"
          onDark
          className="mt-6"
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          {service.intro}
        </p>
      </SectionContainer>

      {/* 2. What's included */}
      <SectionContainer>
        <Reveal>
          <SectionHeading dark="What's" gold="included" />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.included.map((item, i) => (
            <li key={item} className="h-full">
              <Reveal delay={i * 0.05} className="h-full">
                <div className="flex h-full items-center gap-3 border-l-4 border-gold bg-mist px-5 py-4 text-sm font-semibold text-ink">
                  {item}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </SectionContainer>

      {/* 3. Process */}
      <SectionContainer tone="gray">
        <ProcessSteps />
      </SectionContainer>

      {/* 4. Sample work strip (omitted when no relevant photos exist) */}
      {service.workImages.length > 0 && (
        <SectionContainer>
          <Reveal>
            <SectionHeading dark="Sample" gold="work" />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.workImages.map((image, i) => (
              <Reveal key={image.src} delay={i * 0.07}>
                {/* TODO-CLIENT: photos are profile crops; request originals
                    before showing larger than card size */}
                <figure className="bg-mist">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
      )}

      {/* 5. Inline request-a-quote form */}
      <SectionContainer tone="gray" id="quote">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <SectionHeading dark="Request a" gold="quote" />
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Tell us what you need and where it will go. We will reply with
              options and a price on the next business day.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm defaultService={service.slug} />
          </Reveal>
        </div>
      </SectionContainer>

      {/* 6. Related services */}
      <SectionContainer>
        <Reveal>
          <SectionHeading dark="Related" gold="services" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {related.map((rel, i) => (
            <Reveal key={rel.slug} delay={i * 0.07} className="h-full">
              <Link
                href={`/services/${rel.slug}`}
                className="group flex h-full flex-col border-b-4 border-transparent bg-mist p-7 transition-all hover:-translate-y-1 hover:border-gold"
              >
                <ServiceIcon
                  slug={rel.slug}
                  className="h-9 w-9 text-gold-deep"
                />
                <h3 className="display-heading mt-5 text-xl text-ink group-hover:text-gold-deep">
                  {rel.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {rel.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
