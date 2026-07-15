import type { Metadata } from "next";
import {
  Backpack,
  Bandage,
  Bed,
  Check,
  Droplets,
  Flame,
  Flashlight,
  Footprints,
  Glasses,
  Pill,
  Shield,
  Shirt,
  Sun
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { bringItems } from "@/data/site";

export const metadata: Metadata = {
  title: "What to Bring",
  description:
    "A simple Sahara Caravan packing checklist for the desert: light, practical and prepared for sun, sand, walking and nights under the stars."
};

const icons = [
  Flashlight,
  Check,
  Flame,
  Shield,
  Glasses,
  Sun,
  Backpack,
  Footprints,
  Footprints,
  Shirt,
  Shirt,
  Bed,
  Pill,
  Pill,
  Pill,
  Droplets,
  Bandage
];

export default function WhatToBringPage() {
  return (
    <>
      <section className="section-pad bg-charcoal pt-36 text-cream">
        <div className="content-shell max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase text-dune">Before you go</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-7xl">
              What to Bring Into the Desert
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/75">
              Light, practical essentials for walking, sun, sand, camp nights and personal comfort.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="content-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bringItems.map((item, index) => {
              const Icon = icons[index] ?? Check;
              return (
                <Reveal key={item} delay={(index % 6) * 0.04}>
                  <div className="flex min-h-24 items-start gap-4 rounded border border-brown/10 bg-linen p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded bg-charcoal text-dune">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="pt-2 text-base font-semibold leading-7 text-charcoal">{item}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 max-w-3xl rounded border border-brown/10 bg-linen p-5 text-sm leading-7 text-smoke">
            Bring any medication you personally require and consult a healthcare professional for individual travel advice.
          </p>
        </div>
      </section>
    </>
  );
}
