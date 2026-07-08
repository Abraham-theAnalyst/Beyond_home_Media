type ServiceIconProps = {
  slug: string;
  className?: string;
};

/** Simple line icons for the six services, keyed by service slug. */
export default function ServiceIcon({
  slug,
  className = "h-8 w-8",
}: ServiceIconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (slug) {
    case "media-strategy-planning":
      // Target
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="0.5" fill="currentColor" />
        </svg>
      );
    case "social-media-marketing":
      // Chat bubbles
      return (
        <svg {...common}>
          <path d="M4 5h11v8H8l-4 3.5V5Z" />
          <path d="M15 9h5v7l-3-2.5h-4" />
        </svg>
      );
    case "digital-marketing":
      // Megaphone
      return (
        <svg {...common}>
          <path d="M3 10v4h3l8 4V6l-8 4H3Z" />
          <path d="M18 9a4 4 0 0 1 0 6" />
          <path d="M7 14v5" />
        </svg>
      );
    case "design-creative":
      // Pen nib
      return (
        <svg {...common}>
          <path d="M12 3l6 6-8.5 8.5L3 21l3.5-6.5L15 6" />
          <circle cx="10.5" cy="13.5" r="1" />
        </svg>
      );
    case "large-format-printing":
      // Banner roll
      return (
        <svg {...common}>
          <path d="M4 4h16" />
          <path d="M6 4v13a2 2 0 0 0 2 2h10" />
          <path d="M18 4v11" />
          <path d="M6 9h12M6 13h12" opacity="0.5" />
          <circle cx="19" cy="19" r="2" />
        </svg>
      );
    case "signs-signage":
      // Signpost
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M12 5h7l2 2-2 2h-7" />
          <path d="M12 12H5l-2 2 2 2h7" />
        </svg>
      );
    default:
      return null;
  }
}
