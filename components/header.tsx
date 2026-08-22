"use client";

import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-y border-app-border bg-app-background/85 px-4 backdrop-blur sm:px-8 lg:px-20">
      <div className="flex items-center gap-2">
        <Image src="/assets/images/isiran.png" width={40} height={40} alt="ایزایران" />
        <small className="text-app-text-muted">شرکت ایزایران</small>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-app-border bg-app-surface px-3 py-1">
        <small className="text-app-text-muted">کاربر: مدیرسیستم</small>
        <UserOutlined className="text-xl text-app-primary" />
      </div>
    </header>
  );
};

export default Header;
