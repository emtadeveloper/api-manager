// app/error.tsx
"use client";

import { useEffect } from "react";
import { Button, Result } from "antd";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("خطای رخ داده:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Result
        status="500"
        title="خطای داخلی سرور - 500"
        subTitle="مشکلی پیش آمده است، لطفاً دوباره تلاش کنید."
        extra={
          <Button type="primary" onClick={reset}>
            تلاش مجدد
          </Button>
        }
      />
    </div>
  );
}
