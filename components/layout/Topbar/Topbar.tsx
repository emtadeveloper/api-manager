"use client";

import { Button, Flex } from "antd";

import { MenuOutlined } from "@ant-design/icons";

import UserMenu from "./components/UserMenu";
import SettingsDrawer from "./components/SettingsDrawer";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Topbar = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-none bg-app-background/85 px-4 backdrop-blur sm:px-8">
      <Flex align="center" gap={8}>
        <Button
          type="text"
          icon={
            <MenuOutlined
              style={{
                color: "var(--app-text-subtle)",
              }}
            />
          }
          onClick={onMenuClick}
          className="hide-on-desktop"
          aria-label="باز کردن منو"
        />
      </Flex>

      <Flex align="center">
        <SettingsDrawer />

        <div className="mx-4 h-6 w-px bg-app-border" />
        <UserMenu />
      </Flex>
    </header>
  );
};

export default Topbar;
