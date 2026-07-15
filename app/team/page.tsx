import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { teamMembers } from "@/data/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Sahara Caravan team from M’Hamid El Ghizlane, Morocco: guides, drivers, cooks and nomads who host each journey."
};

export default function TeamPage() {
  return (
    <>
      <section className="section-pad bg-charcoal pt-36 text-cream">
        <div className="content-shell max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">The Sahara Caravan team</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-7xl">
              Meet the People Behind the Journey
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/75">
              You may arrive as a guest. You leave as family.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        {teamMembers.map((member, index) => {
          const reversed = index % 2 === 1;
          return (
            <article key={member.name} className="section-pad hairline">
              <div
                className={`content-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2 lg:grid-cols-[1.08fr_0.92fr]" : ""
                }`}
              >
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded bg-charcoal shadow-image">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.12} className="max-w-xl">
                  <p className="text-sm font-semibold text-dune">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">{member.name}</h2>
                  <p className="mt-4 text-base font-semibold uppercase text-brown">{member.role}</p>
                  <p className="mt-7 text-lg leading-9 text-smoke">{member.bio}</p>
                </Reveal>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
