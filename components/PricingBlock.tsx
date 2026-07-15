import { MessageCircle } from "lucide-react";
import { tripPricing, tripPricingNote } from "@/data/site";
import { WhatsAppButton } from "./WhatsAppButton";

type PricingBlockProps = {
  compact?: boolean;
  className?: string;
};

export function PricingBlock({ compact = false, className = "" }: PricingBlockProps) {
  return (
    <div className={`rounded border border-brown/10 bg-linen p-5 sm:p-7 ${className}`}>
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded bg-charcoal text-dune">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase text-dune">Trip pricing</p>
          <h2 className={`mt-2 font-serif leading-tight text-charcoal ${compact ? "text-3xl" : "text-4xl sm:text-5xl"}`}>
            Clear daily rates by group size.
          </h2>
        </div>
      </div>

      <div className={`mt-6 grid gap-3 ${compact ? "" : "md:grid-cols-3"}`}>
        {tripPricing.map((item) => (
          <div key={item.label} className="min-w-0 rounded bg-cream p-4 shadow-sm">
            <p className="text-sm font-semibold text-smoke">{item.label}</p>
            <p className="mt-2 break-words font-serif text-4xl text-charcoal">{item.price}</p>
            <p className="mt-1 text-sm text-brown">{item.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-7 text-smoke">{tripPricingNote}</p>
      <div className="mt-5">
        <WhatsAppButton label="Confirm pricing on WhatsApp" />
      </div>
    </div>
  );
}
