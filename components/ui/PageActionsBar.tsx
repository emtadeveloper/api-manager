import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export default function PageActionsBar({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("app-page-actions", className)}>{children}</div>;
}
