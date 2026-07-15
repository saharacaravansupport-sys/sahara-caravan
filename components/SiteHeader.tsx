"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/experiences" && pathname === "/tours") return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dune/25 bg-[linear-gradient(180deg,#211812_0%,#17110d_100%)] pt-[env(safe-area-inset-top)] text-cream shadow-[0_14px_40px_rgba(0,0,0,0.24)]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:min-h-24 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-14 min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative block h-16 w-16 shrink-0 sm:h-20 sm:w-20">
            <Image src="/assets/brand/sahara-caravan-logo-header.png" alt="Sahara Caravan" fill sizes="80px" className="object-contain" priority />
          </span>
          <span className="hidden sm:block">
            <span className="block font-serif text-xl leading-none text-cream">{siteConfig.name}</span>
            <span className="mt-1 block text-[11px] uppercase text-cream/60">M&rsquo;HAMID EL GHIZLANE, MOROCCO</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune ${
                isActive(item.href)
                  ? "bg-dune text-charcoal"
                  : "text-cream/82 hover:bg-cream/10 hover:text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded bg-cream text-charcoal transition hover:bg-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
            aria-label={`Contact ${siteConfig.name} on WhatsApp`}
            title="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded border border-cream/20 text-cream transition hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[calc(72px+env(safe-area-inset-top))] z-40 max-h-[calc(100svh-72px-env(safe-area-inset-top))] overflow-y-auto border-t border-cream/10 bg-[#17110d] shadow-2xl sm:top-[calc(96px+env(safe-area-inset-top))] sm:max-h-[calc(100svh-96px-env(safe-area-inset-top))] xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <nav aria-label="Mobile navigation" className="grid gap-1 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`min-h-11 rounded px-3 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune ${
                  isActive(item.href)
                    ? "bg-dune text-charcoal"
                    : "text-cream/86 hover:bg-cream/10 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-cream/10 pt-4">
            <p className="px-3 text-xs font-semibold uppercase text-dune">Contact</p>
            <div className="mt-2 grid gap-1 sm:grid-cols-2">
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex min-h-11 min-w-0 items-center gap-3 rounded px-3 py-2 text-sm text-cream/82 transition hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
                aria-label={`Contact ${siteConfig.name} on WhatsApp at ${siteConfig.whatsappLabel}`}
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-dune" aria-hidden="true" />
                <span className="min-w-0 break-words">{siteConfig.whatsappLabel}</span>
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                onClick={() => setOpen(false)}
                className="flex min-h-11 min-w-0 items-center gap-3 rounded px-3 py-2 text-sm text-cream/82 transition hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
                aria-label={`Email ${siteConfig.name} at ${siteConfig.email}`}
              >
                <Mail className="h-4 w-4 shrink-0 text-dune" aria-hidden="true" />
                <span className="min-w-0 break-all">{siteConfig.email}</span>
              </Link>
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex min-h-11 min-w-0 items-center gap-3 rounded px-3 py-2 text-sm text-cream/82 transition hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
                aria-label={`Open ${siteConfig.name} on Instagram`}
              >
                <Instagram className="h-4 w-4 shrink-0 text-dune" aria-hidden="true" />
                <span className="min-w-0 break-words">{siteConfig.instagramHandle}</span>
              </Link>
              <Link
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex min-h-11 min-w-0 items-center gap-3 rounded px-3 py-2 text-sm text-cream/82 transition hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
                aria-label="View Sahara Caravan location in M’Hamid El Ghizlane, Morocco on Google Maps"
              >
                <MapPin className="h-4 w-4 shrink-0 text-dune" aria-hidden="true" />
                <span className="min-w-0 break-words">{siteConfig.location}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
