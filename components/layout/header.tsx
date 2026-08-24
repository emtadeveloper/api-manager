"use client";

import { Avatar, Button, Flex, Typography } from "antd";
import { MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onMenuClick?: () => void;
}

const Header = ({ isDark, onToggleTheme, onMenuClick }: HeaderProps) => {
  const iconColor = isDark ? "#ffffff" : "#f59e0b";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-y border-app-border bg-app-background/85 px-4 backdrop-blur sm:px-8">
      <Flex align="center" gap={8}>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: iconColor }} />}
          onClick={onMenuClick}
          className="hide-on-desktop"
          aria-label="باز کردن منو"
        />
      </Flex>

      <Flex align="center" gap={12}>
        <Button
          type="text"
          icon={isDark ? <SunOutlined /> : <MoonOutlined />}
          onClick={onToggleTheme}
          aria-label="تغییر تم"
        />
        <div className="h-6 w-px bg-app-border" />
        <Flex align="center" gap={8}>
          <Avatar src="/images/user.png" size={30} style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }} />
          <Typography.Text style={{ color: "var(--app-text)", fontWeight: 500, fontSize: 10 }}>
            حسین نجفی
          </Typography.Text>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
