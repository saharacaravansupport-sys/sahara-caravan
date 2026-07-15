"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { VideoAsset } from "@/data/site";

type SaharaInMotionShowcaseProps = {
  videos: VideoAsset[];
  kicker?: string;
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  headingLevel?: "h1" | "h2";
  pageIntro?: boolean;
};

export function SaharaInMotionShowcase({
  videos,
  kicker = "Short Desert Films",
  title = "Sahara in Motion",
  description = "Short films from the heart of the desert.",
  ctaHref,
  ctaLabel = "View Sahara in Motion",
  headingLevel = "h2",
  pageIntro = false
}: SaharaInMotionShowcaseProps) {
  const [active, setActive] = useState<VideoAsset | null>(null);
  const HeadingTag = headingLevel;

  useEffect(() => {
    document.body.classList.toggle("media-modal-open", Boolean(active));
    return () => document.body.classList.remove("media-modal-open");
  }, [active]);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  if (videos.length === 0) return null;

  return (
    <section id="sahara-in-motion" className={`section-pad bg-charcoal text-cream ${pageIntro ? "pt-32 sm:pt-36" : ""}`}>
      <div className="content-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-dune">{kicker}</p>
            <HeadingTag className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-6xl">
              {title}
            </HeadingTag>
            <p className="mt-5 text-lg leading-8 text-cream/75">{description}</p>
          </div>
          {ctaHref ? (
            <Link
              href={ctaHref}
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded bg-cream px-5 py-3 text-sm font-semibold text-charcoal transition hover:bg-dune"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={video.src} video={video} priority={index < 2} onPlay={() => setActive(video)} />
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-charcoal/95 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-[calc(4.5rem+env(safe-area-inset-top))] text-cream sm:p-6 sm:pt-[calc(5rem+env(safe-area-inset-top))]"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} video player`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActive(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="fixed right-4 top-[calc(1rem+env(safe-area-inset-top))] inline-flex h-11 w-11 items-center justify-center rounded bg-cream text-charcoal transition hover:bg-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
            aria-label="Close video"
            title="Close"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className={`w-full ${active.orientation === "vertical" ? "max-w-sm" : "max-w-5xl"}`}>
            <video
              key={active.src}
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className={`max-h-[70svh] w-full rounded bg-black object-contain sm:max-h-[78svh] ${
                active.orientation === "vertical" ? "aspect-[9/16]" : "aspect-video"
              }`}
            />
            <p className="mt-4 font-serif text-2xl leading-tight sm:text-3xl">{active.title}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-cream/70">{active.description}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function VideoCard({
  video,
  priority,
  onPlay
}: {
  video: VideoAsset;
  priority: boolean;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group h-full overflow-hidden rounded bg-cream/8 text-left shadow-image transition hover:-translate-y-1 hover:bg-cream/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
      aria-label={`Play ${video.title}`}
    >
      <span className={`relative block bg-black ${video.orientation === "vertical" ? "aspect-[9/16]" : "aspect-video"}`}>
        {video.poster ? (
          <Image
            src={video.poster}
            alt={`${video.title} poster`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={priority}
            className="object-cover"
          />
        ) : null}
        <span className="absolute inset-0 grid place-items-center bg-charcoal/22 transition group-hover:bg-charcoal/10">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream text-charcoal transition group-hover:bg-dune">
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </span>
        </span>
      </span>
      <span className="block p-5">
        <span className="block font-serif text-2xl text-cream">{video.title}</span>
        <span className="mt-2 block text-sm leading-7 text-cream/65">{video.description}</span>
      </span>
    </button>
  );
}
