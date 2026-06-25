import type { ReactNode } from "react";

type MacbookFrameProps = {
  children?: ReactNode;
  className?: string;
  screenClassName?: string;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function MacbookFrame({
  children,
  className,
  screenClassName,
}: MacbookFrameProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[56rem]", className)}>
      <div className="rounded-t-[1.6rem] bg-[#171717] p-[10px] shadow-[0_20px_60px_rgba(15,15,15,0.15)]">
        <div className="relative overflow-hidden rounded-t-[1.1rem] bg-[#0c0c0c]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-[6px]">
            <span className="h-[10px] w-[68px] rounded-b-[10px] bg-black/80" />
          </div>
          <div className={cn("aspect-[16/10] w-full overflow-hidden bg-[#f5f5f3]", screenClassName)}>
            {children ?? <div className="h-full w-full bg-[#f5f5f3]" />}
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-5 w-[96%] rounded-b-[1.8rem] bg-gradient-to-b from-[#d8d8d8] via-[#c5c5c5] to-[#b6b6b6]">
        <div className="absolute left-1/2 top-[2px] h-[8px] w-[22%] -translate-x-1/2 rounded-b-[8px] bg-[#a8a8a8]" />
      </div>
    </div>
  );
}

export default MacbookFrame;
