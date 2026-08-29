import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

interface SectionCardProps extends PropsWithChildren {
  className?: string;
}

export default function SectionCard({ children, className }: SectionCardProps) {
  return (
    <div
      className={cn("flex flex-wrap p-5! rounded-2xl border", className)}
      style={{
        backgroundColor: "var(--app-surface-light)",
        borderColor: "var(--app-border)",
      }}
    >
      {children}
    </div>
  );
}
