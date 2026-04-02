import type { ReactNode } from "react";

type HorizontalRailProps = {
  ariaLabel: string;
  children: ReactNode;
  className: string;
};

export function HorizontalRail({ ariaLabel, children, className }: HorizontalRailProps) {
  return (
    <div aria-label={ariaLabel} className={className}>
      {children}
    </div>
  );
}
