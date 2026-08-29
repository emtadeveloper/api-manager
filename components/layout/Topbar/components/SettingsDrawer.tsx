"use client";

import { useState } from "react";

import { Button, Drawer, Flex, Space, Typography } from "antd";

import { CloseOutlined, ExpandOutlined, ReloadOutlined, SettingOutlined } from "@ant-design/icons";

import Settings from "./Settings";

import useSettingsStore from "@/stores/settings";

const { Text } = Typography;

const SettingsDrawer = () => {
  const [open, setOpen] = useState(false);

  const resetSettings = useSettingsStore((state) => state.resetSettings);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  const handleReset = () => {
    resetSettings();
  };

  return (
    <>
      <Button
        type="text"
        icon={
          <SettingOutlined
            style={{
              fontSize: 18,
            }}
          />
        }
        onClick={showDrawer}
        aria-label="تنظیمات"
        className="z-[1001] animate-spin absolute"
        style={{
          fontSize: 18,
          borderRadius: "50%",
          animationDuration: "8s",
          color: "color-mix(in srgb, var(--app-text-primary) 80%, transparent)",
          marginLeft: 4,
        }}
      />

      <Drawer
        title={
          <Flex justify="space-between" align="center">
            <Text
              strong
              style={{
                fontSize: 16,
                color: "var(--app-text)",
              }}
            >
              تنظیمات
            </Text>

            <Space size={0}>
              <Button type="text" icon={<ReloadOutlined />} onClick={handleReset} aria-label="بازنشانی" />

              <Button type="text" icon={<ExpandOutlined />} onClick={handleFullscreen} aria-label="تمام‌صفحه" />

              <Button type="text" icon={<CloseOutlined />} onClick={onClose} aria-label="بستن" />
            </Space>
          </Flex>
        }
        closable={false}
        placement="left"
        onClose={onClose}
        open={open}
        size={320}
        styles={{
          section: {
            background: "var(--app-surface)",
          },

          header: {
            background: "var(--app-surface)",
            borderBottom: "1px solid var(--app-border)",
            padding: "16px 20px",
          },

          body: {
            padding: "24px 20px",
            background: "var(--app-surface)",
          },
        }}
      >
        <Flex vertical gap={28}>
          <Settings />
        </Flex>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
