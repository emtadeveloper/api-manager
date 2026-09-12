"use client";

export function LoadingScreen() {
  return (
    <div
      dir="rtl"
      className="flex min-h-screen w-full items-center justify-center bg-(--app-background) px-5 "
      style={{
        fontFamily: "var(--app-font-family)",
        fontSize: "var(--app-font-size)",
      }}
    >
      <div className="w-full max-w-90">
        <div
          className="h-1 w-full overflow-hidden rounded-full"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--app-primary) 40%, transparent)",
          }}
        >
          <div
            className="h-full w-1/2 animate-linear-loading rounded-full"
            style={{
              backgroundColor: "var(--app-primary)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
