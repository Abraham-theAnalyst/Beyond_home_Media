import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

const serviceLinks = services.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
}));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-24 text-white md:pb-0">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <Image
            src="/assets/logo-wordmark.png"
            alt="beyondhome, Marketing and Strategy Consulting"
            width={176}
            height={40}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Media advertising solutions across Nigeria since{" "}
            {site.establishedYear}. From strategy to installation, indoors and
            out.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="display-heading text-lg text-gold">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="text-sm text-white/80 transition-colors hover:text-gold"
              >
                Insights
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="display-heading text-lg text-gold">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="display-heading text-lg text-gold">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>{site.address}</li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-5 py-5 text-xs text-white/60 sm:px-8">
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
