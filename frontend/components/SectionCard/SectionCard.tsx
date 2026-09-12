import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

interface SectionCardProps {
  title?: string;
  extra?: React.ReactNode;
  nested?: boolean;
  className?: string;
}

export default function SectionCard({
  title,
  extra,
  nested = false,
  className,
  children,
}: PropsWithChildren<SectionCardProps>) {
  return (
    <div
      className={cn(
        "app-form-section",
        nested && "app-form-section--nested",
        className,
      )}
    >
      {(title || extra) && (
        <div className="app-form-section-header">
          {title && <h3 className="app-form-section-title">{title}</h3>}
          {extra}
        </div>
      )}
      {children}
    </div>
  );
}
