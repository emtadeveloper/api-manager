"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "antd";
import { navLinks } from "@/lib/navigation";

const SidebarContent = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathname = usePathname();

  const activeKey = navLinks.find((link) => pathname === link.href || pathname.startsWith(`${link.href}/`))?.href;

  const items = navLinks.map((link) => {
    const isActive = activeKey === link.href;
    return {
      key: link.href,
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {isActive && (
            <span
              style={{
                color: "var(--app-primary, #1890ff)",
                fontWeight: "bold",
                marginLeft: "8px",
              }}
            >
              |
            </span>
          )}
          <Link href={link.href} onClick={onNavigate} style={{ flex: 1 }}>
            {link.title}
          </Link>
        </div>
      ),
    };
  });

  return (
    <div className="flex h-full flex-col">
      <Menu
        mode="inline"
        selectedKeys={activeKey ? [activeKey] : []}
        items={items}
        style={{
          background: "transparent",
          border: "none",
          flex: 1,
          overflowY: "auto",
        }}
      />
    </div>
  );
};

export default SidebarContent;
