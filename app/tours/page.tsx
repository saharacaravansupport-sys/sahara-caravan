import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Tours | Sahara Caravan"
  },
  description: "Sahara Caravan tours are available on the main Tours page.",
  alternates: {
    canonical: "/experiences"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function ToursAliasPage() {
  return (
    <section className="section-pad bg-cream pt-32 sm:pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/experiences/');"
        }}
      />
      <div className="content-shell max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase text-dune">Tours</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
          Continue to Sahara Caravan Tours
        </h1>
        <p className="mt-5 text-base leading-8 text-smoke">
          The Tours page is ready for you.
        </p>
        <Link
          href="/experiences"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-date focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune"
        >
          Open Tours
        </Link>
      </div>
    </section>
  );
}
