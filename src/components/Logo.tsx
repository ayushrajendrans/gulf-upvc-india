export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group inline-flex shrink-0" aria-label="Gulf uPVC home">
      <img
        src={`${import.meta.env.BASE_URL}gulf-upvc-logo-transparent.png`}
        alt="Gulf uPVC and Allied Industries"
        className={`object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)] transition duration-300 group-hover:brightness-110 ${
          compact ? "h-11 w-36" : "h-[52px] w-[184px] sm:h-14 sm:w-[200px]"
        }`}
      />
    </a>
  );
}
