"use client";

import React from "react";

import { Drawer, Layout } from "antd";

import SidebarContent from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const { Sider, Content } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleBreakpoint = (broken: boolean) => {
    setIsMobile(broken);

    if (!broken) {
      setDrawerOpen(false);
    }
  };

  const openMobileMenu = () => {
    if (isMobile) {
      setDrawerOpen(true);
    }
  };

  const desktopSidebarContent = (
    <SidebarContent collapsed={collapsed} onToggleCollapse={() => setCollapsed((prev) => !prev)} />
  );

  const mobileSidebarContent = (
    <SidebarContent collapsed={false} onToggleCollapse={() => {}} onNavigate={closeDrawer} />
  );

  return (
    <Layout className="app-shell">
      {/* Desktop Sidebar */}
      <Sider
        breakpoint="lg"
        collapsed={collapsed}
        collapsedWidth={90}
        trigger={null}
        width={280}
        onBreakpoint={handleBreakpoint}
        className="app-sider"
      >
        {desktopSidebarContent}
      </Sider>

      <Layout className="app-shell">
        <Topbar onMenuClick={openMobileMenu} />

        <Content className="app-content">{children}</Content>
      </Layout>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        placement="right"
        size={280}
        className="app-drawer-surface"
        closable
      >
        {mobileSidebarContent}
      </Drawer>
    </Layout>
  );
};

export default AppLayout;
