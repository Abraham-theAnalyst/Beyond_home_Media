export const site = {
  name: "Beyond Home Limited",
  tagline: "Marketing and Strategy Consulting",
  phoneDisplay: "0806 010 7065",
  phoneHref: "tel:+2348060107065",
  email: "info@beyondhome.com.ng",
  whatsappHref:
    "https://wa.me/2348060107065?text=" +
    encodeURIComponent("Hello Beyond Home, I'd like a quote for..."),
  address: "Ogba, Ikeja, Lagos, Nigeria",
  establishedYear: 2013,
  /* TODO-CLIENT: confirm business hours before launch. */
  hours: "Monday to Friday, 9am to 5pm",
  /* TODO-CLIENT: add real profile URLs. Icons stay hidden while empty so
     the site never ships a dead social link. */
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
