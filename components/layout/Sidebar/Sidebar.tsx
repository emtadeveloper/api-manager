"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { navLinks } from "@/utils/navigation";
import ISIRANLogo from "@/public/icons/ISIRANLogo";
import { cn } from "@/utils/cn";

interface SidebarContentProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate?: () => void;
}

const SidebarContent = ({ collapsed, onToggleCollapse, onNavigate }: SidebarContentProps) => {
  const pathname = usePathname();

  const activeKey = navLinks.find((link) => pathname === link.href || pathname.startsWith(`${link.href}/`))?.href;

  return (
    <div
      data-collapsed={collapsed}
      className={cn(
        "relative flex h-full shrink-0 flex-col overflow-visible transition-[width] duration-300 ease-in-out",
        collapsed ? "w-[90px]" : "w-[280px]",
      )}
    >
      {/* Collapse Button */}
      <button
        type="button"
        onClick={onToggleCollapse}
        aria-label={collapsed ? "باز کردن سایدبار" : "بستن سایدبار"}
        className="app-sidebar-collapse-btn"
      >
        {collapsed ? <LeftOutlined className="text-[10px]" /> : <RightOutlined className="text-[10px]" />}
      </button>

      {/* Header */}
      <div className="p-4">
        <div
          className={cn(
            "flex items-center gap-3 px-4 transition-[justify-content] duration-300",
            collapsed ? "justify-center" : "justify-start",
          )}
        >
          <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-visible">
            <ISIRANLogo
              className={cn(
                "shrink-0 transition-[transform,padding] duration-300 ease-in-out",
                collapsed ? "scale-[0.55] p-0" : "scale-100 p-3",
              )}
            />
          </div>

          <div
            className={cn(
              "flex min-w-0 flex-col overflow-hidden whitespace-nowrap transition-[max-width,transform,opacity] duration-300 ease-in-out",
              collapsed ? "max-w-0 translate-x-4 opacity-0" : "max-w-[180px] translate-x-0 opacity-100",
            )}
          >
            <span className="block w-full whitespace-nowrap text-md font-bold app-text-primary">مدیریت سرویس</span>

            <span className="block w-full whitespace-nowrap font-bold text-[color-mix(in_srgb,var(--app-text)_50%,transparent)]">
              رسان
            </span>
          </div>
        </div>
      </div>

      <div className="my-1 h-px w-full bg-[var(--app-border)]" />

      {/* Navigation */}
      <ul className="flex-1 overflow-y-auto overflow-x-hidden">
        {navLinks.map((link) => {
          const isActive = activeKey === link.href;
          const Icon = link.icon;

          return (
            <li key={link.href}>
              <Link href={link.href} onClick={onNavigate}>
                <div
                  className={cn(
                    "group m-4 flex items-center justify-start overflow-hidden px-4 py-3",
                    isActive
                      ? "rounded-l-lg bg-[color-mix(in_srgb,var(--app-primary)_10%,transparent)] shadow-[inset_-4px_0_0_var(--app-primary)]"
                      : "rounded-lg hover:bg-[color-mix(in_srgb,var(--app-primary)_5%,transparent)]",
                  )}
                >
                  <Icon
                    className={cn(
                      "app-nav-icon",
                      collapsed ? "app-nav-icon--collapsed" : "app-nav-icon--expanded",
                      isActive ? "app-nav-icon--active" : "app-nav-icon--inactive",
                    )}
                  />

                  <span
                    className={cn(
                      "block min-w-0 overflow-hidden whitespace-nowrap transition-[max-width,transform,opacity] duration-300 ease-in-out",
                      collapsed ? "max-w-0 translate-x-4 opacity-0" : "max-w-[180px] translate-x-0 opacity-100",
                      isActive ? "font-bold text-[var(--app-primary)]" : "app-text-primary",
                    )}
                  >
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
