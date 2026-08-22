import type { Metadata } from "next";
import { yekan } from "@/fonts/font";
import Header from "@/components/header";
import SideBar from "@/components/side-bar";

import "./globals.css";

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
    <html lang="fa" dir="rtl" className={`${yekan.className} h-full antialiased`}>
      <body className="h-full overflow-hidden">
        <div className="flex h-dvh flex-col">
          <Header />

          <div className="flex min-h-0 flex-1">
            <SideBar />
            <main className="min-h-0 min-w-0 flex-1 overflow-y-auto p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
