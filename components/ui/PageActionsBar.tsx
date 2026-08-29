import { PropsWithChildren } from "react";

export default function PageActionsBar({ children }: PropsWithChildren) {
  return <div className="sticky top-0 mb-0.5 z-5 [&>button]:mr-0.5">{children}</div>;
}
