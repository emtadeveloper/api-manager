"use client";

import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/cn";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <aside className="flex h-full min-h-0 w-64 flex-col overflow-hidden border-e border-app-border bg-app-background/70">
      <div className="shrink-0 p-3 text-end">
        <button
          type="button"
          aria-label="باز و بسته کردن منو"
          className="mb-2 rounded p-1 text-app-text-muted transition hover:bg-app-surface hover:text-app-primary"
        >
          <MenuOutlined />
        </button>

        <div className="grid w-full place-content-center">
          <Image src="/assets/images/rasan.png" width={120} height={50} alt="لوگو" />
        </div>

        <div className="m-2 mb-4 rounded-xl border border-app-border bg-app-surface p-2 text-center text-app-primary">
          رسان
          <p className="m-2 mt-2 rounded-xl border border-app-border bg-app-surface-light p-2 text-xs text-app-text">
            سامانه مدیریت سرویس
          </p>
          <p className="m-2 mt-2 rounded-xl border border-app-border bg-app-surface-light p-2 text-xs text-app-text">
            API MANAGER
          </p>
        </div>
      </div>
      <nav className="app-scrollbar min-h-0 flex-1 overflow-y-auto px-2" aria-label="منوی اصلی">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-md border border-app-border p-2 transition",
                    active
                      ? "border-e-4 border-app-primary bg-app-surface-orange/40 text-app-primary"
                      : "text-app-text-muted hover:border-app-border-light hover:bg-app-surface",
                  )}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <small className="version mx-3 mb-3 shrink-0 p-2 text-center">نسخه 1.0.0</small>
    </aside>
  );
};

export default Sidebar;
