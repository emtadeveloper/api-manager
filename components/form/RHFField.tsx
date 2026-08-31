import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface RHFFieldWrapperProps {
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
  full?: boolean;
  children: ReactNode;
}

export function RHFFieldWrapper({ label, required, error, className, full, children }: RHFFieldWrapperProps) {
  return (
    <div className={cn("app-form-item", full && "app-form-item--full", className)}>
      {(label || error) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <label className="text-xs font-medium app-text-primary flex items-center gap-1">
              {label}
              {required && <span className="text-danger font-bold">*</span>}
            </label>
          )}
          {error && <p className="text-danger text-xs font-medium truncate max-w-[50%]">{error}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
