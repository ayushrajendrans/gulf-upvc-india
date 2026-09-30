import { architecturalImages, whatsappUrl } from "../data/site";

export function SlidingFeature() {
  return (
    <section className="bg-ink px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="overflow-hidden border border-gold/25">
          <img src={architecturalImages.sliding} alt="Ultra-slim aluminium sliding glass system opening to a modern exterior" className="aspect-[1.35] w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.34em] text-gold">Ultra-slim</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.9] text-bone sm:text-6xl">
            Aluminium Sliding Systems
          </h2>
          <p className="mt-6 font-display text-4xl leading-none text-gold">
            Maximum Glass.
            <br />
            Minimal Frame.
            <br />
            Infinite Views.
          </p>
          <p className="mt-6 leading-8 text-mist">
            Say goodbye to bulky frames. Our ultra-slim interlocks maximize natural sunlight and offer uninterrupted panoramic views with sleek, high-performance engineering.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="rounded-sm border border-gold/60 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-black">
              Explore Sliding Systems
            </a>
            <a href={whatsappUrl} className="rounded-sm bg-bone px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-black">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
