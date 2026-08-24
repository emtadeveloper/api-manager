"use client";

import React, { useEffect, useState } from "react";
import { ConfigProvider, Drawer, Layout, theme } from "antd";
import SidebarContent from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const { Sider, Content } = Layout;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved ? saved === "dark" : true;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const closeDrawer = () => setDrawerOpen(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const handleBreakpoint = (broken: boolean) => {
    if (!broken) {
      setDrawerOpen(false);
    }
  };

  const sidebarContent = <SidebarContent onNavigate={closeDrawer} />;

  return (
    <ConfigProvider
      direction="rtl"
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#f59e0b",
          colorInfo: "#f59e0b",
          borderRadius: 8,
          fontFamily: "var(--font-yekan), Tahoma, Arial, sans-serif",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth={0}
          width={280}
          onBreakpoint={handleBreakpoint}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            overflow: "auto",
            background: "var(--app-surface)",
            borderInlineEnd: "1px solid var(--app-border)",
          }}
        >
          {sidebarContent}
        </Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <Topbar isDark={isDark} onToggleTheme={toggleTheme} onMenuClick={() => setDrawerOpen(true)} />
          <Content style={{ padding: 16, overflow: "auto" }}>{children}</Content>
        </Layout>
      </Layout>

      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        placement="right"
        size={280}
        styles={{
          section: { background: "var(--app-surface)" },
          header: { background: "var(--app-surface)!important", borderBottom: "1px solid var(--app-border)" },
          body: { padding: 0, background: "var(--app-surface)" },
        }}
      >
        {sidebarContent}
      </Drawer>
    </ConfigProvider>
  );
}
