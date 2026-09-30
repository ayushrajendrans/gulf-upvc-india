import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  title: string;
};

export function Modal({ children, onClose, title }: ModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={title}>
      <button className="absolute inset-0 cursor-default" aria-label="Close modal" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-sm border border-gold/35 bg-charcoal shadow-premium">
        <button
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-sm border border-bone/15 bg-black/70 text-bone transition hover:border-gold hover:text-gold"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
