import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-pad min-h-[70vh] bg-cream pt-36">
      <div className="content-shell max-w-2xl text-center">
        <Compass className="mx-auto h-10 w-10 text-dune" aria-hidden="true" />
        <h1 className="mt-6 font-serif text-5xl text-charcoal">The trail fades here.</h1>
        <p className="mt-5 leading-8 text-smoke">This page does not exist, but the desert is still close.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
