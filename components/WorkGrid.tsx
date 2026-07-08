"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies, industries } from "@/lib/work";
import { services } from "@/lib/services";

const usedServiceSlugs = new Set(caseStudies.flatMap((c) => c.services));
const serviceFilters = services.filter((s) => usedServiceSlugs.has(s.slug));

const serviceName = (slug: string) =>
  services.find((s) => s.slug === slug)?.name ?? slug;

const pillCls = (active: boolean) =>
  `px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
    active
      ? "bg-ink text-gold"
      : "bg-mist text-ink/70 hover:bg-ink/10"
  }`;

export default function WorkGrid() {
  const [service, setService] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);

  const visible = caseStudies.filter(
    (c) =>
      (!service || c.services.includes(service)) &&
      (!industry || c.industry === industry)
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-bold uppercase tracking-wide text-ink/50">
          Service
        </span>
        <button
          type="button"
          onClick={() => setService(null)}
          className={pillCls(service === null)}
        >
          All
        </button>
        {serviceFilters.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setService(service === s.slug ? null : s.slug)}
            className={pillCls(service === s.slug)}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-bold uppercase tracking-wide text-ink/50">
          Industry
        </span>
        <button
          type="button"
          onClick={() => setIndustry(null)}
          className={pillCls(industry === null)}
        >
          All
        </button>
        {industries.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setIndustry(industry === name ? null : name)}
            className={pillCls(industry === name)}
          >
            {name}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-base text-ink/70">
          Nothing matches that combination yet. Clear a filter to see more.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block bg-mist transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={study.hero.src}
                  alt={study.hero.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="display-heading text-xl text-ink group-hover:text-gold-deep">
                    {study.client}
                  </span>
                  <span className="bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold">
                    {study.industry}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {study.cardLine}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {study.services.map(serviceName).join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
