"use client";

import { Button, Result } from "antd";

import { useHydrateSettings } from "@/hooks/useHydrateSettings";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useHydrateSettings();

  return (
    <div
      dir="rtl"
      className="flex min-h-screen w-full items-center justify-center  p-4 text-center"
      style={{
        fontFamily: "var(--app-font-family)",
        fontSize: "var(--app-font-size)",
        color: "var(--app-text)",
      }}
    >
      <Result
        status="500"
        title={
          <span
            style={{
              color: "var(--app-text)",
              fontFamily: "var(--app-font-family)",
            }}
          >
            خطای داخلی سرور - 500
          </span>
        }
        subTitle={
          <span
            style={{
              color: "var(--app-text-muted)",
              fontFamily: "var(--app-font-family)",
            }}
          >
            مشکلی پیش آمده است، لطفاً دوباره تلاش کنید.
          </span>
        }
        extra={
          <Button
            type="primary"
            onClick={reset}
            style={{
              fontFamily: "var(--app-font-family)",
            }}
          >
            تلاش مجدد
          </Button>
        }
      />
    </div>
  );
}
