"use client";

import { useEffect } from "react";
import { App as AntApp, ConfigProvider, theme } from "antd";
import useSettingsStore from "@/stores/settings";
import useNotificationStore from "@/stores/notification";

function Notification() {
  const { notification } = useNotificationStore();

  if (!notification) return null;

  return (
    <div className="pointer-events-none fixed right-6 top-6 z-[100]" aria-live="assertive">
      <div
        className={`rounded-lg px-5 py-3 text-sm font-medium text-white shadow-lg ${
          notification.isSuccess ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {notification.message}
      </div>
    </div>
  );
}

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
