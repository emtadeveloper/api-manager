"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/navigation";

const SidebarContent = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathname = usePathname();

  const activeKey = navLinks.find((link) => pathname === link.href || pathname.startsWith(`${link.href}/`))?.href;

  return (
    <div className="flex h-full flex-col">
      <div className="p-4">
        <div className="flex items-center justify-start gap-3 px-4">
          <div className="flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-lg bg-white">
            <Image src="/assets/ISIRAN-Logo.svg" alt="ISIRAN" width={60} height={60} className="object-contain" />
          </div>

          <span className="text-[var(--app-text)] font-bold whitespace-nowrap">سامانه مدیریت سرویس</span>
        </div>

        <div className="mt-5 h-px w-full bg-[var(--app-border)]" />
      </div>

      <ul className="flex-1 overflow-y-auto">
        {navLinks.map((link) => {
          const isActive = activeKey === link.href;

          return (
            <li key={link.href}>
              <Link href={link.href} onClick={onNavigate}>
                <div
                  className={`group flex items-center justify-start px-4 py-3 transition-colors duration-200 m-4 overflow-hidden ${
                    isActive
                      ? "bg-[color-mix(in_srgb,var(--app-primary)_10%,transparent)] border-r-4 border-r-[var(--app-primary)] rounded-l-lg"
                      : "rounded-lg hover:bg-[color-mix(in_srgb,var(--app-primary)_5%,transparent)]"
                  }`}
                >
                  <span className={isActive ? "font-bold text-[var(--app-primary)]" : "text-[var(--app-text)]"}>
                    {link.title}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarContent;
