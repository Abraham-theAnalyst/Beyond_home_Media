import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import AccentShape from "@/components/AccentShape";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Beyond Home Limited | Advertising Agency in Ikeja, Lagos",
  absolute: true,
  description:
    "Beyond Home Limited is a media advertising solutions provider in Ikeja, Lagos. Since 2013 we have taken brands from idea to installation, indoors and out, across Nigeria.",
  path: "/about",
});

const workflow = [
  { step: "Examine", line: "We study the space your brand sits in." },
  { step: "Analyse", line: "We set objectives worth measuring." },
  { step: "Create", line: "We design and produce the work." },
  { step: "Prove", line: "We test it against the brief before it ships." },
  { step: "Iterate", line: "We adjust whatever the results ask for." },
  { step: "Evaluate", line: "We report what happened and what comes next." },
];

/* Team photos in the profile are too low-res to print larger than a stamp,
   so everyone except the CEO gets a styled initial-avatar.
   TODO-CLIENT: swap in real portraits when supplied. */
const team = [
  { name: "Caroline Olanrewaju", role: "Finance Manager" },
  { name: "Oluwatosin Olushola", role: "Creative / General Manager" },
  { name: "Sanni Isreal", role: "Social Media Manager" },
  { name: "Mercy Bassey", role: "Audit & Control Manager" },
  { name: "Anslem Kelechi", role: "Team Lead" },
  { name: "Enang Emmanuel", role: "Creative Director" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function AboutPage() {
  return (
    <>
      {/* Story */}
      <SectionContainer tone="dark">
        {/* No entry animation: above-the-fold heading is the LCP element */}
        <SectionHeading dark="About" gold="Beyond Home" as="h1" onDark />
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-white/80">
          <p>
            Beyond Home Limited started in {site.establishedYear} as a media
            advertising solutions provider in Ogba, Ikeja. The platform has
            stretched ever since: store signage, indoor branding,
            billboards, building wraps and vehicle fleets, installed in
            cities across Nigeria.
          </p>
          <p>
            The client list grew the same way the work did, one delivered
            job at a time. Unilever, MTN, Dell and The Macallan sit on it
            today, alongside a long list of Nigerian businesses in between.
          </p>
        </div>
      </SectionContainer>

      {/* Mission */}
      <SectionContainer>
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal>
            <AccentShape className="h-28 w-44" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading dark="Our" gold="mission" />
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink/80">
              Nurture business ideas into reality, and give brands a firm
              seat in the heart of their audience.
            </p>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Workflow */}
      <SectionContainer tone="gray">
        <Reveal>
          <SectionHeading dark="How the work" gold="gets done" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Six steps, in order, on every job. No stage gets skipped because
            a deadline is loud.
          </p>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item, i) => (
            <li key={item.step} className="h-full">
              <Reveal delay={i * 0.06} className="h-full">
                <div className="relative h-full overflow-hidden bg-white p-7">
                  <div
                    aria-hidden="true"
                    className="clip-chevron absolute -right-4 -top-4 h-16 w-16 bg-gradient-to-br from-gold to-gold-deep"
                  />
                  <span className="display-heading text-4xl text-gold-heading">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-heading mt-3 text-xl text-ink">
                    {item.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.line}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </SectionContainer>

      {/* Team */}
      <SectionContainer>
        <Reveal>
          <SectionHeading dark="The" gold="team" />
        </Reveal>

        {/* CEO */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 bg-ink p-8 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
            <div className="relative aspect-[3/4] w-56 overflow-hidden bg-white/10">
              <Image
                src="/images/team/olekan-oladimeji.jpg"
                alt="O'Lekan Oladimeji, CEO of Beyond Home Limited, in a beyondhome polo with arms crossed"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="display-heading text-3xl text-white">
                O&apos;Lekan Oladimeji
              </h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-gold">
                CEO
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                An experienced media practitioner who leads every stage of
                the work, from the first brief to the finished installation.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Rest of the team as initial-avatars */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.05} className="h-full">
              <div className="flex h-full items-center gap-4 bg-mist p-5">
                <span
                  className={`display-heading flex h-14 w-14 shrink-0 items-center justify-center text-lg ${
                    i % 2 === 0 ? "bg-gold text-ink" : "bg-ink text-gold"
                  }`}
                  aria-hidden="true"
                >
                  {initials(member.name)}
                </span>
                <div>
                  <h3 className="display-heading text-lg text-ink">
                    {member.name}
                  </h3>
                  <p className="text-sm text-ink/70">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* Location */}
      <SectionContainer tone="gray">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <SectionHeading dark="Find" gold="us" />
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              We work from {site.address}, and install everywhere the work
              takes us.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/80">
              <li>{site.hours}</li>
              <li>
                <a
                  href={site.phoneHref}
                  className="font-semibold text-gold-text hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-gold-text hover:underline"
                >
                  {site.email}
                </a>
              </li>
            </ul>
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

      {/* CTA */}
      <SectionContainer tone="dark">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <SectionHeading dark="Work" gold="with us" onDark />
            <Button href="/contact">Get a Quote</Button>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}
