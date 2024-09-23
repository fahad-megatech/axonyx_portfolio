import React from "react";
import ConsultBtn from "./ConsultBtn";
import Link from "next/link";
import {
  Blocks,
  ChevronRight,
  House,
  LayoutGrid,
  LayoutPanelLeft,
  PanelsTopLeft,
  UserRound,
  UsersRound,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const MovileNav = ({ showMobileNav }: { showMobileNav: boolean }) => {
  return (
    <nav
      className={`
        absolute ${showMobileNav ? "top-full" : "-top-[100vh]"} 
        w-full h-screen 
        px-7 py-7 flex flex-col items-start justify-start gap-10
        transition-all duration-300 
        bg-gray-lite bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10
        `}
    >
      {siteConfig.navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`w-full group flex items-center justify-normal gap-3 ${
            index == 0 && ""
          }`}
        >
          <span
            className="
          flex items-center justify-start gap-3
          text-white bg-primary px-2 py-2
          cursor-pointer opacity-90
         
          rounded-lg border-[1px] border-gray-lite border-opacity-20
          group-hover:bg-gray-100 group-hover:text-gray-secondary transition-all duration-300
          "
          >
            {item.label.includes("Home") && <House />}
            {item.label.includes("About") && <UserRound />}
            {item.label.includes("Services") && <LayoutGrid />}
            {item.label.includes("Team") && <UsersRound />}
          </span>
          <span
            className="
          text-white 
          opacity-80 hover:opacity-100 
          cursor-pointer 
          flex items-center justify-start gap-3
          
          "
          >
            {item.label}
          </span>
        </Link>
      ))}

      <Link
        href={"#consult"}
        className={`
          sm:hidden
          rounded-md px-5  py-2 
          flex items-center justify-center gap-3 group
          transition-all duration-300 text-white 
          w-[170px]
          relative 
          text-sm border-[2px] border-primary hover:text-gray-primary after:absolute after:-z-10 after:content-[''] after:bg-primary after:origin-left after:h-full after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100
        `}
      >
        <span>Consult Now</span>
        <ChevronRight
          className={`
            size-4 text-white   
            group-hover:text-gray-primary
            group-hover:translate-x-2
            transition-all duration-300 
          `}
        />
      </Link>
    </nav>
  );
};

export default MovileNav;
