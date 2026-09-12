"use client";

import type { ComponentType } from "react";

type BoxLoaderSize =
  | "full"
  | "item"
  | "list"
  | "text"
  | "slider"
  | "filterList"
  | "imgList"
  | "imgListitem"
  | "smImgListitem"
  | "baseText"
  | "smTitle"
  | "xsTitle"
  | "title"
  | "bestseller";

interface BoxLoaderProps {
  size?: BoxLoaderSize;
  className?: string;
  message?: string;
  fullMessage?: boolean;
  icon?: ComponentType<{ className?: string }> | null;
}

const sizes: Record<BoxLoaderSize, string> = {
  full: "h-full w-full",
  item: "h-72 w-full",
  list: "h-32 w-52",
  text: "h-6 w-52",
  slider: "h-28 w-full",
  filterList: "h-96 w-full",
  imgList: "h-52 w-full",
  imgListitem: "h-44 w-full",
  smImgListitem: "h-36 w-36",
  baseText: "h-6 w-44",
  smTitle: "h-6 w-24",
  xsTitle: "h-6 w-12",
  title: "h-6 w-56",
  bestseller: "h-4 w-8/12 md:w-80",
};

export default function BoxLoader({
  size,
  className = "",
  message,
  fullMessage = false,
  icon: Icon = null,
}: BoxLoaderProps) {
  const loaderClassName = `animate-pulse bg-gray-200 rounded ${size ? sizes[size] : ""} ${className}`;

  if (fullMessage) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
        {Icon && <Icon className="w-16 h-16 animate-pulse text-gray-300" />}

        <div className="animate-pulse bg-gray-200 rounded-full w-32 h-4" />

        {message && <p className="text-gray-500 text-center animate-pulse">{message}</p>}
      </div>
    );
  }

  if (message) {
    return (
      <div className="flex flex-col items-center space-y-3">
        <div className={loaderClassName} />

        <p className="text-gray-500 text-sm animate-pulse">{message}</p>
      </div>
    );
  }

  return <div className={loaderClassName} />;
}
