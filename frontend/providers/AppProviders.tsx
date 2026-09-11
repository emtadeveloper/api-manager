"use client";

import { App as AntApp, ConfigProvider, theme } from "antd";

import useSettingsStore from "@/stores/settings";
import { useEffect } from "react";
import { Notification } from "@/components/Notification/Notification";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const { isDark, fontType, fontSize, primaryColor, hydrate } = useSettingsStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <ConfigProvider
      direction="rtl"
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: primaryColor,
          colorInfo: primaryColor,
          borderRadius: 8,
          fontSize,
          fontFamily:
            fontType === "yekan"
              ? "var(--font-yekan), Tahoma, Arial, sans-serif"
              : "var(--font-vazir), Tahoma, Arial, sans-serif",
        },
      }}
    >
      <AntApp>{children}</AntApp>
      <Notification />
    </ConfigProvider>
  );
}
