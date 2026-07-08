import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyBar from "@/components/MobileStickyBar";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

/* display: "optional" keeps the huge hero headline (the LCP element) from
   waiting on this font under slow mobile connections: first visit paints
   the metrics-adjusted fallback instantly, later visits get Anton from
   cache. Body font below keeps swap. */
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "optional",
  adjustFontFallback: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "optional",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Beyond Home Limited | Outdoor Advertising, Signage & Branding in Lagos, Nigeria",
    template: "%s | Beyond Home Limited",
  },
  description:
    "Beyond Home plans, produces and installs billboards, signage, vehicle branding and digital campaigns for brands across Nigeria. Based in Ikeja, Lagos since 2013.",
  openGraph: {
    siteName: "Beyond Home Limited",
    locale: "en_NG",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable}`}>
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBar />
      </body>
    </html>
  );
}
