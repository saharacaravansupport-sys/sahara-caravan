import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ kicker, title, children, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker ? <p className="text-xs font-semibold uppercase text-dune">{kicker}</p> : null}
      <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-base leading-8 text-smoke sm:text-lg">{children}</div> : null}
    </div>
  );
}
