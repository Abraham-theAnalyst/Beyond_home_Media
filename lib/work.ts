/** All case-study content lives here.
 *
 *  HONESTY RULES (per the build brief):
 *  - results: [] until the client supplies verifiable metrics.
 *    TODO-CLIENT: add result strings like "Footfall up X% over the campaign
 *    period (source)". The Results section stays hidden while empty.
 *  - quote: null until the client supplies a real, attributed quote.
 *    TODO-CLIENT: add { text, name, role } only for quotes that were
 *    actually given. The quote block stays hidden while null.
 *  - No dates are shown anywhere because none are confirmed.
 *    TODO-CLIENT: confirm campaign dates if they should appear.
 *  - All photos are crops from the company profile document.
 *    TODO-CLIENT: replace with original photos for larger display.
 */

export type CaseImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseQuote = {
  text: string;
  name: string;
  role: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Two-tone heading split for the case page */
  headingDark: string;
  headingGold: string;
  client: string;
  industry: string;
  /** Service slugs from lib/services.ts */
  services: string[];
  /** One line for the grid card. Descriptive, never a metric. */
  cardLine: string;
  hero: CaseImage;
  gallery: CaseImage[];
  challenge: string;
  strategy: string;
  execution: string;
  results: string[];
  quote: CaseQuote | null;
  metaDescription: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "orijin-tank",
    title: "A tank turned into a giant Orijin can",
    headingDark: "A tank turned into",
    headingGold: "a giant Orijin can",
    client: "Orijin",
    industry: "Beverages",
    services: ["signs-signage", "design-creative"],
    cardLine: "A steel storage tank wrapped as the product itself.",
    hero: {
      src: "/images/work/orijin-tank.jpg",
      alt: "Steel tank wrapped as a giant Orijin can, lying on a palm-lined lawn",
    },
    gallery: [
      {
        src: "/images/work/orijin-tank.jpg",
        alt: "Full view of the Orijin can installation with its silver lid face and access ladder",
        caption: "The finished installation, lid face and all",
      },
    ],
    challenge:
      "Grounds like this are full of structures nobody looks at twice: generators, containers, storage tanks. This brief started with a steel tank sitting in plain view of everyone walking past.",
    strategy:
      "Instead of screening the tank off, we treated its shape as the opportunity. A cylinder on its side is already a can. Rebuilding the Orijin label at tank scale made the tank the point instead of the problem.",
    execution:
      "The label artwork was reproduced across the tank's curved body, with the end face finished in silver to complete the can. The access ladder stayed usable, so the tank kept doing its day job.",
    results: [],
    quote: null,
    metaDescription:
      "How Beyond Home wrapped a steel storage tank as a giant Orijin can: the brief, the approach and the finished installation.",
  },
  {
    slug: "closeup-tricycle-mural",
    title: "Closeup in traffic and at the point of sale",
    headingDark: "Closeup in traffic and",
    headingGold: "at the point of sale",
    client: "Closeup",
    industry: "Personal care",
    services: ["design-creative", "large-format-printing"],
    cardLine: "Tricycle wraps and a wall mural carrying one campaign.",
    hero: {
      src: "/images/work/closeup-tricycle.jpg",
      alt: "Tricycle fully wrapped in Closeup Triple Fresh Formula branding",
    },
    gallery: [
      {
        src: "/images/work/closeup-tricycle.jpg",
        alt: "Side view of the wrapped tricycle showing Hausa-language campaign copy",
        caption: "Full tricycle wrap with Hausa-language messaging",
      },
      {
        src: "/images/work/closeup-wall-mural.jpg",
        alt: "Wall mural of illustrated tooth characters holding Closeup products",
        caption: "Illustrated wall mural at the point of sale",
      },
    ],
    challenge:
      "Toothpaste gets bought on habit. Interrupting that habit means showing up where people actually are, not just where billboards happen to stand.",
    strategy:
      "Two formats, one campaign language. Tricycles carry the message through streets no billboard covers, and an illustrated mural holds it where the purchase happens.",
    execution:
      "Tricycles were wrapped nose to tail, canopy included, with campaign copy written in Hausa for the routes they run. Indoors, a wall mural of the campaign's tooth characters went up beside the shelf.",
    results: [],
    quote: null,
    metaDescription:
      "Closeup tricycle wraps and an illustrated point-of-sale mural by Beyond Home: one campaign carried through the street and into the store.",
  },
  {
    slug: "savana-billboard",
    title: "Five flavours readable across four lanes",
    headingDark: "Five flavours readable",
    headingGold: "across four lanes",
    client: "Savana",
    industry: "Beverages",
    services: ["large-format-printing", "media-strategy-planning"],
    cardLine: "A unipole billboard putting a full drinks range in one glance.",
    hero: {
      src: "/images/work/savana-billboard.jpg",
      alt: "Savana drinks billboard on a unipole above a roadside, five cans in a row",
    },
    gallery: [
      {
        src: "/images/work/savana-billboard.jpg",
        alt: "The Savana billboard seen from street level with rooftops in the foreground",
        caption: "The board from street level",
      },
    ],
    challenge:
      "A range with five flavours has one job on a billboard: make every can legible before the traffic moves on. Cram the layout and the whole range turns to noise.",
    strategy:
      "Let the products do the talking. Five cans in a row, a flavour name under each, one line of campaign copy and the call line at the base. Nothing else fighting for the eye.",
    execution:
      "Printed at full colour and mounted on a unipole above a busy road, high enough to clear the rooflines around it.",
    results: [],
    quote: null,
    metaDescription:
      "A Savana unipole billboard by Beyond Home that puts five flavours in one readable glance above Lagos traffic.",
  },
  {
    slug: "macallan-abuja",
    title: "The Macallan above Abuja traffic",
    headingDark: "The Macallan above",
    headingGold: "Abuja traffic",
    client: "The Macallan",
    industry: "Spirits",
    services: ["media-strategy-planning", "large-format-printing"],
    cardLine: "A building wrap holding a luxury campaign over a busy corridor.",
    hero: {
      src: "/images/work/macallan-abuja-billboard.jpg",
      alt: "The Macallan building wrap on the upper floors of a corner building over Abuja traffic",
    },
    gallery: [
      {
        src: "/images/work/macallan-abuja-billboard.jpg",
        alt: "Wide view of the Macallan wrap reading Crafted Without Compromise",
        caption: "The wrap over a central Abuja route",
      },
    ],
    challenge:
      "A single malt does not paper a city; that would cheapen it. Luxury spirits work on one or two placements good enough to carry the whole campaign.",
    strategy:
      "One large face on a corner building over a corridor of government and business traffic in central Abuja. The dark, minimal campaign artwork stays untouched at building scale.",
    execution:
      "The wrap covers the upper floors of the building, positioned to face oncoming traffic along the route. The campaign line, bottle and brand mark are the only elements on it.",
    results: [],
    quote: null,
    metaDescription:
      "The Macallan's Crafted Without Compromise campaign on a building wrap over central Abuja, placed and produced by Beyond Home.",
  },
  {
    slug: "bigi-neon-signage",
    title: "Neon that owns the concourse after dark",
    headingDark: "Neon that owns the",
    headingGold: "concourse after dark",
    client: "Bigi",
    industry: "Food & beverage",
    services: ["signs-signage"],
    cardLine: "Custom in-store neon fascia over a snack counter.",
    hero: {
      src: "/images/work/bigi-neon-signage.jpg",
      alt: "Bigi Snacks neon fascia glowing in blue, red and green over an indoor counter",
    },
    gallery: [
      {
        src: "/images/work/bigi-neon-signage.jpg",
        alt: "The lit Bigi Snacks counter with neon rings and menu lightboxes below",
        caption: "The counter with the neon lit",
      },
    ],
    challenge:
      "Inside a busy leisure centre, every counter competes with a dozen others. Flat printed signage loses that fight the moment the lights go down.",
    strategy:
      "Light beats print indoors. The brand name went up in neon, ringed with colour bands that pull the eye down the concourse before the menu is even readable.",
    execution:
      "A custom-bent neon fascia across the full counter front, with menu lightboxes mounted below so the glow does the attracting and the boxes do the selling.",
    results: [],
    quote: null,
    metaDescription:
      "Custom Bigi neon signage by Beyond Home: a bent-neon fascia and menu lightboxes that keep a snack counter visible across a busy concourse.",
  },
  {
    slug: "rite-truck-branding",
    title: "A delivery truck that sells between stops",
    headingDark: "A delivery truck that",
    headingGold: "sells between stops",
    client: "Rite",
    industry: "Food & beverage",
    services: ["design-creative", "large-format-printing"],
    cardLine: "Fleet branding that turns road hours into ad hours.",
    hero: {
      src: "/images/work/rite-truck-branding.jpg",
      alt: "Rite delivery truck with red-branded cab and logo panel on the box face",
    },
    gallery: [
      {
        src: "/images/work/rite-truck-branding.jpg",
        alt: "Front three-quarter view of the branded Rite truck in the depot",
        caption: "The finished truck in the depot",
      },
    ],
    challenge:
      "Delivery trucks log road hours all week. Left unbranded, that is advertising space the company already owns and never collects on.",
    strategy:
      "Brand the whole vehicle, not just a door decal. The cab carries the brand red, and the logo sits high on the box face where drivers and pedestrians actually look.",
    execution:
      "Cab finished in brand red with logo marks, a full logo panel across the top of the box face, and the cage sides left clear for loading crates.",
    results: [],
    quote: null,
    metaDescription:
      "Rite Foods fleet branding by Beyond Home: full cab and box-face branding that turns delivery routes into advertising hours.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

/** Distinct industries in display order, for the filter bar. */
export const industries = [...new Set(caseStudies.map((c) => c.industry))];

/** Field photos that are real work but not (yet) full case studies. */
export const fieldGallery: CaseImage[] = [
  {
    src: "/images/work/sunlight-billboard.jpg",
    alt: "Sunlight detergent billboard mounted on a building above yellow buses",
    caption: "Sunlight, wall-mounted billboard",
  },
  {
    src: "/images/work/orijin-billboard.jpg",
    alt: "Orijin billboard over dense traffic",
    caption: "Orijin, roadside billboard",
  },
  {
    src: "/images/work/goodlife-magik-truck.jpg",
    alt: "GoodLife Magik delivery truck in full-colour product branding",
    caption: "GoodLife Magik, truck livery",
  },
  {
    src: "/images/work/paramount-construction-hoarding.jpg",
    alt: "Printed construction hoarding for Paramount Twin Towers along a walkway",
    caption: "Paramount Twin Towers, construction hoarding",
  },
  {
    src: "/images/work/parimatch-banner-production.jpg",
    alt: "Beyond Home team finishing a large Parimatch banner on a work table",
    caption: "Parimatch, banner production",
  },
  {
    src: "/images/work/teardrop-banner.jpg",
    alt: "Teardrop banner marking an estate sales office",
    caption: "Estate sales office, teardrop banner",
  },
  {
    src: "/images/work/halogen-cap.jpg",
    alt: "Navy cap embroidered with the Halogen wordmark",
    caption: "Halogen, branded merchandise",
  },
  {
    src: "/images/work/highway-billboard.jpg",
    alt: "Roadside billboard over a busy street of buses and tricycles",
    caption: "Roadside billboard placement",
  },
];
