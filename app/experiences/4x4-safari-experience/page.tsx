import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "4x4 Safari Experience | Sahara Caravan"
  },
  description: "Continue to the 4x4 Safari Experience with Sahara Caravan.",
  alternates: {
    canonical: "/experiences/4x4-safari-expedition"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function SafariExperienceAliasPage() {
  return (
    <section className="section-pad bg-cream pt-32 sm:pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/experiences/4x4-safari-expedition/');"
        }}
      />
      <div className="content-shell max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase text-dune">4x4 Safari</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
          Continue to 4x4 Safari Experience
        </h1>
        <p className="mt-5 text-base leading-8 text-smoke">
          The 4x4 Safari Experience page is ready for you.
        </p>
        <Link
          href="/experiences/4x4-safari-expedition"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
        >
          Open 4x4 Safari Experience
        </Link>
      </div>
    </section>
  );
}
