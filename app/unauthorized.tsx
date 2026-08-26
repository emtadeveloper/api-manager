// app/unauthorized.tsx
"use client";

import Link from "next/link";
import { Button, Result } from "antd";

export default function Unauthorized() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Result
        status="403"
        title="401"
        subTitle="دسترسی مجاز نیست"
        extra={
          <Link href="/" passHref>
            <Button type="primary">بازگشت به صفحه اصلی</Button>
          </Link>
        }
      />
    </div>
  );
}
