/** All service content lives here so it can be edited in one place.
    Icons are keyed by slug in components/ServiceIcon.tsx. */

export type WorkImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Service = {
  slug: string;
  name: string;
  /** Two-tone heading split: dark part + gold part */
  headingDark: string;
  headingGold: string;
  /** One-line value prop for cards */
  summary: string;
  /** Full intro paragraph for the service page */
  intro: string;
  /** Deliverables / formats */
  included: string[];
  /** Sample work photos from public/images/work, empty if none fit */
  workImages: WorkImage[];
  /** Slugs of two related services */
  related: [string, string];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "media-strategy-planning",
    name: "Media Strategy & Planning",
    headingDark: "Media Strategy",
    headingGold: "& Planning",
    summary:
      "Brand solutions from naming and logo design to communications and style guides.",
    intro:
      "A brand that shows up everywhere but stands for nothing wastes money. We work out what your brand should say, where it should say it and what that should cost, whether you are naming a new company or planning a campaign that has to hold up across Nigeria. You get a written plan you can hold us to.",
    included: [
      "Brand naming and identity",
      "Logo design and style guides",
      "Communication strategy",
      "Media planning and placement",
      "Campaign budgeting",
      "Brand audits",
    ],
    workImages: [
      {
        src: "/images/work/macallan-abuja-billboard.jpg",
        alt: "The Macallan building wrap overlooking a main road in Abuja",
        caption: "The Macallan, building wrap placement, Abuja",
      },
      {
        src: "/images/work/orijin-billboard.jpg",
        alt: "Orijin billboard positioned over dense traffic",
        caption: "Orijin, roadside billboard placement",
      },
    ],
    related: ["digital-marketing", "design-creative"],
    metaTitle: "Media Strategy & Planning Agency in Lagos, Nigeria",
    metaDescription:
      "Brand naming, media planning and campaign strategy from Beyond Home Limited in Lagos. Written plans with clear budgets, for campaigns across Nigeria.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    headingDark: "Social Media",
    headingGold: "Marketing",
    summary:
      "Content and tools that give your business an edge on every platform.",
    intro:
      "Nigerians spend hours a day on Instagram, X, TikTok and WhatsApp. Your brand either shows up there properly or leaves the conversation to competitors. We plan the calendar, make the content, answer the comments and run the paid boosts, and you see the numbers every month.",
    included: [
      "Content calendars and creation",
      "Page setup and management",
      "Community management",
      "Paid social campaigns",
      "Influencer coordination",
      "Monthly performance reports",
    ],
    workImages: [],
    related: ["digital-marketing", "design-creative"],
    metaTitle: "Social Media Marketing Agency in Lagos, Nigeria",
    metaDescription:
      "Content, community management and paid social campaigns for Nigerian brands, run by Beyond Home Limited in Lagos with monthly reporting.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    headingDark: "Digital",
    headingGold: "Marketing",
    summary:
      "Campaigns that grow your brand's awareness, reach and influence online.",
    intro:
      "Digital budgets leak when nobody ties spend to results. We plan and run search, display and email campaigns against targets you agree upfront, so at the end of the month you know what each naira brought back and what to change.",
    included: [
      "Search and display advertising",
      "Email marketing",
      "SEO groundwork",
      "Landing pages",
      "Analytics and conversion tracking",
      "Campaign reporting",
    ],
    workImages: [],
    related: ["social-media-marketing", "media-strategy-planning"],
    metaTitle: "Digital Marketing Agency in Lagos, Nigeria",
    metaDescription:
      "Search, display and email campaigns measured against agreed targets. Digital marketing for Nigerian businesses from Beyond Home Limited, Lagos.",
  },
  {
    slug: "design-creative",
    name: "Design & Creative",
    headingDark: "Design &",
    headingGold: "Creative",
    summary:
      "Digital experiences that make each brand moment stick with your audience.",
    intro:
      "People remember what they see before they remember what they read. Our designers turn briefs into artwork that survives the real world: legible from a moving bus, sharp on a phone screen and consistent from business card to billboard.",
    included: [
      "Campaign artwork and key visuals",
      "Billboard and signage design",
      "Print and packaging design",
      "Social media creative",
      "Brand collateral",
      "Vehicle wrap design",
    ],
    workImages: [
      {
        src: "/images/work/closeup-wall-mural.jpg",
        alt: "Closeup wall mural with illustrated tooth characters",
        caption: "Closeup, illustrated wall mural",
      },
      {
        src: "/images/work/closeup-tricycle.jpg",
        alt: "Tricycle wrapped in Closeup Triple Fresh Formula artwork",
        caption: "Closeup, tricycle wrap artwork",
      },
      {
        src: "/images/work/goodlife-magik-truck.jpg",
        alt: "GoodLife Magik delivery truck in full-colour product branding",
        caption: "GoodLife Magik, truck livery",
      },
    ],
    related: ["large-format-printing", "social-media-marketing"],
    metaTitle: "Design & Creative Agency in Lagos, Nigeria",
    metaDescription:
      "Campaign artwork, billboard design, packaging and social creative from Beyond Home Limited in Lagos. Design that stays legible from card to billboard.",
  },
  {
    slug: "large-format-printing",
    name: "Large Format Printing",
    headingDark: "Large Format",
    headingGold: "Printing",
    summary:
      "Pop-up displays, banner stands, outdoor displays and event decoration.",
    intro:
      "When artwork leaves the screen, size exposes everything. A colour that drifted or a line that blurred is invisible at A4 and embarrassing at ten metres. We print big and clean, and we check every piece before it goes up.",
    included: [
      "Pop-up trade show displays",
      "Banner stands and teardrop banners",
      "Outdoor displays and hoardings",
      "Interior decoration prints",
      "Event branding and decoration",
      "Vehicle wraps",
    ],
    workImages: [
      {
        src: "/images/work/parimatch-banner-production.jpg",
        alt: "Beyond Home team finishing a large Parimatch banner on a work table",
        caption: "Parimatch, banner production",
      },
      {
        src: "/images/work/paramount-construction-hoarding.jpg",
        alt: "Printed construction hoarding for Paramount Twin Towers along a walkway",
        caption: "Paramount Twin Towers, construction hoarding",
      },
      {
        src: "/images/work/teardrop-banner.jpg",
        alt: "Teardrop banner marking an estate sales office",
        caption: "Estate sales office, teardrop banner",
      },
    ],
    related: ["signs-signage", "design-creative"],
    metaTitle: "Large Format Printing in Lagos, Nigeria",
    metaDescription:
      "Trade show displays, banners, hoardings and event decoration printed and quality-checked by Beyond Home Limited in Lagos.",
  },
  {
    slug: "signs-signage",
    name: "Signs & Signage",
    headingDark: "Signs &",
    headingGold: "Signage",
    summary: "Indoor and outdoor signs for businesses and homes.",
    intro:
      "A good sign works shifts nobody else will: all day, all night, in any weather. We make indoor and outdoor signs for businesses and homes, from the fascia over your door to the neon that stops foot traffic, and we install them properly the first time.",
    included: [
      "Fascia and shopfront signs",
      "Pylon signs",
      "Neon and LED signage",
      "Illuminated signboards",
      "Indoor wayfinding signs",
      "Branded installations",
    ],
    workImages: [
      {
        src: "/images/work/bigi-neon-signage.jpg",
        alt: "Bigi Snacks in-store neon signage glowing in red, blue and green",
        caption: "Bigi, in-store neon signage",
      },
      {
        src: "/images/work/savana-billboard.jpg",
        alt: "Savana drinks billboard mounted above a roadside",
        caption: "Savana, roadside billboard",
      },
      {
        src: "/images/work/orijin-tank.jpg",
        alt: "Giant Orijin can built over a tank on a palm-lined lawn",
        caption: "Orijin, branded tank installation",
      },
    ],
    related: ["large-format-printing", "design-creative"],
    metaTitle: "Signs & Signage Company in Lagos, Nigeria",
    metaDescription:
      "Fascia signs, pylon signs, neon and indoor wayfinding, made and installed across Nigeria by Beyond Home Limited in Lagos.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
