import { ArrowDown, MessageCircle } from "lucide-react";
import { architecturalImages, values, whatsappUrl } from "../data/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink pt-28">
      <div className="absolute inset-0">
        <img src={architecturalImages.hero} alt="Luxury contemporary home with large glass doors and windows" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      </div>
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center px-4 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.34em] text-gold">Premium architectural solutions</p>
          <h1 className="font-display text-6xl font-semibold leading-[0.86] text-bone sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="text-gold">Complete Solutions</span>
            <span className="block">For Your Dream Spaces</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-bone/82 sm:text-xl">
            One-stop premium architectural solutions for homes, offices and commercial spaces.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:bg-gold-light">
              Explore Solutions
            </a>
            <a href={whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-sm border border-bone/25 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-bone transition hover:border-gold hover:text-gold">
              <MessageCircle size={18} />
              Get a Quote
            </a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-4 hidden items-center gap-3 text-sm uppercase tracking-[0.28em] text-bone/60 sm:left-6 md:flex lg:left-8">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold">
            <ArrowDown size={18} />
          </span>
          Scroll
        </a>
      </div>
      <div className="relative mx-auto -mt-20 grid w-[calc(100%-2rem)] max-w-7xl gap-px overflow-hidden rounded-sm border border-gold/25 bg-gold/25 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ title, copy, icon: Icon }) => (
          <div key={title} className="bg-ink/90 p-6 backdrop-blur">
            <Icon className="mb-5 text-gold" size={28} />
            <h2 className="text-lg font-bold text-bone">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-mist">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
