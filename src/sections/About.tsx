import { architecturalImages } from "../data/site";
import { SectionHeading } from "../components/SectionHeading";

const benefits = ["Energy Efficient", "Low Maintenance", "Noise Reduction", "Long Lasting"];

export function About() {
  return (
    <section id="about" className="bg-ink px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <img src={architecturalImages.about} alt="Premium residential architecture with expansive glazing" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-6 -right-3 border border-gold/40 bg-black/82 p-6 shadow-premium backdrop-blur sm:-right-6">
            <p className="font-display text-5xl text-gold">10+</p>
            <p className="text-sm uppercase tracking-[0.22em] text-bone/80">Years Experience</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="About Gulf uPVC"
            title="Architectural systems for refined modern spaces."
            copy="Gulf uPVC & Allied Industries specializes in premium uPVC windows, doors, glass works, partitions, aluminium sliding systems and exterior cladding solutions for residential and commercial projects."
          />
          <p className="mt-6 text-base leading-8 text-mist">
            Our solutions bring together durability, energy efficiency, weather resistance, thermal comfort, noise reduction and modern aesthetics. Every opening, partition and elevation is approached as part of the architecture, with clean detailing and practical long-term performance in mind.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {benefits.map((item) => (
              <div key={item} className="border border-gold/25 bg-charcoal p-4 text-center text-sm font-bold text-bone">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
