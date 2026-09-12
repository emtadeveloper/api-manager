import type { ReactNode } from "react";

interface MobileCardActionsProps {
  children: ReactNode;
}

export default function MobileCardActions({
  children,
}: MobileCardActionsProps) {
  return (
    <div
      className="shrink-0 rounded-[var(--app-radius-sm)]"
      onClick={(event) => event.stopPropagation()}
      onMouseDown={(event) => event.stopPropagation()}
      onTouchStart={(event) => event.stopPropagation()}
      aria-label="عملیات"
    >
      {children}
    </div>
  );
}
