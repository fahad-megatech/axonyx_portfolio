import React from "react";

import logo from "@/public/logos/AXO4.png";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronRight,
  Copyright,
  Facebook,
  House,
  LayoutGrid,
  Linkedin,
  Twitter,
  UserRound,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="z-10 w-full h-full py-20 flex flex-col items-center justify-center gap-10">
      <div className="w-full h-full grid grid-cols-2 max-sm:grid-cols-1 items-center justify-center gap-10">
        <div className="w-full h-full flex items-start justify-start">
          <Image className="" src={logo} height={300} width={300} alt="logo" />
        </div>

        <div className="w-full h-full flex max-sm:flex-col items-start justify-end gap-10">
          <CompanyLinks />

          <div className="w-fit h-full flex flex-col items-center justify-start gap-8">
            <button
              className="
           text-white
            border-[2px] w-[170px] border-primary rounded-md px-5 py-2 text-sm
            flex items-center justify-center gap-3 group
            transition-all duration-300 hover:text-gray-primary

            relative 
            after:absolute after:-z-10 after:content-[''] after:bg-primary after:origin-left after:h-full after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100

            "
            >
              <span>Consult Now</span>
              <ChevronRight
                className="
            size-4 text-white   
            group-hover:text-gray-primary
            group-hover:translate-x-2
            transition-all duration-300 "
              />
            </button>

            <div className="w-full flex items-center justify-center gap-5">
              <Linkedin className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer" />
              <Facebook className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer" />
              <Twitter className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[80%] h-[2px] bg-primary/70"></div>

        <div className="text-white/70 tracking-wider text-sm mt-10 flex items-center justify-center gap-2">
          <span>Copyright</span> <Copyright size={8} /> <span>Axonyx 2024</span>
        </div>
      </div>
    </footer>
  );
};

const CompanyLinks = () => {
  return (
    <div className="w-fit h-full flex flex-col items-center justify-start">
      <div className="w-fit self-start mb-5 flex flex-col items-start justify-center">
        <span>Company</span>
        <span className="w-full h-[2px] mt-2 bg-primary"></span>
      </div>

      <div className="w-full text-sm flex flex-col items-start justify-center gap-4">
        <FooterLinks icon={<House size={16} />} label={"Home"} url={"/"} />
        <FooterLinks
          icon={<UserRound size={16} />}
          label={"About"}
          url={"#about"}
        />
        <FooterLinks
          icon={<LayoutGrid size={16} />}
          label={"Services"}
          url={"#services"}
        />
        <FooterLinks
          icon={<UsersRound size={16} />}
          label={"Team"}
          url={"#team"}
        />
      </div>
    </div>
  );
};

const FooterLinks = ({
  icon,
  label,
  url,
}: {
  icon: any;
  label: any;
  url: string;
}) => {
  return (
    <Link
      href={url}
      className={cn(
        "w-fit relative flex items-center justify-start gap-2",
        "text-white/80 hover:text-white transition-all duration-300 cursor-pointer",

        "before:content-[''] before:absolute before:h-[2px] before:bg-primary before:rounded-2xl before:w-full before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:origin-left before:mt-10"
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default Footer;
