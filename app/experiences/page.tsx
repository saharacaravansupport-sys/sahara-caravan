import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, CheckCircle2, Footprints, Utensils, Waves } from "lucide-react";
import { PricingBlock } from "@/components/PricingBlock";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { desertExperiences, safariHighlights } from "@/data/site";

export const metadata: Metadata = {
  title: "Desert Tours",
  description:
    "Camel treks and 4x4 Sahara safari tours from M’Hamid El Ghizlane, Morocco with local nomads, camps, meals, water and desert logistics."
};

const inclusions = [
  "Transport from Marrakech",
  "Accommodation",
  "Meals and water",
  "Camping equipment",
  "Camel trekking",
  "Desert logistics"
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="section-pad bg-charcoal pt-36 text-cream">
        <div className="content-shell max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">Desert Tours</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-7xl">
              Camel treks and Sahara routes shaped by local nomads.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/75">
              From October to April, guests travel with camel caravans, share tea, sleep under the stars
              and discover the real Sahara at a human pace.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell">
          <Reveal>
            <SectionHeading kicker="Journeys" title="Choose the rhythm of your desert crossing.">
              <p>
                The team organizes the logistics so guests can focus on walking, silence, encounters and camp life.
              </p>
            </SectionHeading>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {desertExperiences.map((experience, index) => (
              <Reveal key={experience.slug} delay={index * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded bg-linen shadow-soft">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className={`object-cover transition duration-700 group-hover:scale-105 ${
                        experience.kind === "safari"
                          ? "object-[50%_62%]"
                          : experience.kind === "yoga-retreat"
                            ? "object-[34%_50%]"
                            : "object-center"
                      }`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase text-dune">
                      {experience.eyebrow} / {experience.duration}
                    </p>
                    <h2 className="mt-3 font-serif text-2xl leading-tight text-charcoal">{experience.title}</h2>
                    <p className="mt-4 flex-1 text-sm leading-7 text-smoke">{experience.description}</p>
                    {experience.customizationNote ? (
                      <p className="mt-3 text-sm font-semibold leading-6 text-brown">{experience.customizationNote}</p>
                    ) : null}
                    <div className="mt-5 grid gap-2">
                      {experience.highlights.slice(0, 2).map((highlight) => (
                        <span key={highlight} className="flex gap-2 text-xs leading-5 text-smoke">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-dune" aria-hidden="true" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/experiences/${experience.slug}`}
                      className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded bg-charcoal px-4 py-3 text-sm font-semibold text-cream transition hover:bg-date"
                    >
                      Explore Journey
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div className="content-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading kicker="Included logistics" title="Everything essential is organized locally.">
              <p>
                Sahara Caravan is a family of nomads from M&rsquo;Hamid El Ghizlane. The goal is
                authentic desert tours, not traditional tourism.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div key={item} className="rounded border border-brown/10 bg-cream p-4 text-sm font-semibold text-charcoal">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell">
          <PricingBlock />
        </div>
      </section>

      <section className="section-pad bg-charcoal text-cream">
        <div className="content-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded shadow-image">
              <Image
                src="/assets/images/safari/4x4-desert-camp-dunes.jpg"
                alt="White 4x4 vehicle beside a desert tent below orange dunes."
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[50%_62%]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xs font-semibold uppercase text-dune">4x4 Safari</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
              More places, less walking, the same desert soul.
            </h2>
            <p className="mt-6 text-lg leading-8 text-cream/75">
              Designed for families and travelers who prefer exploring larger distances by 4x4 while still meeting
              nomads, touching the dunes, sharing meals and sleeping close to the Sahara.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {safariHighlights.map((item, index) => {
                const Icon = index % 3 === 0 ? Car : index % 3 === 1 ? Waves : Utensils;
                return (
                  <div key={item} className="flex items-center gap-3 rounded bg-cream/8 p-3">
                    <Icon className="h-4 w-4 text-dune" aria-hidden="true" />
                    <span className="text-sm text-cream/82">{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <WhatsAppButton label="Ask about the safari" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <Reveal className="content-shell max-w-3xl text-center">
          <Footprints className="mx-auto h-9 w-9 text-dune" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
            Walking usually means three to four hours per day.
          </h2>
          <p className="mt-6 text-lg leading-8 text-smoke">
            Optional 4x4 transportation can support guests who want a softer rhythm or need flexibility.
          </p>
        </Reveal>
      </section>
    </>
  );
}
