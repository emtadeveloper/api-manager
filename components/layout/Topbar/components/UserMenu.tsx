"use client";

import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { signOut } from "@/apis/apis";
import { useSessionStore } from "@/stores/auth";

const UserMenu = () => {
  const router = useRouter();

  const clearSession = useSessionStore((state) => state.clearSession);

  const handleLogout = async () => {
    try {
      const response = await signOut();

      if (!response.isSuccess) {
        console.error("Logout failed:", response.message);
        return;
      }

      clearSession();

      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "حساب کاربری",
      className: "!w-36 !py-2 !rounded-md !text-xs !text-[var(--app-text)] hover:!bg-[var(--app-surface-light)]",
      onClick: () => {
        console.log("رفتن به حساب کاربری");
      },
    },
    {
      key: "logout",
      label: "خروج",
      danger: true,
      className:
        "!w-36 !py-2 !rounded-md !text-xs !text-[var(--app-primary)] hover:!bg-[color-mix(in_srgb,var(--app-primary)_10%,transparent)]",
      onClick: handleLogout,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow trigger={["click"]}>
      <div className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-1 hover:bg-[var(--app-surface-light)]">
        <Avatar src="/images/user.png" size={30} className="shrink-0" />

        <CaretDownOutlined className="text-[10px] !text-[var(--app-text-muted)]" />
      </div>
    </Dropdown>
  );
};

export default UserMenu;
