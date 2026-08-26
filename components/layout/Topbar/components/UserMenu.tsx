"use client";

import { Avatar, Dropdown, Typography } from "antd";
import type { MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const UserMenu = () => {
  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "حساب کاربری",
      className: "!w-36 !py-2 !rounded-md !text-xs !text-[var(--app-text)] hover:!bg-[var(--app-surface-light)]",
      onClick: () => console.log("رفتن به حساب کاربری"),
    },
    {
      key: "logout",
      label: "خروج",
      danger: true,
      className:
        "!w-36 !rounded- !py-2  md !text-xs !text-[var(--app-primary)] hover:!bg-[color-mix(in_srgb,var(--app-primary)_10%,transparent)]",
      onClick: () => console.log("خروج از حساب"),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow trigger={["click"]} className="rounded-md border-none">
      <div className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-1 hover:bg-[var(--app-surface-light)]">
        <Avatar src="/images/user.png" size={30} className="shrink-0" />

        <Typography.Text className="!m-0 !text-xs !font-medium !text-[var(--app-text)]">حسین نجفی</Typography.Text>

        <CaretDownOutlined className="text-[10px] !text-[var(--app-text-muted)]" />
      </div>
    </Dropdown>
  );
};

export default UserMenu;
