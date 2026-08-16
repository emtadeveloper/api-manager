"use client";

import { UserOutlined } from "@ant-design/icons";
import { Image } from "antd";

const Header = () => {
  return (
    <>
      <header className="border border-gray-50 border-r-0 border-l-0 flex justify-between px-20 items-center    ">
        <div className="flex items-center" >
        <Image src="/assets/images/isiran.png" width={50} height={50} alt="ایزایران"/>
        <small>شرکت ایزایران</small>
        </div>
       <div className="flex items-center gap-2" >
        <small>کاربر : مدیرسیستم</small>
        <UserOutlined   className="text-orange-500! text-2xl border rounded-full p-1"/> 
        </div>
        {/* <div className="   h-15   w-full flex justify-center items-center">
                <div className="absolute h-full bg-white shadow-gray-300 shadow-inner w-11/12 p-2 rounded-xl flex justify-between items-center">
                  <div className="w-full pb-1  rounded-xl px-5 flex text-blue-800 justify-between">
                    <span>سامانه مدیریت وب سرویس</span>
                    <span>کاربر</span>
                  </div>
                </div>
              </div> */}
      </header>
    </>
  );
};

export default Header;
