import { useId } from "react";

export function Logo({ compact = false }: { compact?: boolean }) {
  const size = compact ? "h-11 w-36" : "h-[52px] w-[184px] sm:h-14 sm:w-[200px]";
  const src = `${import.meta.env.BASE_URL}gulf-upvc-logo-transparent.png`;
  const filterId = `logo-tagline-${useId().replace(/:/g, "")}`;

  return (
    <a href="#home" className={`group relative block shrink-0 ${size}`} aria-label="Gulf uPVC home">
      <img
        src={src}
        alt="Gulf uPVC and Allied Industries"
        className="h-full w-full object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)] transition duration-300 group-hover:brightness-110"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 2113 744"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feComponentTransfer in="SourceAlpha" result="solidAlpha">
              <feFuncA type="linear" slope="10" intercept="-7" />
            </feComponentTransfer>
            <feFlood floodColor="#fff" result="white" />
            <feComposite in="white" in2="solidAlpha" operator="in" />
          </filter>
          <clipPath id={`${filterId}-clip`}>
            <rect x="700" y="435" width="1413" height="120" />
          </clipPath>
        </defs>
        <image
          href={src}
          width="2113"
          height="744"
          clipPath={`url(#${filterId}-clip)`}
          filter={`url(#${filterId})`}
        />
      </svg>
    </a>
  );
}
