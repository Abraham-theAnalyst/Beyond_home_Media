import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 bg-ink py-4 text-sm font-bold uppercase tracking-wide text-white"
      >
        <PhoneIcon className="h-5 w-5" />
        Call us
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gold py-4 text-sm font-bold uppercase tracking-wide text-ink"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
