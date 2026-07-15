import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "Sahara Caravan",
  title: {
    default: "Sahara Caravan | Authentic Sahara Journeys in Morocco",
    template: "%s | Sahara Caravan"
  },
  description: siteConfig.description,
  keywords: [
    "Sahara Caravan",
    "M’Hamid El Ghizlane, Morocco",
    "Sahara camel trek",
    "Erg Chegaga",
    "Erg Zahar",
    "Morocco desert tour",
    "4x4 Sahara safari",
    "nomad desert experience"
  ],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48"
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  openGraph: {
    title: "Sahara Caravan",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Sahara Caravan",
    images: [
      {
        url: "/assets/images/hero/hero-golden-sahara-dunes.jpg",
        width: 1080,
        height: 1350,
        alt: "Golden Sahara dunes from Sahara Caravan"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahara Caravan",
    description: siteConfig.description,
    images: ["/assets/images/hero/hero-golden-sahara-dunes.jpg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F1A17"
};

const absoluteSiteUrl = siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`;
const brandIconUrl = new URL("/icon.png", absoluteSiteUrl).toString();

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteSiteUrl
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteSiteUrl,
    logo: brandIconUrl,
    sameAs: [siteConfig.instagramUrl]
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteSiteUrl,
    image: `${siteConfig.url}/assets/images/hero/hero-golden-sahara-dunes.jpg`,
    logo: brandIconUrl,
    telephone: siteConfig.whatsappLabel,
    email: siteConfig.email,
    hasMap: siteConfig.mapUrl,
    priceRange: "EUR70-EUR100 per person per day",
    sameAs: [siteConfig.instagramUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "M’Hamid El Ghizlane, Morocco",
      addressCountry: "MA"
    },
    areaServed: ["M’Hamid El Ghizlane, Morocco", "Erg Chegaga", "Erg Zahar", "Moroccan Sahara"],
    knowsAbout: [
      "Camel trekking",
      "Nomadic encounters",
      "Desert camps",
      "Tea ceremonies",
      "4x4 Sahara safari",
      "Lake Iriqui"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sahara Caravan tours",
      itemListElement: [
        "4-Day Trek",
        "5-Day Trek",
        "6-Day Trek",
        "7-Day Trek",
        "6-Day Desert Yoga Retreat",
        "4x4 Safari Experience"
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name
        }
      }))
    }
  }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
