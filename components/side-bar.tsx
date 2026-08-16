"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Image } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/rest-services", title: "سرویس ها" },
    { href: "/initialize", title: "تنظیمات" },
  ];

  return (
    <aside className="flex h-full min-h-0 w-64 flex-col overflow-hidden">
      {/* Top/sidebar fixed content */}
      <div className="shrink-0 text-end p-2 ">
        <MenuOutlined  className="cursor-pointer hover:text-orange-500!"/>

        <div className="grid w-full place-content-center">
          <Image
            src="/assets/images/rasan.png"
            width={120}
            height={50}
            alt="لوگو"
          />
        </div>

        <div className="m-2 mb-4 rounded-xl border p-2 text-center text-orange-500">
          رسان
          <p className="m-2 mt-2 rounded-xl border border-gray-700 bg-gray-800 p-2 text-xs text-white">
            سامانه مدیریت سرویس
          </p>
          <p className="m-2 mt-2 rounded-xl border border-gray-700 bg-gray-800 p-2 text-xs text-white">
            API &nbsp; MANAGER
          </p>
        </div>
      </div>

      {/* THIS SCROLLS */}
      <ul className="min-h-0 flex-1 overflow-y-auto">
        {links.map((link, index) => (
          <li key={`${link.href}-${index}`} className="relative w-full">
            <Link
              href={link.href}
              className={`mx-2 mb-2 block rounded-sm border border-gray-700 p-2 ${
                pathname.includes(link.href)
                  ? "border-orange-900 border-r-4 text-orange-500"
                  : "hover:shadow"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Fixed bottom */}
      <small className="shrink-0 pt-2 text-center">نسخه 1.0.0</small>
    </aside>
  );
};

export default SideBar;
