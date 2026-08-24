"use client";

import { Avatar, Dropdown, Flex, Typography } from "antd";
import type { MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const UserMenu = () => {
  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "حساب کاربری",
      className: "!text-xs w-30",
      onClick: () => console.log("رفتن به حساب کاربری"),
    },
    {
      key: "logout",
      label: "خروج",
      className: "!text-xs w-30",
      danger: true,
      onClick: () => console.log("خروج از حساب"),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow trigger={["click"]}>
      <Flex align="center" gap={6} className="cursor-pointer ">
        <Avatar src="/images/user.png" size={30} style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }} />
        <Typography.Text
          style={{
            color: "var(--app-text)",
            fontWeight: 500,
            fontSize: 10,
          }}
        >
          حسین نجفی
        </Typography.Text>
        <CaretDownOutlined style={{ fontSize: 10, color: "var(--app-text)" }} />
      </Flex>
    </Dropdown>
  );
};

export default UserMenu;
