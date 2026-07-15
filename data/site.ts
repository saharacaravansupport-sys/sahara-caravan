export const siteConfig = {
  name: "Sahara Caravan",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://saharacaravan.com",
  description:
    "Sahara Caravan offers camel trekking, desert tours, nomadic culture, 4x4 journeys and Yoga Retreat experiences with a local team from M’Hamid El Ghizlane, Morocco.",
  whatsappLabel: "+212 605-778861",
  whatsappUrl: "https://wa.me/212605778861",
  instagramUrl: "https://instagram.com/saharacaravan",
  instagramHandle: "@saharacaravan",
  email: "saharacaravansupport@gmail.com",
  mapUrl: "https://maps.app.goo.gl/DC2tpNZ19855Soi58?g_st=ic",
  location: "M’Hamid El Ghizlane, Morocco"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Tours" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sahara-in-motion", label: "Sahara in Motion" },
  { href: "/what-to-bring", label: "What to Bring" },
  { href: "/contact", label: "Contact" }
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Ali El Gasmi",
    role: "Founder & Desert Guide",
    image: "/assets/images/team/ali-el-gasmi-founder-desert-guide.jpg",
    alt: "Ali El Gasmi, founder and desert guide of Sahara Caravan, standing in the Sahara with a camel.",
    bio: "Born in the desert of M’Hamid El Ghizlane, Morocco, Ali comes from a lineage of Saharan nomads. He guides with quiet confidence, deep respect for the land, and a strong connection to Sahara heritage."
  },
  {
    name: "Mohamed",
    role: "Camel Guide",
    image: "/assets/images/team/mohamed-camel-guide.jpg",
    alt: "Mohamed, camel guide, wearing a dark desert turban in the Sahara.",
    bio: "Mohamed is a camel guide connected to the rhythm of the desert. His calm presence helps every caravan move smoothly and safely across the dunes."
  },
  {
    name: "Ossama",
    role: "Camel Guide",
    image: "/assets/images/team/ossama-camel-guide.jpg",
    alt: "Ossama, smiling camel guide, in a blue desert robe and pale turban.",
    bio: "Ossama is a camel guide. His welcoming smile and natural presence make guests feel comfortable from the first moments of the journey."
  },
  {
    name: "Daday",
    role: "Desert Driver & Route Specialist",
    image: "/assets/images/team/daday-desert-driver-route-specialist.jpg",
    alt: "Daday, desert driver and route specialist, wearing a desert turban and embroidered robe.",
    bio: "Daday is a desert driver and route specialist, experienced in navigating remote Sahara landscapes with safety and precision."
  },
  {
    name: "Abdo",
    role: "Desert Cook & Cultural Host",
    image: "/assets/images/team/abdo-desert-cook-cultural-host.jpg",
    alt: "Abdo, desert cook and cultural host, looking into the camera with a pale scarf.",
    bio: "Abdo brings the taste and generosity of desert life to every camp experience, helping guests feel welcomed like family."
  },
  {
    name: "Hsayn",
    role: "Camel Guide",
    image: "/assets/images/team/hsayn-camel-guide.jpg",
    alt: "Hsayn, camel guide, standing among Sahara dunes in a blue robe.",
    bio: "Hsayn is a camel guide who knows the pace of the dunes and the patience needed for authentic desert travel."
  },
  {
    name: "Madi",
    role: "Desert Driver & Route Specialist",
    image: "/assets/images/team/madi-desert-driver-route-specialist.jpg",
    alt: "Madi, desert driver and route specialist, wearing a white turban and blue robe.",
    bio: "Madi knows the desert like others know city streets. He reads hidden tracks, dunes, wind and terrain with calm confidence."
  },
  {
    name: "Salem",
    role: "Desert Cook & Cultural Host",
    image: "/assets/images/team/salem-desert-cook-cultural-host.jpg",
    alt: "Salem, desert cook and cultural host, wearing a pale turban and embroidered robe.",
    bio: "Salem transforms simple ingredients into memorable desert meals. Around the evening fire, he shares warmth, stories, music, and Saharan hospitality."
  },
  {
    name: "Uncle Laaribi",
    role: "Camel Guide",
    image: "/assets/images/team/uncle-laaribi-camel-guide.jpg",
    alt: "Uncle Laaribi, camel guide, photographed in a black turban in the Sahara light.",
    bio: "Uncle Laaribi is a camel guide whose presence brings authenticity, experience and warmth to the Sahara journey."
  },
  {
    name: "Mokhtar",
    role: "Senior Nomad Guide",
    image: "/assets/images/team/mokhtar-senior-nomad-guide.jpg",
    alt: "Mokhtar, senior nomad guide, seated in the Sahara beside a camel.",
    bio: "Mokhtar is a senior nomad guide with decades of experience living and traveling across the M’Hamid Sahara. His deep knowledge of desert routes, traditional nomadic life, and the rhythms of the Sahara makes him an important part of the Sahara Caravan team."
  },
  {
    name: "Hama",
    role: "Desert Guide & Cook",
    image: "/assets/images/team/hama-desert-guide-cook.jpg",
    alt: "Hama, desert guide and cook of Sahara Caravan, standing in the Sahara with camels.",
    bio: "Hama is one of the trusted members of the Sahara Caravan family. As both a desert guide and camp cook, he helps guests discover the Sahara while preparing traditional Moroccan meals in the heart of the dunes. His calm personality, local knowledge and hospitality make every journey feel authentic and memorable."
  }
];

export const galleryCategories = ["All","Dunes","Camels","Nomad Life","People","Sunset","Wildlife","Camp","Desert Landscape"] as const;

export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

export type GalleryImage = {
  title: string;
  image: string;
  alt: string;
  categories: GalleryCategory[];
  orientation: "portrait" | "landscape";
};

export const galleryImages: GalleryImage[] = [
  {
    title: "Black and White Camel Walk",
    image: "/assets/images/gallery/black-and-white-camel-walk.jpg",
    alt: "Black and white camel walk across the Sahara dunes.",
    categories: ["Dunes", "Camels"],
    orientation: "portrait"
  },
  {
    title: "Caravan Crossing Golden Dunes",
    image: "/assets/images/experiences/camel-caravan-crossing-golden-dunes.jpg",
    alt: "Camel caravan crossing golden dunes in the Sahara.",
    categories: ["Dunes", "Camels"],
    orientation: "landscape"
  },
  {
    title: "Golden Dunes",
    image: "/assets/images/hero/hero-golden-sahara-dunes.jpg",
    alt: "Golden Sahara dunes with small figures walking through the sand.",
    categories: ["Dunes", "Sunset"],
    orientation: "portrait"
  },
  {
    title: "Wide Desert Caravan",
    image: "/assets/images/safari/safari-camel-caravan-wide-desert.jpg",
    alt: "Wide desert landscape with camel caravan near a large dune.",
    categories: ["Dunes", "Camels"],
    orientation: "landscape"
  },
  {
    title: "Nomads With Camels",
    image: "/assets/images/lifestyle/nomads-with-camels-sahara.jpg",
    alt: "Nomads seated with camels in the Sahara.",
    categories: ["Nomad Life", "People", "Camels"],
    orientation: "portrait"
  },
  {
    title: "Caravan Through Dunes",
    image: "/assets/images/experiences/camel-caravan-walking-through-dunes.jpg",
    alt: "Camel caravan walking through deep Sahara dunes.",
    categories: ["Dunes", "Camels"],
    orientation: "landscape"
  },
  {
    title: "Aerial Golden Sand",
    image: "/assets/images/gallery/aerial-golden-sand-dunes.jpg",
    alt: "Aerial texture of golden Sahara sand dunes.",
    categories: ["Dunes", "Sunset"],
    orientation: "portrait"
  },
  {
    title: "Guide With Two Camels",
    image: "/assets/images/experiences/camel-guide-walking-with-two-camels.jpg",
    alt: "Camel guide walking with two camels through the Sahara.",
    categories: ["People", "Camels", "Nomad Life"],
    orientation: "portrait"
  },
  {
    title: "Long Desert Shadows",
    image: "/assets/images/gallery/camel-guides-long-shadows.jpg",
    alt: "Camel guides with long shadows in the Sahara sunset.",
    categories: ["People", "Camels", "Sunset"],
    orientation: "portrait"
  },
  {
    title: "Camel Guide on a Golden Dune",
    image: "/assets/images/gallery/camel-guide-on-golden-dune.jpg",
    alt: "Camel Guide on a Golden Dune in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "portrait"
  },
  {
    title: "Camel Caravan on Red Dunes",
    image: "/assets/images/gallery/camel-caravan-on-red-dunes.jpg",
    alt: "Camel Caravan on Red Dunes in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "landscape"
  },
  {
    title: "Desert Herd on a Stony Plain",
    image: "/assets/images/gallery/desert-herd-on-stony-plain.jpg",
    alt: "Desert Herd on a Stony Plain in the Sahara Caravan gallery.",
    categories: ["Nomad Life"],
    orientation: "landscape"
  },
  {
    title: "Footprints Across Rippled Sand",
    image: "/assets/images/gallery/footprints-across-rippled-sand.jpg",
    alt: "Footprints Across Rippled Sand in the Sahara Caravan gallery.",
    categories: ["Dunes"],
    orientation: "portrait"
  },
  {
    title: "Smiling Caravan Companions",
    image: "/assets/images/gallery/mhamid-sahara-gallery-heif-01.jpg",
    alt: "A smiling group of travelers and guides gathered with camels in the Sahara.",
    categories: ["Nomad Life"],
    orientation: "portrait"
  },
  {
    title: "Camel Close-Up Desert Portrait",
    image: "/assets/images/gallery/camel-closeup-desert-portrait.jpg",
    alt: "Camel Close-Up Desert Portrait in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "landscape"
  },
  {
    title: "Camel Caravan Silhouette on Dunes",
    image: "/assets/images/gallery/camel-caravan-silhouette-on-dunes.jpg",
    alt: "Camel Caravan Silhouette on Dunes in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "portrait"
  },
  {
    title: "Moonrise Over a Tamarisk Tree",
    image: "/assets/images/gallery/moonrise-over-tamarisk-tree.jpg",
    alt: "Moonrise Over a Tamarisk Tree in the Sahara Caravan gallery.",
    categories: ["Sunset"],
    orientation: "portrait"
  },
  {
    title: "Nomads Walking Through Sand Dunes",
    image: "/assets/images/gallery/nomads-walking-through-sand-dunes.jpg",
    alt: "Nomads Walking Through Sand Dunes in the Sahara Caravan gallery.",
    categories: ["Dunes"],
    orientation: "portrait"
  },
  {
    title: "Camel and Guide Climbing a Dune",
    image: "/assets/images/gallery/camel-and-guide-climbing-dune.jpg",
    alt: "Camel and Guide Climbing a Dune in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "landscape"
  },
  {
    title: "Camel Close-Up Profile in the Desert",
    image: "/assets/images/gallery/camel-closeup-profile-desert.jpg",
    alt: "Camel Close-Up Profile in the Desert in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "landscape"
  },
  {
    title: "Trekkers with Desert Guides",
    image: "/assets/images/gallery/trekkers-with-desert-guides.jpg",
    alt: "Trekkers with Desert Guides in the Sahara Caravan gallery.",
    categories: ["People"],
    orientation: "portrait"
  },
  {
    title: "Soft Sunset Over Distant Dunes",
    image: "/assets/images/gallery/soft-sunset-over-distant-dunes.jpg",
    alt: "Soft Sunset Over Distant Dunes in the Sahara Caravan gallery.",
    categories: ["Sunset"],
    orientation: "portrait"
  },
  {
    title: "Guide with Camel Herd",
    image: "/assets/images/gallery/mhamid-sahara-gallery-heif-02.jpg",
    alt: "A camel guide standing with a small herd of camels in warm desert light.",
    categories: ["Nomad Life"],
    orientation: "landscape"
  },
  {
    title: "Blue Nomad Leading a Loaded Camel",
    image: "/assets/images/gallery/blue-nomad-leading-loaded-camel.jpg",
    alt: "Blue Nomad Leading a Loaded Camel in the Sahara Caravan gallery.",
    categories: ["Nomad Life"],
    orientation: "portrait"
  },
  {
    title: "Caravan Crossing the Open Desert",
    image: "/assets/images/gallery/caravan-crossing-open-desert.jpg",
    alt: "Caravan Crossing the Open Desert in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "portrait"
  },
  {
    title: "Nomad Guide Standing with Camel",
    image: "/assets/images/gallery/nomad-guide-standing-with-camel.jpg",
    alt: "Nomad Guide Standing with Camel in the Sahara Caravan gallery.",
    categories: ["People"],
    orientation: "portrait"
  },
  {
    title: "Camel Head Under Blue Sky",
    image: "/assets/images/gallery/camel-head-under-blue-sky.jpg",
    alt: "Camel Head Under Blue Sky in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "landscape"
  },
  {
    title: "Sahara Team Beside the 4x4",
    image: "/assets/images/gallery/sahara-team-beside-4x4.jpg",
    alt: "Sahara Team Beside the 4x4 in the Sahara Caravan gallery.",
    categories: ["People"],
    orientation: "landscape"
  },
  {
    title: "Ostrich in the Desert Park",
    image: "/assets/images/gallery/ostrich-in-desert-park.jpg",
    alt: "Ostrich in the Desert Park in the Sahara Caravan gallery.",
    categories: ["Wildlife"],
    orientation: "landscape"
  },
  {
    title: "Desert Bivouac Aerial View",
    image: "/assets/images/gallery/desert-bivouac-aerial-view.jpg",
    alt: "Desert Bivouac Aerial View in the Sahara Caravan gallery.",
    categories: ["Camp"],
    orientation: "landscape"
  },
  {
    title: "Trekkers on Golden Dunes",
    image: "/assets/images/gallery/trekkers-on-golden-dunes.jpg",
    alt: "Trekkers on Golden Dunes in the Sahara Caravan gallery.",
    categories: ["Dunes"],
    orientation: "landscape"
  },
  {
    title: "Campfire Under the Milky Way",
    image: "/assets/images/gallery/campfire-under-milky-way.jpg",
    alt: "Campfire Under the Milky Way in the Sahara Caravan gallery.",
    categories: ["Camp"],
    orientation: "portrait"
  },
  {
    title: "Desert Camp at Sunset",
    image: "/assets/images/gallery/desert-camp-at-sunset.jpg",
    alt: "Desert Camp at Sunset in the Sahara Caravan gallery.",
    categories: ["Camp"],
    orientation: "portrait"
  },
  {
    title: "Cracked Dry Lake Texture",
    image: "/assets/images/gallery/cracked-dry-lake-texture.jpg",
    alt: "Cracked Dry Lake Texture in the Sahara Caravan gallery.",
    categories: ["Desert Landscape"],
    orientation: "landscape"
  },
  {
    title: "Loaded Camel with Nomad Guide",
    image: "/assets/images/gallery/loaded-camel-with-nomad-guide.jpg",
    alt: "Loaded Camel with Nomad Guide in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "portrait"
  },
  {
    title: "Camel Caravan Crossing Flat Desert",
    image: "/assets/images/gallery/camel-caravan-crossing-flat-desert.jpg",
    alt: "Camel Caravan Crossing Flat Desert in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "portrait"
  },
  {
    title: "Camel Footprints on Dry Clay",
    image: "/assets/images/gallery/camel-footprints-on-dry-clay.jpg",
    alt: "Camel Footprints on Dry Clay in the Sahara Caravan gallery.",
    categories: ["Desert Landscape"],
    orientation: "portrait"
  },
  {
    title: "Camel Guide Between Camels",
    image: "/assets/images/gallery/camel-guide-between-camels.jpg",
    alt: "Camel Guide Between Camels in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "portrait"
  },
  {
    title: "Nomad with Young Camel",
    image: "/assets/images/gallery/nomad-with-young-camel.jpg",
    alt: "Nomad with Young Camel in the Sahara Caravan gallery.",
    categories: ["Nomad Life"],
    orientation: "portrait"
  },
  {
    title: "Travelers Walking Through the Sahara",
    image: "/assets/images/gallery/travelers-walking-through-sahara.jpg",
    alt: "Travelers Walking Through the Sahara in the Sahara Caravan gallery.",
    categories: ["People"],
    orientation: "landscape"
  },
  {
    title: "Elder Nomad in White Turban",
    image: "/assets/images/gallery/elder-nomad-in-white-turban.jpg",
    alt: "Elder Nomad in White Turban in the Sahara Caravan gallery.",
    categories: ["People"],
    orientation: "portrait"
  },
  {
    title: "Camel Keeper Among Camels",
    image: "/assets/images/gallery/mhamid-sahara-gallery-heif-03.jpg",
    alt: "A camel keeper sitting among camels on open sand.",
    categories: ["Nomad Life"],
    orientation: "portrait"
  },
  {
    title: "Black and White Camel Moment",
    image: "/assets/images/gallery/black-and-white-camel-moment.jpg",
    alt: "Black and White Camel Moment in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "portrait"
  },
  {
    title: "Desert Herd Wide Landscape",
    image: "/assets/images/gallery/desert-herd-wide-landscape.jpg",
    alt: "Desert Herd Wide Landscape in the Sahara Caravan gallery.",
    categories: ["Desert Landscape"],
    orientation: "landscape"
  },
  {
    title: "Erg Zahar Dune at Sunrise",
    image: "/assets/images/gallery/erg-zahar-dune-at-sunrise.jpg",
    alt: "Erg Zahar Dune at Sunrise in the Sahara Caravan gallery.",
    categories: ["Dunes"],
    orientation: "portrait"
  },
  {
    title: "Camel Guide Close-Up",
    image: "/assets/images/gallery/mhamid-sahara-gallery-heif-04.jpg",
    alt: "A camel guide surrounded by camels in golden Sahara light.",
    categories: ["Nomad Life"],
    orientation: "landscape"
  },
  {
    title: "View from Desert Tent with Camels",
    image: "/assets/images/gallery/view-from-desert-tent-with-camels.jpg",
    alt: "View from Desert Tent with Camels in the Sahara Caravan gallery.",
    categories: ["Camp"],
    orientation: "landscape"
  },
  {
    title: "Travelers with Camel Caravan",
    image: "/assets/images/gallery/mhamid-sahara-gallery-heif-05.jpg",
    alt: "Travelers and guides gathered beside a camel caravan beneath a wide blue sky.",
    categories: ["Nomad Life"],
    orientation: "portrait"
  },
  {
    title: "Group at the Desert Oasis",
    image: "/assets/images/gallery/group-at-desert-oasis.jpg",
    alt: "Group at the Desert Oasis in the Sahara Caravan gallery.",
    categories: ["People"],
    orientation: "landscape"
  },
  {
    title: "Golden Sahara Dunes Panorama",
    image: "/assets/images/gallery/golden-sahara-dunes-panorama.jpg",
    alt: "Golden Sahara Dunes Panorama in the Sahara Caravan gallery.",
    categories: ["Dunes"],
    orientation: "portrait"
  },
  {
    title: "Camel Portrait Near Tamarisk",
    image: "/assets/images/gallery/camel-portrait-near-tamarisk.jpg",
    alt: "Camel Portrait Near Tamarisk in the Sahara Caravan gallery.",
    categories: ["Camels"],
    orientation: "landscape"
  },
  {
    title: "Black and White Nomad Portrait",
    image: "/assets/images/gallery/black-and-white-nomad-portrait.jpg",
    alt: "Black and White Nomad Portrait in the Sahara Caravan gallery.",
    categories: ["People"],
    orientation: "portrait"
  }
];

export type ExperienceDay = {
  day: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  moments: string[];
};

export type JourneyFaq = {
  question: string;
  answer: string;
};

export type DesertExperience = {
  slug: string;
  title: string;
  eyebrow: string;
  duration: string;
  image: string;
  alt: string;
  description: string;
  customizationNote?: string;
  seoDescription: string;
  kind: "camel-trek" | "safari" | "yoga-retreat";
  bestFor: string;
  walkingPace: string;
  mapStops: string[];
  highlights: string[];
  inclusions: string[];
  faqs: JourneyFaq[];
  days: ExperienceDay[];
};

export const tripPricing = [
  {
    label: "Solo traveler",
    price: "€100",
    detail: "per person, per day"
  },
  {
    label: "2 or 3 travelers",
    price: "€90",
    detail: "per person, per day"
  },
  {
    label: "Group / 4 or more travelers",
    price: "€70",
    detail: "per person, per day"
  }
];

export const tripPricingNote =
  "Final trip pricing may depend on the selected itinerary and requested arrangements. Contact us on WhatsApp for confirmation.";

const trekInclusions = [
  "Transport from Marrakech can be organized",
  "Accommodation before or after the desert route when arranged",
  "Meals, tea and drinking water during the trek",
  "Camping equipment for desert nights",
  "Camel caravan and local camel guides",
  "Desert logistics handled by the Sahara Caravan team"
];

const trekFaqs: JourneyFaq[] = [
  {
    question: "When is the best season for this trek?",
    answer: "Sahara Caravan runs its main desert season from October to April, when temperatures are better suited to walking, camp life and sleeping under the stars."
  },
  {
    question: "How much walking should I expect?",
    answer: "Most camel trekking days include around three to four hours of walking at a calm pace, with pauses for tea, meals, rest and the rhythm of the group."
  },
  {
    question: "Do I need trekking experience?",
    answer: "You do not need technical trekking experience. The route is guided locally and the pace is adapted to the group, weather and desert conditions."
  },
  {
    question: "Can the route be adjusted?",
    answer: "Yes. Sahara routes are shaped by the season, wind, group pace and comfort level. The team can explain the best version for your travel dates."
  }
];

export const desertExperiences: DesertExperience[] = [
  {
    slug: "4-days-camel-trek",
    title: "4-Day Trek",
    eyebrow: "Camel trek",
    duration: "4 days",
    image: "/assets/images/experiences/4-day-trek-camel-caravan.jpg",
    alt: "Camel caravan walking across Sahara dunes for the 4-Day Trek.",
    description:
      "A focused camel trek for travelers who want a deep first encounter with desert silence, nomadic rhythm and nights under the stars.",
    seoDescription:
      "A 4-day Sahara camel trek from M’Hamid El Ghizlane, Morocco with local nomads, desert camps, meals, water, tea ceremonies and three to four hours of walking on most trekking days.",
    kind: "camel-trek",
    bestFor: "First-time Sahara travelers, couples and small groups who want a meaningful desert immersion without a long expedition.",
    walkingPace: "Usually three to four hours of walking on trekking days, guided by local nomads and supported by the caravan.",
    mapStops: ["M’Hamid El Ghizlane, Morocco", "First desert camp", "Open dunes", "Nomad tea stop", "Return route"],
    highlights: [
      "Walk beside a camel caravan from the edge of the Sahara",
      "Share tea and meals with local nomads",
      "Sleep in simple desert camps under clear night skies",
      "Experience the silence, firelight and morning light of the dunes"
    ],
    inclusions: trekInclusions,
    faqs: trekFaqs,
    days: [
      {
        day: 1,
        title: "Arrival in M’Hamid and First Steps Into the Sand",
        description:
          "The Sahara Caravan team welcomes you at the desert gate, prepares the camels and supplies, and sets the first rhythm of the journey. After tea and orientation, the caravan moves away from the village toward a quiet camp where the first desert dinner is served under the sky.",
        image: "/assets/images/lifestyle/nomads-with-camels-sahara.jpg",
        alt: "Nomads with camels in the Sahara.",
        moments: ["Welcome tea", "Camel preparation", "First camp", "Dinner under stars"]
      },
      {
        day: 2,
        title: "Walking With the Caravan",
        description:
          "Morning light opens the walking day. You follow the camel caravan through soft sand and open horizons, stopping for tea, lunch and rest. The afternoon continues at a gentle pace before camp is prepared in time for sunset, dinner and firelight.",
        image: "/assets/images/experiences/camel-caravan-walking-through-dunes.jpg",
        alt: "Camel caravan walking through deep Sahara dunes.",
        moments: ["Sunrise", "Three to four hours walking", "Tea stop", "Sunset camp"]
      },
      {
        day: 3,
        title: "Nomadic Rhythm and Desert Silence",
        description:
          "The third day is dedicated to the quiet rhythm of nomadic travel. You walk, pause, listen and learn how local guides read the wind, sand and light. The evening is slow and simple: tea, a warm meal, conversation and a sky full of stars.",
        image: "/assets/images/gallery/camel-guides-long-shadows.jpg",
        alt: "Camel guides with long shadows in the Sahara sunset.",
        moments: ["Nomad knowledge", "Open dunes", "Campfire", "Stargazing"]
      },
      {
        day: 4,
        title: "Sunrise Tea and Return",
        description:
          "The final morning begins quietly with tea and the last desert breakfast. The caravan follows the return route toward M’Hamid, leaving enough space to absorb the silence before saying farewell to the team.",
        image: "/assets/images/hero/hero-golden-sahara-dunes.jpg",
        alt: "Golden Sahara dunes with small figures walking through the sand.",
        moments: ["Sunrise", "Breakfast", "Return walk", "Farewell tea"]
      }
    ]
  },
  {
    slug: "5-days-camel-trek",
    title: "5-Day Trek",
    eyebrow: "Camel trek",
    duration: "5 days",
    image: "/assets/images/experiences/5-day-trek-desert-camp.jpg",
    alt: "Desert camp in the Sahara for the 5-Day Trek.",
    description:
      "A slower route with more time for walking, tea, camp life and the spacious calm of the Sahara.",
    seoDescription:
      "A 5-day Sahara camel trek from M’Hamid El Ghizlane, Morocco with nomadic guides, camel caravan walking, desert camps, meals, water and nights under the stars.",
    kind: "camel-trek",
    bestFor: "Travelers who want more space than the short trek, with an extra day for deeper silence and camp life.",
    walkingPace: "Steady and calm, usually three to four hours of walking on trekking days with long pauses for rest and tea.",
    mapStops: ["M’Hamid El Ghizlane, Morocco", "Camel caravan trail", "Dune camp", "Nomad encounter", "Return route"],
    highlights: [
      "A slower five day rhythm across open Sahara landscapes",
      "More time for tea ceremonies and simple camp life",
      "Authentic walking days guided by people from the desert",
      "A fuller sense of night, stars and quiet mornings"
    ],
    inclusions: trekInclusions,
    faqs: trekFaqs,
    days: [
      {
        day: 1,
        title: "Welcome, Tea and First Camp",
        description:
          "The journey begins in M’Hamid El Ghizlane, Morocco with welcome tea, preparation and a gentle first walk. The first camp introduces the rhythm of the desert: simple food, warm hospitality and a quiet night away from the road.",
        image: "/assets/images/lifestyle/nomads-with-camels-sahara.jpg",
        alt: "Nomads seated with camels in the Sahara.",
        moments: ["Welcome tea", "Orientation", "First walk", "Camp dinner"]
      },
      {
        day: 2,
        title: "Camel Trail and Long Horizons",
        description:
          "After breakfast, the caravan continues into wider desert. Walking is unhurried, with time to notice tracks, light and silence. Lunch and tea are prepared in the shade before the afternoon walk toward the next camp.",
        image: "/assets/images/experiences/camel-caravan-crossing-golden-dunes.jpg",
        alt: "Camel caravan crossing golden dunes in the Sahara.",
        moments: ["Sunrise", "Camel trail", "Lunch pause", "Sunset"]
      },
      {
        day: 3,
        title: "Nomad Encounters and Camp Life",
        description:
          "The middle of the trek allows the route to breathe. You may meet nomads, share tea, learn about local desert life and spend more time around camp as the day changes from gold to night.",
        image: "/assets/images/experiences/camel-guide-walking-with-two-camels.jpg",
        alt: "Camel guide walking with two camels through the Sahara.",
        moments: ["Nomadic encounters", "Tea ceremony", "Camp preparation", "Stars"]
      },
      {
        day: 4,
        title: "Deep Silence of the Dunes",
        description:
          "The fourth day leans into the emotional part of the trek: fewer distractions, more sky and the sound of footsteps in sand. Dinner is served in camp, followed by firelight and a last full night in the Sahara.",
        image: "/assets/images/gallery/aerial-golden-sand-dunes.jpg",
        alt: "Aerial texture of golden Sahara sand dunes.",
        moments: ["Quiet walking", "Dune views", "Evening meal", "Firelight"]
      },
      {
        day: 5,
        title: "Morning Light and Return",
        description:
          "The final sunrise closes the desert loop. After breakfast, the caravan follows the return route toward M’Hamid, with time for final tea and farewell with the team.",
        image: "/assets/images/gallery/camel-guides-long-shadows.jpg",
        alt: "Camel guides with long shadows in the Sahara sunset.",
        moments: ["Sunrise", "Breakfast", "Return route", "Farewell"]
      }
    ]
  },
  {
    slug: "6-days-camel-trek",
    title: "6-Day Trek",
    eyebrow: "Camel trek",
    duration: "6 days",
    image: "/assets/images/experiences/6-day-trek-night-camp.jpg",
    alt: "Night camp under the stars for the 6-Day Trek.",
    description:
      "An immersive trek for guests who want the desert to unfold day by day through walking, stillness and nomadic encounters.",
    seoDescription:
      "A 6-day Sahara camel trek with local nomads from M’Hamid El Ghizlane, Morocco, including camel caravan walking, camps, meals, water, tea ceremonies and desert logistics.",
    kind: "camel-trek",
    bestFor: "Travelers who want a fuller immersion and enough time for the desert rhythm to become natural.",
    walkingPace: "Measured walking with the caravan, usually three to four hours on trekking days and generous pauses for rest.",
    mapStops: ["M’Hamid El Ghizlane, Morocco", "Caravan trail", "Wide dune areas", "Nomad camp rhythm", "Open desert", "Return route"],
    highlights: [
      "Six days of slow travel with local nomads",
      "A deeper relationship with walking, silence and camp routine",
      "More opportunities for tea, conversations and cultural exchange",
      "A route shaped by season, wind and the group pace"
    ],
    inclusions: trekInclusions,
    faqs: trekFaqs,
    days: [
      {
        day: 1,
        title: "M’Hamid Welcome and Desert Departure",
        description:
          "After meeting the Sahara Caravan team, the camels are prepared and the first walk begins. The day is intentionally gentle, giving you time to settle into the pace before dinner and the first night in camp.",
        image: "/assets/images/lifestyle/nomads-with-camels-sahara.jpg",
        alt: "Nomads seated with camels in the Sahara.",
        moments: ["Meet the team", "Camel loading", "Gentle walk", "First camp"]
      },
      {
        day: 2,
        title: "Tracks, Tea and Open Sand",
        description:
          "The route continues through open desert where guides read tracks and wind. Lunch and tea divide the day naturally, and the evening camp is placed for light, shelter and calm.",
        image: "/assets/images/experiences/camel-guide-walking-with-two-camels.jpg",
        alt: "Camel guide walking with two camels through the Sahara.",
        moments: ["Walking", "Track reading", "Tea", "Camp"]
      },
      {
        day: 3,
        title: "A Day for Nomadic Encounters",
        description:
          "With more time in the itinerary, the journey can slow for cultural encounters and unforced conversation. The experience is not staged tourism; it is a respectful meeting with the life of the desert.",
        image: "/assets/images/team/uncle-laaribi-camel-guide.jpg",
        alt: "Uncle Laaribi, camel guide, photographed in a black turban in Sahara light.",
        moments: ["Nomad life", "Tea ceremony", "Shared meal", "Stories"]
      },
      {
        day: 4,
        title: "The Wide Quiet",
        description:
          "By the fourth day, the desert often feels different. The body knows the rhythm, the mind is quieter, and the day is built around walking, rest, food, fire and sky.",
        image: "/assets/images/gallery/aerial-golden-sand-dunes.jpg",
        alt: "Aerial texture of golden Sahara sand dunes.",
        moments: ["Silence", "Dune textures", "Rest", "Stars"]
      },
      {
        day: 5,
        title: "Last Full Night Under the Stars",
        description:
          "The final full trekking day keeps the same human pace. The team prepares the last deep desert camp, with dinner, tea and enough quiet to feel the journey before it turns back.",
        image: "/assets/images/gallery/camel-guides-long-shadows.jpg",
        alt: "Camel guides with long shadows in the Sahara sunset.",
        moments: ["Caravan walk", "Sunset", "Dinner", "Campfire"]
      },
      {
        day: 6,
        title: "Return to M’Hamid",
        description:
          "After sunrise and breakfast, the caravan follows the return route. Final tea with the team closes the journey and leaves space for onward transport or an extra night if arranged.",
        image: "/assets/images/hero/hero-golden-sahara-dunes.jpg",
        alt: "Golden Sahara dunes with small figures walking through the sand.",
        moments: ["Sunrise", "Breakfast", "Return", "Farewell tea"]
      }
    ]
  },
  {
    slug: "7-days-camel-trek",
    title: "7-Day Trek",
    eyebrow: "Camel trek",
    duration: "7 days",
    image: "/assets/images/gallery/camel-guides-long-shadows.jpg",
    alt: "Camel guides with long shadows in the Sahara.",
    description:
      "A full desert journey shaped by long horizons, simple camps, firelight and the steady pace of the caravan.",
    seoDescription:
      "A 7-day Sahara camel trek from M’Hamid El Ghizlane, Morocco with nomadic guides, camel caravan rhythm, desert camps, meals, water, tea ceremonies and nights under the stars.",
    kind: "camel-trek",
    bestFor: "Guests who want the most complete walking journey and a strong feeling of real desert life.",
    walkingPace: "A sustained but gentle expedition rhythm with walking, rest, camp routine and route choices adapted locally.",
    mapStops: ["M’Hamid El Ghizlane, Morocco", "Caravan route", "Open Sahara camps", "Nomad encounters", "Deep dune rhythm", "Final camp", "Return route"],
    highlights: [
      "The most complete Sahara Caravan walking itinerary",
      "Seven days of camp life, tea, fire and nomadic hospitality",
      "Time for solitude, cultural exchange and slow desert awareness",
      "A route guided by local knowledge rather than fixed tourism"
    ],
    inclusions: trekInclusions,
    faqs: trekFaqs,
    days: [
      {
        day: 1,
        title: "Arrival and First Desert Camp",
        description:
          "The team welcomes you in M’Hamid El Ghizlane, Morocco and prepares the caravan. The first day is calm and grounding, with welcome tea, a first walk and a simple night in the desert.",
        image: "/assets/images/lifestyle/nomads-with-camels-sahara.jpg",
        alt: "Nomads seated with camels in the Sahara.",
        moments: ["Welcome", "Camel preparation", "First walk", "Camp"]
      },
      {
        day: 2,
        title: "Following the Caravan Trail",
        description:
          "The second day builds confidence in the rhythm: walking, tea, lunch, rest and another camp. The guides shape the day around weather, wind and the group's energy.",
        image: "/assets/images/experiences/camel-caravan-crossing-golden-dunes.jpg",
        alt: "Camel caravan crossing golden Sahara dunes.",
        moments: ["Morning light", "Walking", "Lunch", "Sunset camp"]
      },
      {
        day: 3,
        title: "Desert Skills and Nomadic Knowledge",
        description:
          "You spend the day close to the living knowledge of the desert: how guides read sand, choose camp, prepare tea and move with patience through open land.",
        image: "/assets/images/experiences/camel-guide-walking-with-two-camels.jpg",
        alt: "Camel guide walking with two camels through the Sahara.",
        moments: ["Route reading", "Tea", "Camel care", "Camp setup"]
      },
      {
        day: 4,
        title: "The Middle of the Journey",
        description:
          "The fourth day is the turning point emotionally. With no rush, the Sahara becomes larger and quieter. Walking is balanced with long pauses and a slow evening meal.",
        image: "/assets/images/gallery/aerial-golden-sand-dunes.jpg",
        alt: "Aerial texture of golden Sahara sand dunes.",
        moments: ["Deep quiet", "Dune views", "Rest", "Dinner"]
      },
      {
        day: 5,
        title: "Camp Life and Human Connection",
        description:
          "The route continues through a landscape where conversation comes naturally and silence feels generous. Tea, food, fire and shared presence become the center of the day.",
        image: "/assets/images/team/salem-desert-cook-cultural-host.jpg",
        alt: "Salem, desert cook and cultural host, wearing a pale turban and embroidered robe.",
        moments: ["Camp life", "Tea ceremony", "Meals", "Stories"]
      },
      {
        day: 6,
        title: "Final Full Day in the Open Sahara",
        description:
          "The last full walking day gives time to absorb the desert before return. Sunset, dinner and the final night in camp are kept simple, beautiful and unhurried.",
        image: "/assets/images/gallery/camel-guides-long-shadows.jpg",
        alt: "Camel guides with long shadows in the Sahara sunset.",
        moments: ["Walking", "Final camp", "Sunset", "Stars"]
      },
      {
        day: 7,
        title: "Sunrise, Breakfast and Return",
        description:
          "The journey closes with sunrise tea and breakfast before the caravan returns toward M’Hamid. The team helps coordinate onward plans or transport from the desert.",
        image: "/assets/images/hero/hero-golden-sahara-dunes.jpg",
        alt: "Golden Sahara dunes with small figures walking through the sand.",
        moments: ["Sunrise", "Breakfast", "Return", "Farewell"]
      }
    ]
  },
  {
    slug: "6-day-desert-yoga-retreat",
    title: "6-Day Desert Yoga Retreat",
    eyebrow: "Yoga retreat",
    duration: "6 days",
    image: "/assets/images/experiences/6-day-yoga-retreat-group.jpeg",
    alt: "Yoga retreat group gathered in the Sahara dunes.",
    description:
      "Trek, breathe, move and reconnect in the heart of the Sahara through yoga, meditation, camel caravan travel and eco-camp nights.",
    seoDescription:
      "A 6-day Sahara Desert Yoga Retreat from Marrakech to M’Hamid, combining yoga, meditation, breathwork, camel trekking, eco-camp accommodation, nomadic culture and cultural stops across Morocco.",
    kind: "yoga-retreat",
    bestFor:
      "Travelers looking for a calm retreat with movement, meditation, nature immersion, desert trekking and authentic nomadic culture.",
    walkingPace:
      "Gentle retreat rhythm with guided trekking, daily yoga or breathwork moments, rest periods and support from the local caravan team.",
    mapStops: [
      "Marrakech",
      "Atlas Mountains",
      "Ouarzazate",
      "M’Hamid El Ghizlane, Morocco",
      "Sidi Naji",
      "Erg Zahar",
      "Erg Smar",
      "Aït Ben Haddou",
      "Marrakech Medina"
    ],
    highlights: [
      "Yoga, meditation and breathwork shaped by the desert setting",
      "Camel caravan trekking from palm groves toward remote dunes",
      "Eco-camp accommodation with showers, toilets and phone charging",
      "Cultural stops between Marrakech and M’Hamid, including Aït Ben Haddou and Tamegroute"
    ],
    inclusions: [
      "Transfer from Marrakech Airport toward the desert",
      "Eco-camp accommodation during the retreat route",
      "Meals, tea and drinking water during desert days",
      "Camel caravan support and local desert team",
      "Yoga, meditation and breathwork sessions coordinated according to the group’s teacher arrangements",
      "4x4 return from the desert to M’Hamid on the final day"
    ],
    faqs: [
      {
        question: "Is this retreat only for experienced yoga guests?",
        answer:
          "The retreat is designed around nature, calm movement and desert rhythm. Yoga sessions are coordinated according to the group’s teacher arrangements. Contact us to confirm the teacher plan for your retreat."
      },
      {
        question: "Are there real facilities at the eco camp?",
        answer:
          "Yes. The first desert camp includes rooms, showers, toilets and electricity for charging phones."
      },
      {
        question: "How much hiking is included?",
        answer:
          "Some days include desert trekking with the camel caravan, including approximately three hours of hiking on the route toward Erg Zahar."
      },
      {
        question: "Can arrangements be confirmed before travel?",
        answer:
          "Yes. Contact Sahara Caravan on WhatsApp to confirm dates, group size, teacher arrangements, transport and the final retreat plan."
      }
    ],
    days: [
      {
        day: 1,
        title: "Across the Atlas Mountains to the Desert",
        description:
          "Transfer from Marrakech Airport toward the Sahara, with stops along the journey for lunch and rest. The route crosses the Atlas Mountains and the Tizi n’Tichka Pass, passes through Ouarzazate, Morocco's cinema city, and continues toward the desert for an overnight stay at an ecological camp under the stars. Camp facilities include rooms, showers, toilets and electricity for charging phones.",
        image: "/assets/images/gallery/desert-camp-at-sunset.jpg",
        alt: "Desert camp at sunset surrounded by warm Sahara light.",
        moments: ["Marrakech transfer", "Atlas Mountains", "Tizi n’Tichka Pass", "Eco camp"]
      },
      {
        day: 2,
        title: "Yoga, Meditation and the Oasis",
        description:
          "The retreat opens with a nature-focused yoga practice, morning meditation among palm trees and time to connect with the oasis environment. The day includes desert trekking and an overnight stay at an eco camp.",
        image: "/assets/images/gallery/group-at-desert-oasis.jpg",
        alt: "A small group resting near a desert oasis.",
        moments: ["Opening practice", "Palm-tree meditation", "Oasis time", "Eco camp"]
      },
      {
        day: 3,
        title: "Camel Caravan to Erg Zahar",
        description:
          "Depart from Sidi Naji camp toward Erg Zahar with the camels as one nomadic caravan. The Draa Valley, Morocco's longest valley, divides the M’Hamid Sahara between a remote dry eastern area and a greener western area. Leaving the palm groves behind, the route crosses hamada, a small salty valley and rocky plateau landscapes, with traces of abandoned Oulad Zbiir houses and ancient pottery. After approximately three hours of hiking, there is a long peaceful lunch beneath tamarisk trees, then another hike before camping among golden dunes with panoramic views. The trek continues toward Erg Zahar before camp is prepared and the evening yoga session begins.",
        image: "/assets/images/gallery/camel-caravan-crossing-flat-desert.jpg",
        alt: "Camel caravan crossing a flat desert landscape.",
        moments: ["Sidi Naji", "Draa Valley", "Tamarisk lunch", "Evening yoga"]
      },
      {
        day: 4,
        title: "Stillness Among the Great Dunes",
        description:
          "A slower rest day among the giant Erg Zahar dunes. Camp is positioned in a sheltered area surrounded by dunes, with carpets and candles on a nearby dune for a calm sunset atmosphere. The day allows time for yoga exercises, remote red dunes, dinner beneath the stars, campfire gathering and Sahara storytelling with the team.",
        image: "/assets/images/gallery/erg-zahar-dune-at-sunrise.jpg",
        alt: "A tall golden Sahara dune rising in morning light.",
        moments: ["Rest day", "Yoga exercises", "Sunset dunes", "Sahara stories"]
      },
      {
        day: 5,
        title: "Two Colours Dunes and Desert Breathwork",
        description:
          "Say goodbye to Erg Zahar and hike with the camels toward the remote Draa Valley, passing tamarisk forest, desert vegetation, old farmer houses and a camel watering area. The route reaches the place where white dunes meet orange dunes, with lunch and rest at the Two Colours Dunes of Erg Smar. Continue toward the upper part of Erg Smar and camp among orange dunes reflecting golden twilight. The evening includes yoga, breathwork, optional guided voice release from the top of the dunes, physical stretching and fireside conversation on the other side of the Draa Valley.",
        image: "/assets/images/gallery/golden-sahara-dunes-panorama.jpg",
        alt: "Golden Sahara dunes beneath a clear desert sky.",
        moments: ["Draa Valley", "Two Colours Dunes", "Breathwork", "Fireside conversation"]
      },
      {
        day: 6,
        title: "From the Sahara Back to Marrakech",
        description:
          "Return to M’Hamid by 4x4 in approximately 1 hour and 20 minutes through varied desert landscapes. Visit the old village of M’Hamid, learn about the old mosque and traditional kasbah construction, and take a brief look at local farming land. Continue toward Marrakech with stops at Tamegroute pottery workshops, the Agdz panorama, lunch and a visit at Aït Ben Haddou, a UNESCO World Heritage site, and the Tizi n’Tichka panorama. The day ends with an evening visit to Marrakech Medina, the Koutoubia Mosque and Jemaa el-Fna before overnighting in Marrakech.",
        image: "/assets/images/gallery/sahara-team-beside-4x4.jpg",
        alt: "Sahara team standing beside a 4x4 vehicle.",
        moments: ["4x4 return", "Old M’Hamid", "Tamegroute", "Marrakech evening"]
      }
    ]
  },
  {
    slug: "4x4-safari-expedition",
    title: "4x4 Safari Experience",
    eyebrow: "4x4 safari",
    duration: "Sample 4-Day Itinerary — Flexible Duration",
    image: "/assets/images/safari/4x4-desert-camp-dunes.jpg",
    alt: "White 4x4 vehicle parked beside a desert tent below orange dunes.",
    description:
      "Designed for families and travelers who prefer exploring more places with less walking, with transport from Marrakech, accommodation and meals included.",
    customizationNote: "This sample route can be shortened, extended, or adapted to the group.",
    seoDescription:
      "A Sahara 4x4 safari experience from Marrakech to M’Hamid, Lake Iriqui, Erg Chegaga and Erg Zahar, with accommodation, meals, nomad encounters and a camel ride.",
    kind: "safari",
    bestFor: "Families, comfort-focused travelers and guests who want to see more desert places with less walking.",
    walkingPace: "Light walking only. The route is designed around 4x4 access, scenic stops, nomad encounters and a camel ride.",
    mapStops: ["Marrakech", "M’Hamid El Ghizlane, Morocco", "Animal Park", "Sacred Oasis", "Lake Iriqui", "Erg Chegaga", "Erg Zahar", "Return to Marrakech"],
    highlights: [
      "Private 4x4 desert access from Marrakech when arranged",
      "Visit nomads, the Animal Park, Sacred Oasis and Lake Iriqui",
      "Explore Erg Chegaga and Erg Zahar with less walking",
      "Camel ride, meals, accommodation and return logistics included"
    ],
    inclusions: [
      "Transport from Marrakech",
      "4x4 desert route and driver",
      "Accommodation during the experience",
      "Meals, tea and drinking water",
      "Nomadic encounters and scenic desert stops",
      "Camel ride and return to Marrakech"
    ],
    faqs: [
      {
        question: "Who is the 4x4 safari for?",
        answer: "It is designed for families and travelers who prefer exploring more places with less walking while still experiencing nomads, dunes, tea, meals and desert camps."
      },
      {
        question: "Does the safari include Marrakech transport?",
        answer: "Yes. The experience includes transport from Marrakech, accommodation, meals, desert stops and return logistics."
      },
      {
        question: "Will there still be a camel experience?",
        answer: "Yes. The safari includes a camel ride so guests can feel the rhythm of the caravan without committing to a full walking trek."
      },
      {
        question: "Can the route be adapted for children or older travelers?",
        answer: "Yes. The 4x4 format is the most flexible option for families, older travelers and anyone who wants a softer pace."
      }
    ],
    days: [
      {
        day: 1,
        title: "Marrakech Transfer and Sahara Arrival",
        description:
          "The experience starts with transport from Marrakech when arranged. The route moves toward the desert gateway, with accommodation and meals organized so the arrival feels smooth and cared for.",
        image: "/assets/images/gallery/sahara-team-beside-4x4.jpg",
        alt: "Sahara Caravan team standing beside a 4x4 vehicle in the desert.",
        moments: ["Marrakech departure", "Scenic road", "Accommodation", "Dinner"]
      },
      {
        day: 2,
        title: "Nomads, Animal Park, Sacred Oasis and Lake Iriqui",
        description:
          "The 4x4 route makes it possible to cover more desert places in one day. You visit nomads, the Animal Park, Sacred Oasis and Lake Iriqui, with meals and rest stops handled by the team.",
        image: "/assets/images/gallery/ostrich-in-desert-park.jpg",
        alt: "Ostrich standing in a desert park landscape.",
        moments: ["Nomads", "Animal Park", "Sacred Oasis", "Lake Iriqui"]
      },
      {
        day: 3,
        title: "Erg Chegaga, Camel Ride and Desert Camp",
        description:
          "The safari continues toward the great dune areas around Erg Chegaga. A camel ride brings the caravan feeling into the journey before an evening of tea, dinner and desert accommodation.",
        image: "/assets/images/gallery/desert-camp-at-sunset.jpg",
        alt: "Desert camp at sunset surrounded by warm Sahara light.",
        moments: ["Erg Chegaga", "Camel ride", "Tea", "Camp"]
      },
      {
        day: 4,
        title: "Erg Zahar and Return to Marrakech",
        description:
          "The final stage visits Erg Zahar before the return route. The team manages the practical details so guests can keep the feeling of the desert through the journey back to Marrakech.",
        image: "/assets/images/gallery/erg-zahar-dune-at-sunrise.jpg",
        alt: "Tall golden dune at Erg Zahar in soft morning light.",
        moments: ["Erg Zahar", "Final views", "Return route", "Marrakech"]
      }
    ]
  }
];

export const safariHighlights = [
  "Transport from Marrakech",
  "Accommodation included",
  "Meals and water included",
  "Nomadic encounters",
  "Animal Park",
  "Sacred Oasis",
  "Lake Iriqui",
  "Erg Chegaga",
  "Erg Zahar",
  "Camel ride",
  "Return to Marrakech"
];

export type VideoAsset = {
  title: string;
  src: string;
  poster?: string;
  description: string;
  orientation: "landscape" | "vertical";
};

export const saharaInMotionVideos: VideoAsset[] = [
  {
    title: "The Sound of Dunes",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-01.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-01-poster.jpg",
    description: "Wind-shaped sand textures moving through warm desert light.",
    orientation: "landscape"
  },
  {
    title: "Across the Open Desert",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-02.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-02-poster.jpg",
    description: "A quiet look across wide sand and low desert shrubs.",
    orientation: "landscape"
  },
  {
    title: "Portrait in the Sahara Light",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-03.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-03-poster.jpg",
    description: "A desert guide framed by soft dunes and late-day light.",
    orientation: "landscape"
  },
  {
    title: "Campfire Beneath the Night",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-04.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-04-poster.jpg",
    description: "Firelight, conversation and a calm evening around camp.",
    orientation: "landscape"
  },
  {
    title: "Shadows on the Sand",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-05.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-05-poster.jpg",
    description: "Moving shadows crossing rippled sand in the sun.",
    orientation: "landscape"
  },
  {
    title: "Camel at Sunset",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-06.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-06-poster.jpg",
    description: "A camel silhouette against the low desert sun.",
    orientation: "landscape"
  },
  {
    title: "Following the Palm Grove Trail",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-07.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-07-poster.jpg",
    description: "A camel caravan moving through palms and pale sand.",
    orientation: "landscape"
  },
  {
    title: "Arrival at Camp",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-08.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-08-poster.jpg",
    description: "People, camels and supplies gathered beside desert walls.",
    orientation: "landscape"
  },
  {
    title: "Shared Meal in the Dunes",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-09.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-09-poster.jpg",
    description: "Travelers and guides seated together around a desert meal.",
    orientation: "landscape"
  },
  {
    title: "Walking at Dusk",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-10.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-10-poster.jpg",
    description: "A quiet walk over darkening sand as evening settles in.",
    orientation: "landscape"
  },
  {
    title: "Moonlit Desert Camp",
    src: "/assets/videos/sahara-in-motion/sahara-in-motion-11.mp4",
    poster: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-11-poster.jpg",
    description: "Low camp lights beneath a clear moonlit desert sky.",
    orientation: "landscape"
  }
];

export const bringItems = [
  "Headlamp or flashlight",
  "Toilet paper",
  "Lighter",
  "Scarf or ski mask in case of sandstorm",
  "Sunglasses",
  "Sunscreen",
  "Small backpack",
  "Walking shoes with sturdy soles and good grip",
  "Sandals",
  "Breathable T-shirts and long-sleeved layers",
  "Walking pants and shorts",
  "Sleeping bag or sleeping sheet",
  "Personal medications",
  "Anti-diarrheal",
  "Aspirin or paracetamol",
  "Antiseptic and cotton pads",
  "Bandages"
];
