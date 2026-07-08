import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SectionContainer from "@/components/SectionContainer";
import Button from "@/components/Button";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Notes from Beyond Home on outdoor advertising, signage and brand building in Nigeria.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <SectionContainer>
      <SectionHeading dark="Our" gold="Insights" as="h1" />
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
        We are writing our first pieces on outdoor advertising and brand
        building in Nigeria. Until they land, the fastest way to pick our
        brains is to ask us directly.
      </p>
      <div className="mt-8">
        <Button href="/contact">Ask us a question</Button>
      </div>
    </SectionContainer>
  );
}
