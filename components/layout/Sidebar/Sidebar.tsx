"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { navLinks } from "@/utils/navigation";
import ISIRANLogo from "@/public/icons/ISIRANLogo";

const SidebarContent = ({
  collapsed,
  onToggleCollapse,
  onNavigate,
}: {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate?: () => void;
}) => {
  const pathname = usePathname();

  const activeKey = navLinks.find((link) => pathname === link.href || pathname.startsWith(`${link.href}/`))?.href;

  return (
    <div
      data-collapsed={collapsed}
      className={`
        relative
        flex
        h-full
        shrink-0
        flex-col
        overflow-visible
        ${collapsed ? "w-[90px]" : "w-[280px]"}
        transition-[width]
        duration-300
        ease-in-out
      `}
    >
      {/* Collapse Button */}
      <button
        type="button"
        onClick={onToggleCollapse}
        aria-label={collapsed ? "باز کردن سایدبار" : "بستن سایدبار"}
        className="
          absolute
          top-28
          -left-3
          z-[9999]
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          border
          border-[var(--app-border)]
          bg-[var(--app-surface)]
          text-[var(--app-text)]
          shadow-md
          transition-transform
          duration-200
          hover:scale-105
          hover:border-[var(--app-primary)]
          hover:text-[var(--app-primary)]
        "
      >
        {collapsed ? <LeftOutlined className="text-[10px]" /> : <RightOutlined className="text-[10px]" />}
      </button>

      {/* Header */}
      <div className="p-4">
        <div
          className={`
            flex
            items-center
            gap-3
            px-4
            ${collapsed ? "justify-center" : "justify-start"}
            transition-[justify-content]
            duration-300
          `}
        >
          {/* Logo Container */}
          <div
            className="
              flex
              h-[70px]
              w-[70px]
              shrink-0
              items-center
              justify-center
              overflow-visible
            "
          >
            <ISIRANLogo
              className={`
                shrink-0
                ${collapsed ? "scale-[0.55] p-0" : "scale-100 p-3"}
                transition-[transform,padding]
                duration-300
                ease-in-out
              `}
            />
          </div>

          {/* Header Text */}
          <div
            className={`
              flex
              min-w-0
              flex-col
              overflow-hidden
              whitespace-nowrap
              ${collapsed ? "max-w-0 translate-x-4 opacity-0" : "max-w-[180px] translate-x-0 opacity-100"}
              transition-[max-width,transform,opacity]
              duration-300
              ease-in-out
            `}
          >
            <span
              className="
                block
                w-full
                whitespace-nowrap
                text-md
                font-bold
                text-[var(--app-text)]
              "
            >
              مدیریت سرویس
            </span>

            <span
              className="
                block
                w-full
                whitespace-nowrap
                font-bold
                text-[color-mix(in_srgb,var(--app-text)_50%,transparent)]
              "
            >
              رسان
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            mt-5
            h-px
            w-full
            bg-[var(--app-border)]
          "
        />
      </div>

      {/* Navigation */}
      <ul className="flex-1 overflow-y-auto overflow-x-hidden">
        {navLinks.map((link) => {
          const isActive = activeKey === link.href;
          const Icon = link.icon;

          return (
            <li key={link.href}>
              <Link href={link.href} onClick={onNavigate}>
                <div
                  className={`
                    group
                    m-4
                    flex
                    items-center
                    justify-start
                    overflow-hidden
                    px-4
                    py-3

                    ${
                      isActive
                        ? "rounded-l-lg bg-[color-mix(in_srgb,var(--app-primary)_10%,transparent)] shadow-[inset_-4px_0_0_var(--app-primary)]"
                        : "rounded-lg hover:bg-[color-mix(in_srgb,var(--app-primary)_5%,transparent)]"
                    }
                  `}
                >
                  {/* Icon */}
                  <Icon
                    className="
                      shrink-0
                      text-lg
                    "
                    style={{
                      marginInlineEnd: collapsed ? "0" : "1rem",
                      color: isActive ? "var(--app-primary)" : "var(--app-text)",
                      transition: "margin-inline-end 300ms ease-in-out",
                    }}
                  />

                  {/* Menu Text */}
                  <span
                    className={`
                      block
                      min-w-0
                      overflow-hidden
                      whitespace-nowrap

                      ${collapsed ? "max-w-0 translate-x-4 opacity-0" : "max-w-[180px] translate-x-0 opacity-100"}

                      ${isActive ? "font-bold text-[var(--app-primary)]" : "text-[var(--app-text)]"}

                      transition-[max-width,transform,opacity]
                      duration-300
                      ease-in-out
                    `}
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
