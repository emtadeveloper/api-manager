import type { Metadata } from "next";

import { AntdRegistry } from "@ant-design/nextjs-registry";

import { yekan, vazir } from "../public/fonts/font";

import "./globals.css";

import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  icons: {
    icon: "/assets/ISIRAN-Logo.svg",
  },

  title: {
    default: "مدیریت سرویس",
    template: "%s | مدیریت سرویس",
  },

  description: "سامانه مدیریت سرویس - تهیه و تولید در مرکز برسام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-theme="dark"
      data-font="yekan"
      data-font-size="14"
      data-primary-color="#f59e0b"
      className={`${yekan.variable} ${vazir.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full overflow-hidden">
        <AntdRegistry>
          <ClientLayout>{children}</ClientLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
