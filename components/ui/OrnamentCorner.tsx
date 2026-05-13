import clsx from "clsx";
import Image from "next/image";

interface OrnamentCornerProps {
  position?: "tl" | "tr" | "bl" | "br";
  className?: string;
  size?: number;
  opacity?: number;
}

export function OrnamentCorner({
  position = "tl",
  className,
  size = 140,
  opacity = 0.6,
}: OrnamentCornerProps) {
  const positionClasses = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 scale-x-[-1]",
    bl: "bottom-0 left-0 scale-y-[-1]",
    br: "bottom-0 right-0 rotate-180",
  };

  return (
    <div
      className={clsx("ornament-corner", positionClasses[position], className)}
      style={{ opacity, width: size, height: size }}
    >
      <Image
        src="/media/post_corner.png"
        alt="Ornament"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
