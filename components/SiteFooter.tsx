import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function SiteFooter() {
  const contactLinkClass =
    "inline-flex min-w-0 items-start gap-3 rounded py-1.5 text-sm text-cream/70 transition hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune";
  const contactIconClass = "mt-0.5 h-4 w-4 shrink-0 text-dune";

  return (
    <footer className="bg-[linear-gradient(180deg,#1f1a17_0%,#17110d_100%)] text-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr] lg:gap-10 lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-28 sm:w-28">
              <Image src="/assets/brand/sahara-caravan-logo.png" alt="Sahara Caravan" fill sizes="112px" className="object-contain" />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-2xl leading-none sm:text-3xl">{siteConfig.name}</p>
              <p className="mt-2 text-xs uppercase leading-5 text-cream/55">{siteConfig.location}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-cream/70">
            Sahara Caravan - Authentic desert journeys from M&rsquo;Hamid El Ghizlane, Morocco.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-dune">Explore</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-8 rounded py-1 text-sm text-cream/70 transition hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-dune">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-cream/70">
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClass}
              aria-label={`Contact Sahara Caravan on WhatsApp at ${siteConfig.whatsappLabel}`}
            >
              <MessageCircle className={contactIconClass} aria-hidden="true" />
              <span className="min-w-0 break-words">{siteConfig.whatsappLabel}</span>
            </Link>
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClass}
              aria-label="Open Sahara Caravan on Instagram"
            >
              <Instagram className={contactIconClass} aria-hidden="true" />
              <span className="min-w-0 break-words">{siteConfig.instagramHandle}</span>
            </Link>
            <Link
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Sahara Caravan location in M’Hamid El Ghizlane, Morocco on Google Maps"
              className={contactLinkClass}
            >
              <MapPin className={contactIconClass} aria-hidden="true" />
              <span className="min-w-0 break-words">{siteConfig.location}</span>
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className={contactLinkClass}
              aria-label={`Email Sahara Caravan at ${siteConfig.email}`}
            >
              <Mail className={contactIconClass} aria-hidden="true" />
              <span className="min-w-0 break-all">{siteConfig.email}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 text-center text-xs text-cream/50">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
