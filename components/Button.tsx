import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "outline-dark";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-wide transition-colors duration-200";

const variants = {
  gold: "bg-gold text-ink hover:bg-gold-deep",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-ink",
  "outline-dark":
    "border-2 border-ink text-ink hover:bg-ink hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "gold",
  className = "",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  if (!href.startsWith("/")) {
    // tel:, mailto: and other non-route links
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
