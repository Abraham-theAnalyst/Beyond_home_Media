import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  /** Section background: white (default), gray, or dark */
  tone?: "white" | "gray" | "dark";
  id?: string;
  className?: string;
};

const tones = {
  white: "bg-white",
  gray: "bg-mist",
  dark: "bg-ink text-white",
};

export default function SectionContainer({
  children,
  tone = "white",
  id,
  className = "",
}: SectionContainerProps) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {children}
      </div>
    </section>
  );
}
