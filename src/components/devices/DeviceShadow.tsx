import type { ReactNode } from "react";

type DeviceShadowProps = {
  children?: ReactNode;
  className?: string;
  intensity?: "soft" | "medium" | "strong";
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const shadowByIntensity: Record<NonNullable<DeviceShadowProps["intensity"]>, string> = {
  soft: "shadow-[0_16px_36px_rgba(15,15,15,0.08)]",
  medium: "shadow-[0_22px_56px_rgba(15,15,15,0.12)]",
  strong: "shadow-[0_28px_72px_rgba(15,15,15,0.18)]",
};

export function DeviceShadow({
  children,
  className,
  intensity = "medium",
}: DeviceShadowProps) {
  return (
    <div className={cn("rounded-[inherit]", shadowByIntensity[intensity], className)}>
      {children}
    </div>
  );
}

export default DeviceShadow;
