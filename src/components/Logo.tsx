export function Logo({ compact = false }: { compact?: boolean }) {
  const size = compact ? "h-11 w-36" : "h-[52px] w-[184px] sm:h-14 sm:w-[200px]";
  const src = `${import.meta.env.BASE_URL}gulf-upvc-logo-transparent.png`;

  return (
    <a href="#home" className={`group relative block shrink-0 ${size}`} aria-label="Gulf uPVC home">
      <img
        src={src}
        alt="Gulf uPVC and Allied Industries"
        className="h-full w-full object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)] transition duration-300 group-hover:brightness-110"
      />
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-contain brightness-0 invert"
        style={{ clipPath: "inset(59% 0 25% 33%)" }}
      />
    </a>
  );
}
