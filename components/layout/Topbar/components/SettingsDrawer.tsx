"use client";

import { useState } from "react";
import { Button, Drawer, Flex, Typography, Space } from "antd";
import {
  SettingOutlined,
  SunOutlined,
  MoonOutlined,
  ReloadOutlined,
  ExpandOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

interface SettingsDrawerProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const SettingsDrawer = ({ isDark, onToggleTheme }: SettingsDrawerProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleReset = () => {
    console.log("بازنشانی تنظیمات");
  };

  const handleFullscreen = () => {
    console.log("تغییر حالت تمام‌صفحه");
  };

  return (
    <>
      <Button
        type="text"
        icon={isDark ? <MoonOutlined /> : <SunOutlined />}
        onClick={onToggleTheme}
        aria-label="تغیر حالت"
      />
      <Button
        type="text"
        icon={<SettingOutlined style={{ fontSize: 18 }} />}
        onClick={showDrawer}
        aria-label="تنظیمات"
      />
      <Drawer
        title={
          <Flex justify="space-between" align="center">
            <Text strong style={{ fontSize: 16, color: "var(--app-text)" }}>
              تنظیمات
            </Text>
            <Space size={0}>
              <Button
                type="text"
                icon={<ReloadOutlined />}
                onClick={handleReset}
                aria-label="بازنشانی"
                style={{ margin: 0, padding: 0 }}
              />
              <Button
                type="text"
                icon={<ExpandOutlined />}
                onClick={handleFullscreen}
                aria-label="تمام‌صفحه"
                style={{ margin: 0, padding: 0 }}
              />
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={onClose}
                aria-label="بستن"
                style={{ margin: 0, padding: 0 }}
              />
            </Space>
          </Flex>
        }
        closable={false}
        placement="left"
        onClose={onClose}
        open={open}
        size={320}
        styles={{
          section: { background: "var(--app-surface)" },
          header: {
            background: "var(--app-surface)!important",
            borderBottom: "1px solid var(--app-border)",
            padding: "16px 20px",
          },
          body: { padding: "24px 20px", background: "var(--app-surface)" },
        }}
      >
        <Flex vertical gap={28}></Flex>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
