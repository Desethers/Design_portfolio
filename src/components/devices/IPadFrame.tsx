import type { ReactNode } from "react";

type IPadFrameProps = {
  children?: ReactNode;
  className?: string;
  screenClassName?: string;
  orientation?: "portrait" | "landscape";
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function IPadFrame({
  children,
  className,
  screenClassName,
  orientation = "landscape",
}: IPadFrameProps) {
  const ratioClass =
    orientation === "portrait" ? "aspect-[3/4.1] max-w-[26rem]" : "aspect-[4/3] max-w-[42rem]";

  return (
    <div
      className={cn(
        "relative mx-auto w-full rounded-[2rem] bg-[#1a1a1a] p-[10px] shadow-[0_18px_50px_rgba(15,15,15,0.14)]",
        ratioClass,
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-[#f5f5f3]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f2f2f]" />
        <div className={cn("h-full w-full overflow-hidden bg-[#f5f5f3]", screenClassName)}>
          {children ?? <div className="h-full w-full bg-[#f5f5f3]" />}
        </div>
      </div>
    </div>
  );
}

export default IPadFrame;
