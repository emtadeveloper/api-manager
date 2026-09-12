"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { ContainerLoader } from "../loader/ContainerLoader";

interface ContainerProps {
  children?: ReactNode;
  title?: ReactNode;
  headerActions?: ReactNode[];
  loading?: boolean;
  ComponentLoader?: ReactNode;
}

export default function Container({
  children,
  title,
  headerActions,
  loading,
  ComponentLoader = <ContainerLoader />,
}: ContainerProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && !loading) {
      contentRef.current.scrollTop = 0;
    }
  }, [loading]);

  return (
    <div className=" text-gray-800 flex flex-col h-full space-y-4 mx-2">
      <div className="flex items-center justify-between px-2 py-4 bg-white">
        <h1 className="font-bold text-lg sm:text-xl text-gray-700">{title}</h1>
        <div className="flex gap-2">
          {headerActions && headerActions.map((action, index) => <div key={index}>{action}</div>)}
        </div>
      </div>
      <div
        ref={contentRef}
        className="relative flex flex-col gap-y-4 h-full overflow-auto bg-gray-50 shadow-lg rounded-2xl smooth-scroll-container hide-scrollbar"
      >
        {loading ? ComponentLoader : children}
      </div>
    </div>
  );
}
