import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Sahara Caravan: local desert tours from M’Hamid El Ghizlane, Morocco built around silence, nomadic culture and human connection."
};

const story = [
  "We are a family of nomads from M’Hamid El Ghizlane, near Erg Chegaga in southern Morocco.",
  "Our goal is to share authentic desert journeys, away from mass tourism. Guests travel with local nomads, walk beside camel caravans and discover the Sahara through silence, tea, fire, stars and simple human connection.",
  "Sahara Caravan organizes the essential logistics: transport from Marrakech, accommodation, meals, water, camping equipment, camel trekking and desert coordination.",
  "Guests only need to arrive with curiosity and presence. The route, camp rhythm, food, water and practical details are cared for by people who know the desert as home.",
  "Our season runs from October to April, when the desert is gentler and the days are made for walking, nomadic encounters, tea ceremonies, yoga, camps and sleeping under the stars.",
  "Most camel trekking days include three to four hours of walking. Optional 4x4 transportation can support guests who prefer more comfort, families who want flexibility, or travelers who want to explore farther."
];

const pillars = [
  {
    title: "Local Nomads",
    text: "Our tours are guided by local people from M’Hamid who understand the land, the wind, the routes and the culture."
  },
  {
    title: "Everything Organized",
    text: "Transport, accommodation, meals, water, camping equipment, camels and desert logistics are arranged with care."
  },
  {
    title: "October to April",
    text: "The season follows the comfortable desert months, with walking, camps, tea ceremonies, yoga and nights under the stars."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-charcoal pt-36 text-cream">
        <div className="content-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">About Sahara Caravan</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-7xl">
              A local story from the edge of the great Sahara.
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="text-lg leading-9 text-cream/75">
            <p>
              The desert is not a backdrop here. It is home, memory, hospitality and a quiet invitation
              to move differently.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded shadow-image">
                <Image
                  src="/assets/images/team/ali-el-gasmi-founder-desert-guide.jpg"
                  alt="Ali El Gasmi standing in the Sahara with a camel."
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading kicker="The story" title="Authentic desert journeys, away from mass tourism." />
            <div className="mt-8 grid gap-6 text-lg leading-9 text-smoke">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div className="content-shell grid gap-8 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded border border-brown/10 bg-cream p-7">
                <p className="font-serif text-3xl text-charcoal">{item.title}</p>
                <p className="mt-4 leading-7 text-smoke">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-charcoal text-cream">
        <Reveal className="content-shell max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight sm:text-6xl">Come as a guest. Leave with a memory.</h2>
          <p className="mt-6 text-lg leading-8 text-cream/70">
            Speak directly with the Sahara Caravan team on WhatsApp.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Speak with us on WhatsApp" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
