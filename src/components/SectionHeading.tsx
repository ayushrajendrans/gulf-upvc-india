type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-semibold leading-[0.95] text-bone sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-8 text-mist sm:text-lg">{copy}</p>}
    </div>
  );
}
