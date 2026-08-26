"use client";

export function LoadingScreen() {
  return (
    <div className="flex h-full w-full items-center justify-center px-5 pb-40">
      <div className="h-1 w-full max-w-[360px] overflow-hidden rounded-full bg-app-primary/40">
        <div className="h-full w-1/2 animate-linear-loading rounded-full bg-app-primary" />
      </div>
    </div>
  );
}
