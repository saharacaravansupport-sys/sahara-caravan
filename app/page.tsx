import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Flame,
  HandHeart,
  MapPin,
  Tent,
  Users
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SaharaInMotionShowcase } from "@/components/SaharaInMotionShowcase";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  bringItems,
  desertExperiences,
  galleryImages,
  saharaInMotionVideos,
  teamMembers
} from "@/data/site";

const introStats = [
  { label: "Gateway", value: "M’Hamid" },
  { label: "Season", value: "Oct-Apr" },
  { label: "Rhythm", value: "Nomadic" }
];

const reasons = [
  {
    title: "Local people, real routes",
    text: "Travel with guides who grew up near these dunes and know how to read the wind, tracks and silence.",
    icon: Compass
  },
  {
    title: "Slow travel, not a checklist",
    text: "Days are shaped around walking, tea, camp life, conversation and the pace of the caravan.",
    icon: Flame
  },
  {
    title: "Comfort handled simply",
    text: "Meals, water, camps, camel logistics and 4x4 support are organized so you can be fully present.",
    icon: Tent
  }
];

const galleryPreview = [
  galleryImages.find((image) => image.image.includes("desert-camp-at-sunset"))!,
  galleryImages.find((image) => image.image.includes("camel-guide-on-golden-dune"))!,
  galleryImages.find((image) => image.image.includes("group-at-desert-oasis"))!,
  galleryImages.find((image) => image.image.includes("view-from-desert-tent-with-camels"))!
];

const previewTeam = teamMembers.slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[96svh] items-end overflow-hidden bg-charcoal px-4 pb-10 pt-36 text-cream sm:px-6 sm:pb-14 lg:px-8">
        <Image
          src="/assets/images/hero/hero-golden-sahara-dunes.jpg"
          alt="Golden Moroccan Sahara dunes near M’Hamid El Ghizlane, Morocco."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/58 to-charcoal/10" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.55fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase text-dune">M&rsquo;Hamid El Ghizlane, Morocco</p>
            <h1 className="mt-5 max-w-5xl font-serif text-4xl leading-[1.05] text-balance sm:text-7xl lg:text-8xl">
              A Journey into the Heart of the Moroccan Sahara
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/82 sm:text-xl">
              Experience the Real Sahara with camel caravans, remote dunes, eco camps, tea by the fire
              and the hospitality of local nomads.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-cream px-5 py-3 text-sm font-semibold text-charcoal transition hover:bg-dune"
              >
                Explore Our Tours
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <WhatsAppButton label="Contact Us on WhatsApp" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded border border-cream/20 bg-charcoal/55 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase text-dune">Authentic desert journeys</p>
              <p className="mt-4 text-base leading-7 text-cream/78">
                Sahara Caravan welcomes travelers as guests into a living desert culture: walking, silence,
                stories, food, camels, stars and the human warmth of M&rsquo;Hamid.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded shadow-image sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/assets/images/gallery/mhamid-sahara-gallery-heif-01.jpg"
                alt="Travelers and Sahara guides smiling with camels."
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading kicker="The invitation" title="The Sahara is not scenery here. It is a way of being welcomed.">
              <p>
                From M&rsquo;Hamid El Ghizlane, the road gives way to palm groves, stony plains and golden
                dunes. The journey becomes slower, warmer and more human with every cup of tea, every step
                beside the camels, and every evening under the stars.
              </p>
            </SectionHeading>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {introStats.map((item) => (
                <div key={item.label} className="rounded border border-brown/10 bg-linen p-4">
                  <p className="text-xs font-semibold uppercase text-brown">{item.label}</p>
                  <p className="mt-2 font-serif text-3xl text-charcoal">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div className="content-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading kicker="Tours" title="Choose your rhythm: trek, safari, or retreat.">
                <p>
                  Walk with a camel caravan, explore farther by 4x4, or slow down through yoga and breathwork
                  in the dunes.
                </p>
              </SectionHeading>
            </Reveal>
            <Link
              href="/experiences"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date"
            >
              View all tours
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {desertExperiences.map((experience, index) => (
              <Reveal key={experience.slug} delay={Math.min(index * 0.04, 0.16)}>
                <Link href={`/experiences/${experience.slug}`} className="group block h-full overflow-hidden rounded bg-cream shadow-soft">
                  <span className="relative block aspect-[4/5] overflow-hidden">
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
                  </span>
                  <span className="block p-5">
                    <span className="block text-xs font-semibold uppercase text-dune">
                      {experience.eyebrow} / {experience.duration}
                    </span>
                    <span className="mt-3 block font-serif text-2xl leading-tight text-charcoal">{experience.title}</span>
                    <span className="mt-4 block text-sm leading-7 text-smoke">{experience.description}</span>
                    {experience.customizationNote ? (
                      <span className="mt-3 block text-sm font-semibold leading-6 text-brown">{experience.customizationNote}</span>
                    ) : null}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brown">
                      Explore this journey
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SaharaInMotionShowcase
        videos={saharaInMotionVideos.slice(0, 3)}
        ctaHref="/sahara-in-motion"
        ctaLabel="View Sahara in Motion"
      />

      <section className="section-pad bg-charcoal text-cream">
        <div className="content-shell grid gap-5 md:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded border border-cream/10 bg-cream/8 p-6">
                  <Icon className="h-8 w-8 text-dune" aria-hidden="true" />
                  <h2 className="mt-5 font-serif text-3xl leading-tight">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-cream/70">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">Human connection</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
              Tea, stories and local hospitality are part of the route.
            </h2>
            <p className="mt-6 text-lg leading-8 text-smoke">
              The Sahara opens through people: camel guides preparing the caravan, cooks tending the fire,
              drivers reading tracks, and elders sharing the quiet knowledge of desert life.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Nomadic culture", icon: Users },
                { label: "Eco camps", icon: Tent },
                { label: "Local care", icon: HandHeart }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded border border-brown/10 bg-linen p-4">
                    <Icon className="h-5 w-5 text-dune" aria-hidden="true" />
                    <span className="text-sm font-semibold text-charcoal">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded shadow-image">
              <Image
                src="/assets/images/gallery/blue-nomad-leading-loaded-camel.jpg"
                alt="A blue-robed nomad leading a loaded camel through the Sahara."
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div className="content-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading kicker="Gallery" title="Authentic moments captured across the Sahara.">
                <p>Faces, camps, caravans, dunes and small details from real journeys with Sahara Caravan.</p>
              </SectionHeading>
            </Reveal>
            <Link
              href="/gallery"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date"
            >
              Open gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPreview.map((image, index) => (
              <Reveal key={image.image} delay={index * 0.05} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden rounded shadow-image lg:h-full">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="text-xs font-semibold uppercase text-dune">The people</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
                Meet the team that carries the journey with care.
              </h2>
            </Reveal>
            <Link
              href="/team"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {previewTeam.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <Link href="/team" className="group block overflow-hidden rounded bg-linen shadow-soft">
                  <span className="relative block aspect-[4/5]">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="block p-4">
                    <span className="block font-serif text-2xl text-charcoal">{member.name}</span>
                    <span className="mt-1 block text-sm text-smoke">{member.role}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-linen">
        <div className="content-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading kicker="What to bring" title="Pack lightly, practically and comfortably.">
              <p>
                Prepare for sun, sand, walking, cooler evenings and simple camp life. The team handles the
                route and logistics; you bring what keeps you comfortable.
              </p>
            </SectionHeading>
            <Link
              href="/what-to-bring"
              className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date"
            >
              See the packing list
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {bringItems.slice(0, 8).map((item) => (
                <div key={item} className="rounded border border-brown/15 bg-cream px-4 py-3 text-sm font-semibold text-charcoal">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal px-4 py-24 text-cream sm:px-6 lg:px-8">
        <Image
          src="/assets/images/gallery/soft-sunset-over-distant-dunes.jpg"
          alt="Soft sunset light over distant Sahara dunes."
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <MapPin className="mx-auto h-9 w-9 text-dune" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Start with a simple message.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/80">
            Tell us your dates, group size and preferred rhythm. Sahara Caravan will help shape the right
            route from M&rsquo;Hamid El Ghizlane or Marrakech.
          </p>
          <div className="mt-9">
            <WhatsAppButton label="Plan your Sahara journey" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
