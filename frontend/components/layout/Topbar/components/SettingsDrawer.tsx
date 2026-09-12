"use client";

import { useState } from "react";

import { Button, Drawer, Flex, Space, Typography } from "antd";

import {
  CloseOutlined,
  ExpandOutlined,
  ReloadOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Settings from "./Settings";

import useSettingsStore from "@/stores/settings";
import useNotificationStore from "@/stores/notification";

const { Text } = Typography;

const SettingsDrawer = () => {
  const [open, setOpen] = useState(false);
  const { setError } = useNotificationStore();

  const resetSettings = useSettingsStore((state) => state.resetSettings);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      setError("امکان تغییر حالت تمام‌صفحه وجود ندارد");
    }
  };

  return (
    <>
      <Button
        type="text"
        icon={<SettingOutlined />}
        onClick={showDrawer}
        aria-label="تنظیمات"
        className="app-topbar-settings-btn"
      />

      <Drawer
        title={
          <Flex justify="space-between" align="center">
            <Text strong className="app-settings-title">
              تنظیمات
            </Text>

            <Space size={0}>
              <Button
                type="text"
                icon={<ReloadOutlined />}
                onClick={resetSettings}
                aria-label="بازنشانی"
              />
              <Button
                type="text"
                icon={<ExpandOutlined />}
                onClick={handleFullscreen}
                aria-label="تمام‌صفحه"
              />
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={onClose}
                aria-label="بستن"
              />
            </Space>
          </Flex>
        }
        closable={false}
        placement="left"
        onClose={onClose}
        open={open}
        size={320}
        className="app-drawer-surface"
      >
        <Flex vertical gap={28}>
          <Settings />
        </Flex>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
