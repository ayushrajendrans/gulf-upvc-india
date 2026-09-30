export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Gulf uPVC home">
      <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/50 bg-bone shadow-gold">
        <span className="font-display text-3xl font-semibold leading-none text-[#b92525]">G</span>
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="text-base font-extrabold tracking-[0.08em] text-bone">Gulf uPVC</p>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-mist">and Allied Industries</p>
        </div>
      )}
    </a>
  );
}
