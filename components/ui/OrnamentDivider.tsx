import clsx from "clsx";

interface OrnamentDividerProps {
  className?: string;
}

export function OrnamentDivider({ className }: OrnamentDividerProps) {
  return (
    <div className={clsx("flex items-center justify-center my-8", className)}>
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-crimson"
      >
        <path
          d="M60 0L65 10L75 12L65 14L60 24L55 14L45 12L55 10L60 0Z"
          fill="currentColor"
        />
        <path d="M0 11.5H40V12.5H0V11.5Z" fill="currentColor" opacity="0.3" />
        <path d="M80 11.5H120V12.5H80V11.5Z" fill="currentColor" opacity="0.3" />
      </svg>
    </div>
  );
}
