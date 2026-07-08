import type { Metadata } from "next";

/* TODO-CLIENT: set NEXT_PUBLIC_SITE_URL in the deployment environment once
   the production domain is confirmed. The fallback matches the company's
   email domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyondhome.com.ng";

export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "beyondhome, Marketing and Strategy Consulting",
};

type PageMetadataInput = {
  /** Page title. Set absolute: true to skip the "| Beyond Home Limited" template. */
  title: string;
  absolute?: boolean;
  description: string;
  /** Route path starting with "/", used for the canonical URL */
  path: string;
};

/** Builds consistent per-page metadata: title, description, canonical,
    Open Graph and Twitter card. */
export function pageMetadata({
  title,
  absolute = false,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Beyond Home Limited",
      locale: "en_NG",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
