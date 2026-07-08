import { site } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

/** LocalBusiness structured data, rendered on every page via the root
    layout so local search engines can read name, address, phone, email,
    geo and hours from any entry point. */
export default function JsonLd() {
  const sameAs = Object.values(site.socials).filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    description:
      "Media advertising solutions provider: billboards, signage, large format printing, vehicle branding and marketing campaigns across Nigeria.",
    url: SITE_URL,
    telephone: "+2348060107065",
    email: site.email,
    foundingDate: String(site.establishedYear),
    image: `${SITE_URL}/og.png`,
    logo: `${SITE_URL}/assets/logo-icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ogba",
      addressLocality: "Ikeja",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    /* Approximate coordinates for the Ogba area.
       TODO-CLIENT: replace with the exact premises coordinates. */
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.6276,
      longitude: 3.339,
    },
    /* TODO-CLIENT: matches the displayed hours; confirm before launch. */
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
