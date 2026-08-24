import type { Metadata } from "next";
import { yekan } from "../public/fonts/font";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";

export const metadata: Metadata = {
  title: {
    default: "سامانه مدیریت سرویس",
    template: "%s | سامانه مدیریت سرویس",
  },
  description: "سامانه مدیریت سرویس - تهیه و تولید در مرکز برسام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark" className={`${yekan.className} h-full antialiased`}>
      <body className="h-full overflow-hidden">
        <AntdRegistry>
          <AppLayout>{children}</AppLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
