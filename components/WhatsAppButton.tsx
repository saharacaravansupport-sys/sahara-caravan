import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

type WhatsAppButtonProps = {
  label?: string;
  variant?: "gold" | "light" | "dark";
  className?: string;
};

const variants = {
  gold: "bg-dune text-charcoal hover:bg-[#D99B4E]",
  light: "bg-cream text-charcoal hover:bg-linen",
  dark: "bg-charcoal text-cream hover:bg-date"
};

export function WhatsAppButton({
  label = "Contact on WhatsApp",
  variant = "gold",
  className = ""
}: WhatsAppButtonProps) {
  return (
    <Link
      href={siteConfig.whatsappUrl}
      className={`inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded px-5 py-3 text-center text-sm font-semibold leading-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dune ${variants[variant]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} at ${siteConfig.whatsappLabel}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span className="min-w-0">{label}</span>
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
