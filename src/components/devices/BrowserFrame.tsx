import type { ReactNode } from "react";

type BrowserFrameProps = {
  title?: string;
  url?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

function Dot({ tone }: { tone: "red" | "yellow" | "green" }) {
  const toneClass =
    tone === "red"
      ? "bg-[#d7d7d7]"
      : tone === "yellow"
        ? "bg-[#dcdcdc]"
        : "bg-[#dfdfdf]";

  return <span className={cn("block h-3 w-3 rounded-full", toneClass)} aria-hidden="true" />;
}

export function BrowserFrame({
  title,
  url,
  children,
  className,
  contentClassName,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full overflow-hidden rounded-[1.6rem] border border-black/8 bg-white shadow-[0_16px_40px_rgba(15,15,15,0.06)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-black/6 bg-[#f7f7f5] px-4 py-3">
        <div className="flex items-center gap-2">
          <Dot tone="red" />
          <Dot tone="yellow" />
          <Dot tone="green" />
        </div>

        {url ? (
          <div className="min-w-0 flex-1 rounded-full border border-black/6 bg-white/90 px-4 py-2 text-center text-[0.78rem] text-black/45">
            <span className="block truncate">{url}</span>
          </div>
        ) : title ? (
          <div className="min-w-0 flex-1 rounded-full border border-black/6 bg-white/90 px-4 py-2 text-center text-[0.78rem] text-black/55">
            <span className="block truncate">{title}</span>
          </div>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {title && !url ? (
        <div className="border-b border-black/6 px-5 py-3 text-sm font-medium text-black/75">{title}</div>
      ) : null}

      <div className={cn("min-h-[12rem] bg-[#fafaf8]", contentClassName)}>
        {children ?? <div className="h-full min-h-[12rem] w-full bg-[#fafaf8]" />}
      </div>
    </div>
  );
}

export default BrowserFrame;
