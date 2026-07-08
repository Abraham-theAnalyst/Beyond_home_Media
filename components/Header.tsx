"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Beyond Home Limited, home"
        >
          <Image
            src="/assets/logo-wordmark.png"
            alt="beyondhome, Marketing and Strategy Consulting"
            width={176}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-deep"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-white/10 bg-ink px-5 pb-6 pt-2 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 text-base font-semibold uppercase tracking-wide text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-gold px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-ink"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
