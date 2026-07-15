"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { galleryCategories, type GalleryImage } from "@/data/site";

type GalleryGridProps = {
  images: GalleryImage[];
};

const INITIAL_VISIBLE_IMAGES = 24;
const GALLERY_BATCH_SIZE = 12;

export function GalleryGrid({ images }: GalleryGridProps) {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);

  const filteredImages = useMemo(() => {
    if (category === "All") return images;
    return images.filter((image) => image.categories.includes(category));
  }, [category, images]);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const active = activeIndex === null ? null : displayedImages[activeIndex];

  const step = useCallback(
    (direction: -1 | 1) => {
      if (activeIndex === null) return;
      setActiveIndex((activeIndex + direction + displayedImages.length) % displayedImages.length);
    },
    [activeIndex, displayedImages.length]
  );

  useEffect(() => {
    document.body.classList.toggle("media-modal-open", Boolean(active));
    return () => document.body.classList.remove("media-modal-open");
  }, [active]);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, step]);

  return (
    <>
      <div role="presentation">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
          {galleryCategories.map((item) => {
            const selected = item === category;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setCategory(item);
                  setActiveIndex(null);
                  setVisibleCount(INITIAL_VISIBLE_IMAGES);
                }}
                className={`min-h-11 shrink-0 rounded border px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "border-charcoal bg-charcoal text-cream"
                    : "border-brown/20 bg-cream text-charcoal hover:border-dune hover:bg-linen"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {displayedImages.map((image, index) => (
          <button
            key={image.image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded bg-charcoal text-left shadow-image"
          >
            <span
              className={`relative block w-full ${
                image.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image.image}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                <span className="block font-serif text-xl text-cream">{image.title}</span>
                <span className="mt-1 block text-xs uppercase text-cream/70">{image.categories.join(" / ")}</span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {displayedImages.length < filteredImages.length ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => Math.min(count + GALLERY_BATCH_SIZE, filteredImages.length))}
            className="inline-flex min-h-12 items-center justify-center rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date"
          >
            Load More
          </button>
        </div>
      ) : null}

      {active ? (
        <div
          className="fixed inset-0 z-[80] overflow-y-auto bg-charcoal/95 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-[calc(4.5rem+env(safe-area-inset-top))] text-cream backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="fixed right-4 top-[calc(1rem+env(safe-area-inset-top))] z-10 inline-flex h-11 w-11 items-center justify-center rounded bg-cream text-charcoal transition hover:bg-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
            aria-label="Close image"
            title="Close"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded bg-cream text-charcoal transition hover:bg-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune sm:inline-flex"
            aria-label="Previous image"
            title="Previous"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded bg-cream text-charcoal transition hover:bg-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune sm:inline-flex"
            aria-label="Next image"
            title="Next"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col items-center justify-center gap-5 sm:min-h-full">
            <div className="relative h-[62svh] w-full sm:h-[76vh]">
              <Image src={active.image} alt={active.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="w-full max-w-3xl text-center">
              <p className="font-serif text-2xl leading-tight sm:text-3xl">{active.title}</p>
              <p className="mt-2 text-sm uppercase text-cream/60">{active.categories.join(" / ")}</p>
              <div className="mt-4 flex justify-center gap-3 sm:hidden">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded bg-cream text-charcoal transition hover:bg-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
                  aria-label="Previous image"
                  title="Previous"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded bg-cream text-charcoal transition hover:bg-dune focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
                  aria-label="Next image"
                  title="Next"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
