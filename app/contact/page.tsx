import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sahara Caravan directly on WhatsApp, Instagram or email for a simple human conversation."
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden bg-charcoal px-4 pb-14 pt-36 text-cream sm:px-6 lg:px-8">
        <Image
          src="/assets/images/safari/safari-camel-caravan-wide-desert.jpg"
          alt="Camel caravan moving through the Sahara near M’Hamid El Ghizlane, Morocco."
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
        <div className="relative z-10 mx-auto flex min-h-[64svh] w-full max-w-7xl items-end">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase text-dune">Contact</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-7xl">
              Speak with us on WhatsApp
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/75">
              A direct line to the Sahara Caravan team in M&rsquo;Hamid El Ghizlane, Morocco.
            </p>
            <div className="mt-9">
              <WhatsAppButton label="Speak with us on WhatsApp" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Reveal>
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-48 flex-col justify-between rounded bg-charcoal p-7 text-cream transition hover:bg-date focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
              aria-label={`Contact Sahara Caravan on WhatsApp at ${siteConfig.whatsappLabel}`}
            >
              <MessageCircle className="h-8 w-8 text-dune" aria-hidden="true" />
              <span>
                <span className="block text-sm uppercase text-cream/60">WhatsApp</span>
                <span className="mt-2 block font-serif text-3xl">{siteConfig.whatsappLabel}</span>
              </span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-48 flex-col justify-between rounded border border-brown/10 bg-linen p-7 text-charcoal transition hover:border-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
              aria-label="Open Sahara Caravan on Instagram"
            >
              <Instagram className="h-8 w-8 text-dune" aria-hidden="true" />
              <span>
                <span className="block text-sm uppercase text-smoke">Instagram</span>
                <span className="mt-2 block font-serif text-3xl">{siteConfig.instagramHandle}</span>
              </span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Sahara Caravan location in M’Hamid El Ghizlane, Morocco on Google Maps"
              className="flex h-full min-h-48 flex-col justify-between rounded border border-brown/10 bg-linen p-7 text-charcoal transition hover:border-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
            >
              <MapPin className="h-8 w-8 text-dune" aria-hidden="true" />
              <span>
                <span className="block text-sm uppercase text-smoke">Location</span>
                <span className="mt-2 block font-serif text-2xl leading-tight sm:text-3xl">{siteConfig.location}</span>
              </span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex h-full min-h-48 flex-col justify-between rounded border border-brown/10 bg-linen p-7 text-charcoal transition hover:border-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
              aria-label={`Email Sahara Caravan at ${siteConfig.email}`}
            >
              <Mail className="h-8 w-8 text-dune" aria-hidden="true" />
              <span>
                <span className="block text-sm uppercase text-smoke">Email</span>
                <span className="mt-2 block break-all font-serif text-xl sm:text-2xl">{siteConfig.email}</span>
              </span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
