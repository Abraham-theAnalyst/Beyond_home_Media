import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import AccentShape from "@/components/AccentShape";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/services";
import { clients } from "@/lib/clients";
import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Beyond Home Limited | Outdoor Advertising, Signage & Branding in Lagos, Nigeria",
  absolute: true,
  description:
    "Beyond Home plans, produces and installs billboards, signage, vehicle branding and digital campaigns for brands across Nigeria. Based in Ikeja, Lagos since 2013.",
  path: "/",
});

/* Featured work photos are card-size crops from the company profile.
   TODO-CLIENT: request original photos before showing these any larger. */
const featuredWork = [
  {
    src: "/images/work/orijin-tank.jpg",
    client: "Orijin",
    tag: "Brand installation",
    alt: "Giant Orijin can built over a tank, installed on a palm-lined lawn",
    href: "/work/orijin-tank",
  },
  {
    src: "/images/work/savana-billboard.jpg",
    client: "Savana",
    tag: "Billboard",
    alt: "Savana drinks billboard mounted above a roadside in Lagos",
    href: "/work/savana-billboard",
  },
  {
    src: "/images/work/closeup-tricycle.jpg",
    client: "Closeup",
    tag: "Vehicle branding",
    alt: "Tricycle wrapped in Closeup Triple Fresh Formula branding",
    href: "/work/closeup-tricycle-mural",
  },
];

const whyUs = [
  {
    title: "Working since 2013",
    body: "We have planned, printed and installed campaigns without a break for over a decade. The team that quotes your job has done it before.",
  },
  {
    title: "Nationwide, indoors and out",
    body: "Billboards, building wraps, store signage and branded vehicles, installed wherever your audience lives. Lagos is home base, not the limit.",
  },
  {
    title: "Trusted with big brands",
    body: "Unilever, MTN, Dell and The Macallan have all put their names in our hands. Yours will be in good company.",
  },
  {
    title: "One roof, start to finish",
    body: "Strategy, design, printing and installation happen in-house, so your brief never gets lost between vendors.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden="true"
          className="clip-slant-reverse absolute -right-24 top-0 hidden h-full w-1/3 bg-gradient-to-b from-gold/15 to-transparent lg:block"
        />
        {/* No entry animation here: the h1 is the LCP element and must be
            visible before hydration */}
        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <AccentShape onDark className="mb-8 h-16 w-28" />
          <h1 className="display-heading max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
            Put your brand in front of{" "}
            <span className="text-gold">Nigeria</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Beyond Home has put brands on billboards, buildings, trucks and
            tricycles across Nigeria since {site.establishedYear}. Strategy,
            production and installation, all under one roof in Lagos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get a Quote</Button>
            <Button href="/work" variant="outline">
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Client logo wall */}
      <SectionContainer className="border-b border-mist">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-ink/60">
            Trusted by brands across Nigeria and beyond
          </p>
          {/* TODO-CLIENT: replace text tiles with approved logo files */}
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <li
                key={client}
                className="flex items-center justify-center bg-mist px-4 py-6 text-center text-sm font-bold uppercase tracking-wide text-neutral-500"
              >
                {client}
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>

      {/* 3. Services overview */}
      <SectionContainer tone="gray">
        <Reveal>
          <SectionHeading dark="Our" gold="Services" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Six ways we get brands seen and remembered, from the first
            strategy session to the finished installation.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.07}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full border-b-4 border-transparent bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
              >
                <ServiceIcon
                  slug={service.slug}
                  className="h-9 w-9 text-gold-deep"
                />
                <h3 className="display-heading mt-5 text-xl text-ink group-hover:text-gold-deep">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* 4. Featured work */}
      <SectionContainer>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading dark="Featured" gold="Work" />
            <Button href="/work" variant="outline-dark">
              See all work
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {featuredWork.map((work, i) => (
            <Reveal key={work.src} delay={i * 0.07}>
              <Link href={work.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="display-heading text-xl text-ink">
                    {work.client}
                  </span>
                  <span className="bg-ink px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                    {work.tag}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* 5. Why Beyond Home */}
      <SectionContainer tone="gray">
        <Reveal>
          <SectionHeading dark="Why" gold="Beyond Home" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="h-full border-l-4 border-gold bg-white p-7">
                <h3 className="display-heading text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* 6. CTA band */}
      <SectionContainer tone="dark">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <SectionHeading dark="Reach out to us" gold="today" onDark />
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                Message us on WhatsApp or call, and tell us what you want
                Nigeria to see. For briefs and documents, write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-gold hover:underline"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href={site.whatsappHref}>
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp us
              </Button>
              <Button href={site.phoneHref} variant="outline">
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}
