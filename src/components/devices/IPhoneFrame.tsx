import type { ReactNode } from "react";

type IPhoneFrameProps = {
  children?: ReactNode;
  className?: string;
  screenClassName?: string;
  showStatusBar?: boolean;
  showHomeIndicator?: boolean;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

// iPhone 16 Pro: 71.5 x 149.6 mm body, 1206 x 2622 px display.
const IPHONE_16_PRO_BODY_RATIO = "aspect-[715/1496]";
const IPHONE_16_PRO_SCREEN_RATIO = "aspect-[1206/2622]";

function SignalIcon() {
  return (
    <div className="flex items-end gap-[2px]" aria-hidden="true">
      <span className="block h-[4px] w-[2px] rounded-full bg-black/78" />
      <span className="block h-[6px] w-[2px] rounded-full bg-black/78" />
      <span className="block h-[8px] w-[2px] rounded-full bg-black/78" />
      <span className="block h-[10px] w-[2px] rounded-full bg-black/78" />
    </div>
  );
}

function BatteryIcon() {
  return (
    <div
      className="relative h-[10px] w-[20px] rounded-[3px] border border-black/70"
      aria-hidden="true"
    >
      <span className="absolute inset-[1.5px] rounded-[2px] bg-black/78" />
      <span className="absolute -right-[3px] top-1/2 h-[4px] w-[2px] -translate-y-1/2 rounded-r-full bg-black/70" />
    </div>
  );
}

export function IPhoneFrame({
  children,
  className,
  screenClassName,
  showStatusBar = true,
  showHomeIndicator = true,
}: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[22rem]",
        IPHONE_16_PRO_BODY_RATIO,
        className,
      )}
      aria-label="iPhone 16 Pro frame"
    >
      <div className="pointer-events-none absolute -left-[1.7%] top-[18.2%] h-[9.6%] w-[1.3%] rounded-l-full bg-gradient-to-b from-[#575756] via-[#1b1b1c] to-[#5a5a58]" />
      <div className="pointer-events-none absolute -left-[1.7%] top-[30.2%] h-[6.8%] w-[1.3%] rounded-l-full bg-gradient-to-b from-[#575756] via-[#1b1b1c] to-[#5a5a58]" />
      <div className="pointer-events-none absolute -right-[1.7%] top-[24.8%] h-[13.2%] w-[1.3%] rounded-r-full bg-gradient-to-b from-[#575756] via-[#1b1b1c] to-[#5a5a58]" />

      <div className="absolute inset-0 rounded-[15.5%/7.4%] bg-[linear-gradient(135deg,#555552_0%,#202020_22%,#0f0f10_50%,#4a4a47_78%,#121212_100%)] shadow-[0_34px_80px_rgba(0,0,0,0.24),0_12px_28px_rgba(0,0,0,0.16),inset_0_1px_2px_rgba(255,255,255,0.28),inset_0_-1px_2px_rgba(0,0,0,0.55)]" />
      <div className="absolute inset-[1.4%] rounded-[14.3%/6.9%] bg-[linear-gradient(145deg,#2a2a2b_0%,#070707_48%,#242424_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_0_2px_rgba(0,0,0,0.72)]" />

      <div className="absolute inset-[3.05%] flex items-center justify-center overflow-hidden rounded-[12.5%/6.1%] bg-black">
        <div
          className={cn(
            "relative h-full w-full overflow-hidden rounded-[11.3%/5.5%] bg-[#f6f6f4]",
            IPHONE_16_PRO_SCREEN_RATIO,
          )}
        >
          <div className="pointer-events-none absolute left-1/2 top-[1.08%] z-30 h-[3.55%] w-[31.2%] -translate-x-1/2 rounded-full bg-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.28)]">
            <span className="absolute right-[10%] top-1/2 h-[34%] w-[7%] -translate-y-1/2 rounded-full bg-[#161616]" />
          </div>

          {showStatusBar ? (
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-[6.9%] items-center justify-between pl-[9.8%] pr-[8.2%] pt-[0.8%] text-[clamp(0.62rem,2.7vw,0.82rem)] font-semibold text-black/82">
              <span>12:00</span>
              <div className="flex items-center gap-2">
                <SignalIcon />
                <BatteryIcon />
              </div>
            </div>
          ) : null}

          <div
            className={cn(
              "relative h-full w-full overflow-hidden bg-[#f6f6f4]",
              showStatusBar ? "pt-[7.2%]" : "",
              showHomeIndicator ? "pb-[7.4%]" : "",
              screenClassName,
            )}
          >
            {children ?? <div className="h-full w-full bg-[#f6f6f4]" />}
          </div>

          {showHomeIndicator ? (
            <div className="pointer-events-none absolute bottom-[2.1%] left-1/2 z-30 h-[0.62%] w-[36%] -translate-x-1/2 rounded-full bg-black/82" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default IPhoneFrame;
