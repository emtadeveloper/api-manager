"use client";

import ISIRANLogo from "../../../public/icons/ISIRANLogo";

export default function SideLogin() {
  return (
    <div className="hidden lg:flex lg:w-1/3 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#141a21]" />

      <div className="absolute top-6 right-6 z-20">
        <ISIRANLogo color="white" className="w-[70px] h-[70px] " />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg mb-4">
          سامانه مدیریت سرویس
        </h1>

        <p className="mt-3 text-lg md:text-xl text-white/80 font-light max-w-xs drop-shadow">
          رسان
        </p>

        <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
          <span className="h-px w-8 bg-white/30" />
          <span>امن • سریع • هوشمند</span>
          <span className="h-px w-8 bg-white/30" />
        </div>
      </div>
    </div>
  );
}
