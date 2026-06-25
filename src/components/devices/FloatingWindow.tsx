import type { ReactNode } from "react";

type FloatingWindowProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function FloatingWindow({
  title,
  children,
  className,
  contentClassName,
}: FloatingWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.35rem] border border-black/8 bg-white shadow-[0_18px_42px_rgba(15,15,15,0.10)]",
        className,
      )}
    >
      {title ? (
        <div className="border-b border-black/6 bg-[#f8f8f6] px-4 py-3 text-sm font-medium text-black/78">
          {title}
        </div>
      ) : null}
      <div className={cn("bg-white", contentClassName)}>
        {children ?? <div className="min-h-[8rem] w-full bg-white" />}
      </div>
    </div>
  );
}

export default FloatingWindow;
