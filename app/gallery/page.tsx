import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { galleryImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Authentic moments captured across the Sahara with Sahara Caravan: dunes, camels, camps, nomadic life and desert light."
};

export default function GalleryPage() {
  return (
    <>
      <section className="section-pad bg-charcoal pt-36 text-cream">
        <div className="content-shell max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">Gallery</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-7xl">
              Dunes, Camels, Nomad Life, People and Sunset
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/75">
              Authentic moments captured across the Sahara.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
