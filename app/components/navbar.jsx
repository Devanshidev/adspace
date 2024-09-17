"use client";
import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import image1 from "../assets/icons1.png";
import image2 from "../assets/Icons.png";

import image6 from "../assets/help-circle.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const path = usePathname();
  return (
    <>
      <div className="h-screen  bg-[#FFFFFF] ">
        <div className="h-full text-black bg-white ">
          <div className="py-[35px] flex  flex-col justify-between h-full px-[15px] ">
            <div className="flex justify-center  items-center  ">
              <div className="flex justify-center gap-3 sm:text-xl md:text-2xl  bg-white items-center font-bold px-2 py-1">
                <Image className="h-[26px] w-[28px] " src={image1} />
                <div>Ad Space</div>
              </div>
            </div>

            <div className="flex flex-col space-y-[10px] -mt-[60px] ">
              <Link
                href={"/main/dashboard"}
                className={`${
                  path === "/main/dashboard" ? "bg-[#F8F9FA] font-semibold" : "font-normal"
                } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl `}
              >
                <Image className="h-[23px] w-[23px]" src={image2} />
                Dashboard
              </Link>
              <Link
                href={"/main/ads"}
                className={`${
                  path === "/main/ads" ? "bg-[#F8F9FA] font-semibold" : "font-normal"
                } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl`}
              >
                {/* <Image className="h-[16px] w-[16px]" src={image3} /> */}
                <FiPlus />
                Create Ad
              </Link>
              <Link
                href={"/main/wallet"}
                className={`${
                  path === "/main/wallet" ? "bg-[#F8F9FA] font-semibold" : "font-normal"
                } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl`}
              >
                {/* <Image className="h-[16px] w-[16px]" src={image4} /> */}
                <BiWallet />
                Billing
              </Link>
              <Link
                href={"/main/settings"}
                className={`${
                  path === "/main/settings" ? "bg-[#F8F9FA] font-bold" : "font-normal"
                } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl`}
              >
                {/* <Image className="h-[16px] w-[16px]" src={image5} /> */}
                <FiSettings />

                Settings
              </Link>
            </div>

            <div className=" flex gap-[18px] items-center px-4 text-[15px] text-gray-400">
              <Image className="h-[16px] w-[16px]" src={image6} />
              <div>Help</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
