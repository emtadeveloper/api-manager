"use client";

import { Button, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import UserMenu from "./components/UserMenu";
import SettingsDrawer from "./components/SettingsDrawer";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onMenuClick?: () => void;
}

const Topbar = ({ isDark, onToggleTheme, onMenuClick }: HeaderProps) => {
  const iconColor = isDark ? "#ffffff" : "#f59e0b";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-none bg-app-background/85 px-4 backdrop-blur sm:px-8">
      <Flex align="center" gap={8}>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: iconColor }} />}
          onClick={onMenuClick}
          className="hide-on-desktop"
          aria-label="باز کردن منو"
        />
      </Flex>
      <Flex align="center">
        <SettingsDrawer isDark={isDark} onToggleTheme={onToggleTheme} />
        <div className="h-6 w-px bg-app-border mx-4" />
        <UserMenu />
      </Flex>
    </header>
  );
};

export default Topbar;
