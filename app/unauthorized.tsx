"use client";

import Link from "next/link";

import { Button, Result } from "antd";

import { useHydrateSettings } from "@/hooks/useHydrateSettings";

export default function Unauthorized() {
  useHydrateSettings();

  return (
    <div
      dir="rtl"
      className="flex min-h-screen w-full items-center justify-center bg-[var(--app-background)] p-4 text-center"
      style={{
        fontFamily: "var(--app-font-family)",
        fontSize: "var(--app-font-size)",
        color: "var(--app-text)",
      }}
    >
      <Result
        status="403"
        title={
          <span
            style={{
              color: "var(--app-text)",
              fontFamily: "var(--app-font-family)",
            }}
          >
            403
          </span>
        }
        subTitle={
          <span
            style={{
              color: "var(--app-text-muted)",
              fontFamily: "var(--app-font-family)",
            }}
          >
            دسترسی به این صفحه برای شما مجاز نیست
          </span>
        }
        extra={
          <Link href="/" passHref>
            <Button
              type="primary"
              style={{
                fontFamily: "var(--app-font-family)",
              }}
            >
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        }
      />
    </div>
  );
}
