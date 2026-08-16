export const revalidate = 60;

import type { Metadata } from "next";
import { yekan } from "@/fonts/font";
import "./globals.css";
import db from "@/lib/sqlite";
import Initialize from "./initialize/page";
import Link from "next/link";
import SideBar from "../components/side-bar";
import Header from "@/components/header";
export const metadata: Metadata = {
  title: "سامانه مدیریت سرویس",
  description: "تهیه و تولید در مرکز برسام",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userCount = await db.user.count();
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekan.className}  h-full antialiased`}
    >
   <body className={`${yekan.className} h-full overflow-hidden`}>
  {userCount > 0 ? (
    <div className="flex h-screen flex-col">

      {/* Header */}
      <div className="shrink-0">
        <Header />
      </div>

      {/* Below header */}
      <div className="flex min-h-0 flex-1">

        {/* Sidebar */}
        <SideBar />

        {/* Main */}
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto p-4">
          {children}
        </main>

      </div>

    </div>
  ) : (
    <Initialize />
  )}
</body>
    </html>
  );
}
