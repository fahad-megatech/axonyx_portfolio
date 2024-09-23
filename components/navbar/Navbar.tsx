"use client";

import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../public/logos/AXO5.png";
import Image from "next/image";
import ConsultBtn from "./components/ConsultBtn";
import MovileNav from "./components/MovileNav";

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState<boolean>(false);
  const [showMinimalNav, setShowMinimalNav] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileNav]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        setShowMinimalNav(true);
      } else {
        setShowMinimalNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsMobileNavActive(true);
    } else {
      setIsMobileNavActive(false);
    }
  }, []);

  return (
    <div
      className={`w-full z-[1000] fixed top-0
      transition-all duration-300
     `}
    >
      <nav
        className={`
          w-full px-10  max-md:px-5 py-3 flex items-center  z-[1000] relative
          ${
            (!showMinimalNav || isMobileNavActive || !showMinimalNav) &&
            "bg-gray-lite bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10"
          }
          ${
            showMinimalNav && !isMobileNavActive
              ? "justify-center"
              : "justify-between"
          }
          `}
      >
        {(!showMinimalNav || isMobileNavActive) && (
          <div className="">
            <Image
              src={logo}
              height={300}
              width={300}
              alt="logo image"
              className="w-[150px] transition-all duration-300"
            />
          </div>
        )}

        {/* Large screen Menu items */}
        <NavLinks showMinimalNav={showMinimalNav} />

        <div className="text-white flex items-center justify-center gap-3">
          <div
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="min-[900px]:hidden"
          >
            {!showMobileNav ? (
              <Menu size={25} strokeWidth={1.5} />
            ) : (
              <X size={25} strokeWidth={1.5} />
            )}
          </div>

          {(!showMinimalNav || isMobileNavActive) && <ConsultBtn />}
        </div>
      </nav>

      {/* Mobile Navbar menu items */}
      <MovileNav showMobileNav={showMobileNav} />
    </div>
  );
};

const NavLinks = ({ showMinimalNav }: { showMinimalNav: boolean }) => {
  return (
    <div
      className={`
    relative w-fit border-[1px] border-opacity-20 border-white rounded-lg 
    px-7  flex items-center justify-center gap-10
    max-[900px]:hidden
    
    ${
      showMinimalNav
        ? "bg-gray-lite bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 py-1"
        : "py-3"
    }
  `}
    >
      {siteConfig.navItems.map((item, index) => (
        <div key={index} className="w-full flex items-center justify-center ">
          <Link
            href={item.href}
            className={`
        w-fit relative text-white
        opacity-80 hover:opacity-100 
        transition-all duration-300 
        cursor-pointer 
        flex items-center justify-start gap-2

         ${showMinimalNav ? "text-xs" : "text-sm "}
        
        before:content-[''] before:absolute before:h-[2px] before:bg-white before:rounded-2xl before:w-full before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:origin-left before:mt-6
        
        
        `}
          >
            {item.label}
          </Link>
        </div>
      ))}

      {showMinimalNav && (
        <div className="w-full">
          <ConsultBtn size={"sm"} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
