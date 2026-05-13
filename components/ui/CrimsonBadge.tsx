import clsx from "clsx";

interface CrimsonBadgeProps {
  icon?: React.ReactNode;
  className?: string;
  size?: number;
}

export function CrimsonBadge({ icon, className, size = 80 }: CrimsonBadgeProps) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center rounded-full overflow-hidden shrink-0",
        className
      )}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle, var(--crimson-light) 0%, var(--crimson-dark) 100%)",
        border: "1px solid var(--crimson)",
      }}
    >
      {/* Botanical pattern ring (mocked with SVG dashed border for now) */}
      <div className="absolute inset-1 border-[1.5px] border-dashed border-white/20 rounded-full" />
      
      {/* Icon placeholder or passed icon */}
      <div className="relative z-10 text-white flex items-center justify-center w-full h-full">
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        )}
      </div>
    </div>
  );
}
