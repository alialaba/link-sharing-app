'use client'
import React from "react";

import Image from "next/image";
import Button from "./Button";
import { FaLink, FaUser, FaEye } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

const pathname  = usePathname()


const tabs = [
  { id: "links", text: "Links", icon: <FaLink />, href: "/dashboard/links" },
  { id: "profile", text: "Profile details", icon: <FaUser />, href: "/dashboard/profile" },
];

const isActiveTab = (tabHref: string) => {
  if (tabHref === "/dashboard/links") {
    return pathname === "/dashboard/links" || pathname === "/dashboard";
  }
  return pathname === tabHref;
};


  return (
    <div className="">
      <header className="flex  justify-between align-center p-[16px] bg-white rounded-[12px]">
        <div className="logo">
          <Image
            src="/logo.svg"
            alt="devlink Logo"
            className="hidden md:block"
            width={146}
            height={32}
            priority
          />

          <Image
            src="/mobile-logo.svg"
            alt="devlink mobile Logo"
            className="block md:hidden "
            width={32}
            height={32}
            priority
          />
        </div>

        <div className="mid flex align-center space-x-4">
     
          {tabs.map((tab)=>(
               <Link href={tab.href} key={tab.id} passHref>
            <Button
                hideTextOnMobile={true}
                text={tab.text}
                icon={tab.icon}
                className={`py-[11px] rounded-lg px-[27px] ${
                  isActiveTab(tab.href)
                    ? "text-[#633CFF] bg-[#EFEBFF]"
                    : "text-[#000] hover:text-[#633CFF]"
                }`}
              />
             </Link>
          ))}
         
          {/* <Link href={"/"}>
          <Button
            hideTextOnMobile={true}
            text="Links"
            icon={<FaLink />}
            className="text-[#000] hover:text-[#633CFF] focus-within:text-[#633CFF]  py-[11px] rounded-lg px-[27px] focus-within:bg-[#EFEBFF]"
          />
          </Link>
          <Button
            hideTextOnMobile={true}
            text="Profile details"
            icon={<FaUser />}
            className="text-[#000] focus-within:text-[#633CFF] py-[11px] rounded-lg px-[27px] focus-within:bg-[#EFEBFF]"
          /> */}
        </div>

        {/* <div className="flex align-center"> */}
        <Button
          hideTextOnMobile={true}
          icon={<FaEye className="block md:hidden" />}
          text="Preview"
          className="border-[#633CFF] border text-[#633CFF]  text-center  py-[11px] rounded-lg px-[27px] hover:bg-[#EFEBFF]"
        />
        {/* </div> */}
      </header>
    </div>
  );
};

export default Header;
