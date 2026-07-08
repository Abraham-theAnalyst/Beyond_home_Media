type AccentShapeProps = {
  /** Flip the black/gold layering for dark backgrounds */
  onDark?: boolean;
  className?: string;
};

/**
 * Angular black/gold clipped-polygon accent, echoing the company
 * profile's geometric design language. Purely decorative.
 */
export default function AccentShape({
  onDark = false,
  className = "",
}: AccentShapeProps) {
  return (
    <div aria-hidden="true" className={`relative h-24 w-40 ${className}`}>
      <div
        className={`clip-chevron absolute inset-0 translate-x-3 ${
          onDark ? "bg-white/10" : "bg-ink"
        }`}
      />
      <div className="clip-chevron absolute inset-0 bg-gradient-to-br from-gold to-gold-deep" />
      <div className="clip-chevron absolute top-1/4 left-1/2 h-1/2 w-8 bg-leaf" />
    </div>
  );
}
