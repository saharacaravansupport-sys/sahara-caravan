import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Flame,
  Footprints,
  MapPin,
  MessageCircle,
  MoonStar,
  Sparkles,
  Tent,
  Utensils
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PricingBlock } from "@/components/PricingBlock";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { desertExperiences, siteConfig } from "@/data/site";

type ExperienceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type RhythmItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export function generateStaticParams() {
  return desertExperiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: ExperienceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = desertExperiences.find((item) => item.slug === slug);
  if (!experience) return {};

  return {
    title: experience.title,
    description: experience.seoDescription,
    alternates: {
      canonical: `/experiences/${experience.slug}`
    },
    openGraph: {
      title: `${experience.title} | Sahara Caravan`,
      description: experience.seoDescription,
      images: [{ url: experience.image, alt: experience.alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${experience.title} | Sahara Caravan`,
      description: experience.seoDescription,
      images: [experience.image]
    }
  };
}

function getRhythm(experienceKind: "camel-trek" | "safari" | "yoga-retreat", walkingPace: string): RhythmItem[] {
  if (experienceKind === "safari") {
    return [
      { label: "Route style", value: "4x4 desert travel", icon: Car },
      { label: "Walking", value: "Light and flexible", icon: Footprints },
      { label: "Meals", value: "Included with tea", icon: Utensils },
      { label: "Nights", value: "Accommodation included", icon: MoonStar }
    ];
  }

  if (experienceKind === "yoga-retreat") {
    return [
      { label: "Route style", value: "Retreat and caravan", icon: MoonStar },
      { label: "Movement", value: "Yoga, breathwork and trekking", icon: Footprints },
      { label: "Meals", value: "Meals, water and tea", icon: Utensils },
      { label: "Nights", value: "Eco camps and desert camps", icon: Tent }
    ];
  }

  return [
    { label: "Route style", value: "Camel caravan", icon: Flame },
    { label: "Walking", value: walkingPace, icon: Footprints },
    { label: "Meals", value: "Meals, water and tea", icon: Utensils },
    { label: "Nights", value: "Desert camps", icon: Tent }
  ];
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = desertExperiences.find((item) => item.slug === slug);
  if (!experience) notFound();

  const rhythm = getRhythm(experience.kind, experience.walkingPace);
  const tripStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${experience.title} by Sahara Caravan`,
    description: experience.seoDescription,
    image: `${siteConfig.url}${experience.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "M’Hamid El Ghizlane, Morocco",
        addressCountry: "MA"
      }
    },
    itinerary: experience.days.map((day) => ({
      "@type": "ItemList",
      name: `Day ${day.day}: ${day.title}`,
      description: day.description
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripStructuredData) }}
      />

      <section className="relative min-h-[82svh] overflow-hidden bg-charcoal px-4 pb-16 pt-32 text-cream sm:px-6 sm:pt-36 lg:px-8">
        <Image src={experience.image} alt={experience.alt} fill priority sizes="100vw" className="object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/15" />
        <div className="relative z-10 mx-auto flex min-h-[58svh] w-full max-w-7xl flex-col justify-end">
          <Reveal className="max-w-4xl">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 rounded border border-cream/20 px-4 py-2 text-sm font-semibold text-cream/80 transition hover:border-dune hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All tours
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase text-dune">{experience.eyebrow}</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-7xl">{experience.title}</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/78">{experience.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell">
          <div className="grid gap-5 lg:grid-cols-4">
            {rhythm.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 0.05}>
                  <div className="h-full rounded border border-brown/10 bg-linen p-5">
                    <Icon className="h-5 w-5 text-dune" aria-hidden="true" />
                    <p className="mt-4 text-xs font-semibold uppercase text-brown">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-smoke">{item.value}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <p className="text-xs font-semibold uppercase text-dune">Best for</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
                A route designed for the way you want to meet the Sahara.
              </h2>
              <p className="mt-6 text-lg leading-8 text-smoke">{experience.bestFor}</p>
              {experience.customizationNote ? (
                <p className="mt-4 text-base font-semibold leading-7 text-brown">{experience.customizationNote}</p>
              ) : null}
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded bg-charcoal p-6 text-cream shadow-soft">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-dune" aria-hidden="true" />
                  <p className="text-sm font-semibold uppercase text-cream/70">Route markers</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {experience.mapStops.map((stop, index) => (
                    <span key={stop} className="inline-flex items-center gap-2 rounded bg-cream/8 px-3 py-2 text-sm text-cream/82">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-dune text-xs font-bold text-charcoal">
                        {index + 1}
                      </span>
                      {stop}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div className="content-shell">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-dune">Day by day</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
              A timeline of light, walking, tea, meals and camp.
            </h2>
            <p className="mt-5 text-lg leading-8 text-smoke">
              Every Sahara route remains flexible. Local guides adapt the rhythm to the season, wind,
              group pace and desert conditions.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8">
            {experience.days.map((day, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={day.day} delay={Math.min(index * 0.04, 0.2)}>
                  <article className="grid overflow-hidden rounded bg-cream shadow-soft lg:grid-cols-[0.92fr_1.08fr]">
                    <div className={`relative min-h-72 ${isEven ? "" : "lg:order-2"}`}>
                      <Image
                        src={day.image}
                        alt={day.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-charcoal font-serif text-xl text-cream">
                          {day.day}
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase text-dune">Day {day.day}</p>
                          <h3 className="font-serif text-3xl leading-tight text-charcoal">{day.title}</h3>
                        </div>
                      </div>
                      <p className="mt-6 text-base leading-8 text-smoke">{day.description}</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {day.moments.map((moment) => (
                          <span key={moment} className="inline-flex items-center gap-2 rounded border border-brown/10 px-3 py-2 text-sm text-charcoal">
                            <Sparkles className="h-4 w-4 text-dune" aria-hidden="true" />
                            {moment}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-charcoal text-cream">
        <div className="content-shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">Highlights</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">What makes this journey memorable.</h2>
            <div className="mt-8 grid gap-4">
              {experience.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 rounded bg-cream/8 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-dune" aria-hidden="true" />
                  <p className="leading-7 text-cream/78">{highlight}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-xs font-semibold uppercase text-dune">Included</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">The essentials are organized locally.</h2>
            <div className="mt-8 grid gap-4">
              {experience.inclusions.map((inclusion) => (
                <div key={inclusion} className="flex gap-3 rounded bg-cream/8 p-4">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0 text-dune" aria-hidden="true" />
                  <p className="leading-7 text-cream/78">{inclusion}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div className="content-shell">
          <PricingBlock />
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Practical answers before you book.
            </h2>
            <p className="mt-5 text-lg leading-8 text-smoke">
              For dates, group size and comfort level, the fastest answer is a direct message to the team.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4">
              {experience.faqs.map((faq) => (
                <details key={faq.question} className="group rounded border border-brown/10 bg-linen p-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-semibold text-charcoal">
                    <span className="flex items-start gap-3">
                      <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-dune" aria-hidden="true" />
                      {faq.question}
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brown transition group-open:rotate-90" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 pl-8 leading-7 text-smoke">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal px-4 py-24 text-cream sm:px-6 lg:px-8">
        <Image src={experience.image} alt={experience.alt} fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <MessageCircle className="mx-auto h-9 w-9 text-dune" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Ask about this journey.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/78">
            Tell Sahara Caravan your dates, group size and preferred rhythm. The local team will help shape
            the right route from M&rsquo;Hamid El Ghizlane or Marrakech.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Book this journey on WhatsApp" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
