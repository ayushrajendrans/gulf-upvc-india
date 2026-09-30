import { SectionHeading } from "../components/SectionHeading";
import { performanceBenefits } from "../data/site";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0d0d0c] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Why Gulf uPVC"
            title="Built for comfort. Designed for performance."
            copy="Modern architectural systems should make everyday spaces quieter, easier to maintain and more visually refined."
          />
          <div className="grid gap-px overflow-hidden border border-gold/25 bg-gold/25 sm:grid-cols-2">
            {performanceBenefits.map(({ title, copy, icon: Icon }, index) => (
              <div key={title} className="bg-charcoal p-6">
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <Icon className="text-gold" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-bone">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
