import { useState } from "react";
import { Modal } from "../components/Modal";
import { SectionHeading } from "../components/SectionHeading";
import { products, type Product, whatsappUrl } from "../data/site";

export function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="products" className="bg-[#0d0d0c] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured solutions"
          title="Our expertise"
          copy="Architectural solutions designed for modern spaces, from precision uPVC systems to glass facades and ACP cladding."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {products.map((product, index) => (
            <article
              key={product.title}
              className={`group overflow-hidden border border-gold/20 bg-charcoal shadow-gold transition duration-300 hover:-translate-y-1 hover:border-gold/70 ${
                product.feature ? "lg:col-span-3" : "lg:col-span-2"
              } ${index === 2 ? "lg:row-span-2" : ""}`}
            >
              <div className={product.feature ? "aspect-[1.35]" : "aspect-[1.25]"}>
                <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <product.icon className="mb-5 text-gold" size={28} />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">{product.eyebrow}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-none text-bone">{product.title}</h3>
                <p className="mt-4 text-sm leading-7 text-mist">{product.description}</p>
                <button onClick={() => setSelected(product)} className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-gold underline-offset-8 transition hover:underline">
                  More Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <div className="grid lg:grid-cols-2">
            <img src={selected.image} alt={selected.title} className="h-full min-h-[320px] w-full object-cover" />
            <div className="p-7 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">{selected.eyebrow}</p>
              <h3 className="mt-4 font-display text-5xl font-semibold leading-none text-bone">{selected.title}</h3>
              <p className="mt-6 leading-8 text-mist">{selected.description}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-bone">Key benefits</h4>
                  <ul className="mt-4 space-y-3 text-sm text-mist">
                    {selected.benefits.map((item) => (
                      <li key={item} className="border-l border-gold/50 pl-3">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-bone">Applications</h4>
                  <ul className="mt-4 space-y-3 text-sm text-mist">
                    {selected.applications.map((item) => (
                      <li key={item} className="border-l border-gold/50 pl-3">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} className="rounded-sm bg-gold px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-black">
                  Request a Quote
                </a>
                <a href={whatsappUrl} className="rounded-sm border border-bone/20 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-bone hover:border-gold hover:text-gold">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
