import { contact, navItems, products } from "../data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-black px-4 pb-24 pt-16 sm:px-6 md:pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-gold/20 pt-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-md leading-8 text-mist">
            Premium Black &amp; Gold Architectural Brand. Doors, windows, glass and architectural solutions for modern residential and commercial spaces.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Quick links</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-mist transition hover:text-gold">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Products</h3>
          <div className="mt-5 grid gap-3">
            {products.map((product) => (
              <a key={product.title} href="#products" className="text-mist transition hover:text-gold">{product.title}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-bone/10 pt-6 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <p>© 2026 Gulf uPVC & Allied Industries. All Rights Reserved.</p>
        <p>{contact.displayPhone} · {contact.email}</p>
      </div>
    </footer>
  );
}
