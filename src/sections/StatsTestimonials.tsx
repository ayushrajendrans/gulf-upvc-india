import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { testimonials } from "../data/site";

const stats = [
  { value: 150, suffix: "+", label: "Happy Customers" },
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let frame = 0;
      const total = 60;
      const animate = () => {
        frame += 1;
        setCount(Math.round((value * frame) / total));
        if (frame < total) requestAnimationFrame(animate);
      };
      animate();
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsTestimonials() {
  return (
    <section id="testimonials" className="surface-glass">
      <div className="border-y border-gold/20 bg-[#0b0d0f]/80 px-4 py-16 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-gold/25 bg-gold/25 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-panel p-8 text-center">
              <p className="font-display text-6xl text-gold">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-bone/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Testimonials" title="Finished with care." copy="What homeowners and commercial clients value about our products, installation coordination and finishing." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="premium-panel border border-gold/25 p-7">
                <p className="font-display text-5xl text-gold">“</p>
                <p className="text-base leading-8 text-bone/85">{item.quote}</p>
                <footer className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-gold">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
