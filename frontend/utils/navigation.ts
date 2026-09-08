import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

export const navLinks = [
  {
    href: "/rest-services",
    title: "سرویس‌ها",
    icon: AppstoreOutlined,
  },
  {
    href: "/initialize",
    title: "تنظیمات سرویس",
    icon: SettingOutlined,
  },
] as const;
