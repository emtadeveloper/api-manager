"use client";

import Image from "next/image";
import Link from "next/link";

import { useHydrateSettings } from "@/hooks/useHydrateSettings";

export default function NotFound() {
  useHydrateSettings();

  return (
    <div
      dir="rtl"
      className="grid min-h-screen w-full place-items-center bg-[var(--app-background)] p-4 text-center "
      style={{
        fontFamily: "var(--app-font-family)",
        fontSize: "var(--app-font-size)",
        color: "var(--app-text)",
      }}
    >
      <div className="flex w-full max-w-xl flex-col items-center justify-center mb-40">
        <div className="relative mb-4 h-48 w-48">
          <Image src="/images/404.png" alt="صفحه پیدا نشد" fill priority className="object-contain" />
        </div>

        <h1
          className="mb-2 text-2xl font-semibold"
          style={{
            color: "var(--app-text)",
            fontFamily: "var(--app-font-family)",
          }}
        >
          صفحه پیدا نشد
        </h1>

        <p
          className="mb-6 text-sm"
          style={{
            color: "var(--app-text-muted)",
            fontFamily: "var(--app-font-family)",
          }}
        >
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
          style={{
            color: "var(--app-background)",
            backgroundColor: "var(--app-primary)",
            fontFamily: "var(--app-font-family)",
          }}
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
