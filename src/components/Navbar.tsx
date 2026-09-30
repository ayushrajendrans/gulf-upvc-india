import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, navItems } from "../data/site";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-gold/20 bg-ink/88 py-3 shadow-premium backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-semibold uppercase tracking-[0.16em] text-bone/80 transition hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${contact.phone}`}
          className="hidden items-center gap-2 rounded-sm border border-gold/60 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-black lg:flex"
        >
          <Phone size={16} />
          Call Now
        </a>
        <button
          className="grid h-11 w-11 place-items-center rounded-sm border border-bone/20 text-bone lg:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between border-b border-gold/20 p-4">
            <Logo />
            <button className="grid h-11 w-11 place-items-center rounded-sm border border-bone/20 text-bone" aria-label="Close menu" onClick={close}>
              <X />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={close} className="border-b border-bone/10 py-5 font-display text-3xl text-bone">
                {label}
              </a>
            ))}
            <a href={`tel:${contact.phone}`} className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-4 font-bold uppercase tracking-[0.18em] text-black">
              <Phone size={18} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
