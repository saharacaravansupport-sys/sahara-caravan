import type { Metadata } from "next";
import { SaharaInMotionShowcase } from "@/components/SaharaInMotionShowcase";
import { saharaInMotionVideos } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Sahara in Motion | Short Desert Films by Sahara Caravan"
  },
  description:
    "Watch short films from Sahara Caravan capturing authentic desert landscapes, nomadic life and unforgettable journeys around M\u2019Hamid El Ghizlane, Morocco.",
  alternates: {
    canonical: "/sahara-in-motion"
  },
  openGraph: {
    title: "Sahara in Motion | Short Desert Films by Sahara Caravan",
    description:
      "Watch short films from Sahara Caravan capturing authentic desert landscapes, nomadic life and unforgettable journeys around M\u2019Hamid El Ghizlane, Morocco.",
    url: "/sahara-in-motion",
    images: [
      {
        url: "/assets/videos/sahara-in-motion/posters/sahara-in-motion-01-poster.jpg",
        width: 1080,
        height: 720,
        alt: "The Sound of Dunes short desert film poster"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahara in Motion | Short Desert Films by Sahara Caravan",
    description:
      "Watch short films from Sahara Caravan capturing authentic desert landscapes, nomadic life and unforgettable journeys around M\u2019Hamid El Ghizlane, Morocco.",
    images: ["/assets/videos/sahara-in-motion/posters/sahara-in-motion-01-poster.jpg"]
  }
};

export default function SaharaInMotionPage() {
  return (
    <SaharaInMotionShowcase
      videos={saharaInMotionVideos}
      kicker="Short Desert Films"
      title="Sahara in Motion"
      description="Short films from the heart of the desert."
      headingLevel="h1"
      pageIntro
    />
  );
}
