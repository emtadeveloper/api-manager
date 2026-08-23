"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Typography } from "antd";
import { navLinks } from "@/lib/navigation";

const SidebarContent = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathname = usePathname();

  const activeKey = navLinks.find((link) => pathname === link.href || pathname.startsWith(`${link.href}/`))?.href;

  const items = navLinks.map((link) => ({
    key: link.href,
    label: (
      <Link href={link.href} onClick={onNavigate}>
        {link.title}
      </Link>
    ),
  }));

  return (
    <div className="flex h-full flex-col">
      <div className="shrink-0 p-3 text-end">
        <div className="grid w-full place-content-center">
          <Image src="/images/rasan.png" width={120} height={50} alt="لوگو" />
        </div>

        <div className="m-2 mb-4 rounded-xl border border-app-border bg-app-surface p-2 text-center text-app-primary">
          رسان
          <Typography.Paragraph className="m-2 mt-2 rounded-xl border border-app-border bg-app-surface-light p-2 text-xs text-app-text">
            سامانه مدیریت سرویس
          </Typography.Paragraph>
          <Typography.Paragraph className="m-2 mt-2 rounded-xl border border-app-border bg-app-surface-light p-2 text-xs text-app-text">
            API MANAGER
          </Typography.Paragraph>
        </div>
      </div>

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

      <Typography.Text
        type="secondary"
        style={{ textAlign: "center", padding: "12px 0", color: "var(--app-text-muted)" }}
      >
        نسخه 1.0.0
      </Typography.Text>
    </div>
  );
};

export default SidebarContent;
