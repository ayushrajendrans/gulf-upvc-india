import { MessageCircle, Phone } from "lucide-react";
import { contact, whatsappUrl } from "../data/site";

export function FloatingContactButtons() {
  return (
    <>
      <div className="fixed bottom-7 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a className="grid h-13 w-13 place-items-center rounded-full border border-gold/50 bg-gold text-black shadow-gold transition hover:-translate-y-1" href={whatsappUrl} aria-label="Chat on WhatsApp">
          <MessageCircle />
        </a>
        <a className="grid h-13 w-13 place-items-center rounded-full border border-bone/20 bg-black/70 text-bone backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:text-gold" href={`tel:${contact.phone}`} aria-label="Call Gulf uPVC">
          <Phone />
        </a>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/30 bg-ink/95 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-premium backdrop-blur md:hidden">
        <a className="flex items-center justify-center gap-2 bg-gold px-4 py-4" href={`tel:${contact.phone}`}>
          <Phone size={18} />
          Call
        </a>
        <a className="flex items-center justify-center gap-2 bg-bone px-4 py-4" href={whatsappUrl}>
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
