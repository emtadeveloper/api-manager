"use client";

import React from "react";

import { Drawer, Layout } from "antd";

import SidebarContent from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const { Sider, Content } = Layout;

/**
 * توجه: ConfigProvider (تم) دیگر اینجا نیست — به AppProviders در بالاترین سطح منتقل شد
 * تا همه‌ی صفحات (از جمله لاگین و خطاها) از یک تم واحد پیروی کنند.
 */
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  const handleBreakpoint = (broken: boolean) => {
    if (!broken) setDrawerOpen(false);
  };

  const sidebarContent = (
    <SidebarContent
      collapsed={collapsed}
      onToggleCollapse={() => setCollapsed((prev) => !prev)}
      onNavigate={closeDrawer}
    />
  );

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsed={collapsed}
          collapsedWidth={90}
          trigger={null}
          width={280}
          onBreakpoint={handleBreakpoint}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            overflow: "visible",
            background: "var(--app-surface)",
            borderInlineEnd: "1px solid var(--app-border)",
            zIndex: 1000,
          }}
        >
          {sidebarContent}
        </Sider>

        <Layout style={{ minHeight: "100vh" }}>
          <Topbar />

          <Content
            style={{
              padding: 16,
              overflow: "auto",
              background: "var(--app-background)",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>

      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        placement="right"
        size={280}
        styles={{
          section: { background: "var(--app-surface)" },
          header: { background: "var(--app-surface)", borderBottom: "1px solid var(--app-border)" },
          body: { padding: 0, background: "var(--app-surface)" },
        }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
};

export default AppLayout;
