type SectionHeadingProps = {
  /** First part of the heading, rendered near-black (or white on dark sections) */
  dark: string;
  /** Second part of the heading, rendered gold */
  gold: string;
  /** Set when the heading sits on a dark background */
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  dark,
  gold,
  onDark = false,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <Tag
      className={`display-heading text-4xl sm:text-5xl lg:text-6xl ${
        onDark ? "text-white" : "text-ink"
      } ${className}`}
    >
      {/* Brighter gold on dark; darker gold on light for WCAG contrast */}
      {dark}{" "}
      <span className={onDark ? "text-gold" : "text-gold-heading"}>
        {gold}
      </span>
    </Tag>
  );
}
