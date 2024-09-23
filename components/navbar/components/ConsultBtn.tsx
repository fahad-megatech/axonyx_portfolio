import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ConsultBtn = ({ size }: { size?: string }) => {
  return (
    <Link
      href={"#consult"}
      className={`
    max-sm:hidden
     rounded-md px-5  py-2 
    flex items-center justify-center gap-3 group
     transition-all duration-300 text-white 
w-[170px]
     ${
       size == "sm"
         ? "text-xs"
         : "text-sm border-[2px] border-primary hover:text-gray-primary after:absolute after:-z-10 after:content-[''] after:bg-primary after:origin-left after:h-full after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
     }

   relative 

    `}
    >
      <span>Consult Now</span>
      <ChevronRight
        className={`
    size-4 text-white   
    
    group-hover:translate-x-2
    transition-all duration-300 
    
    ${size == "sm" ? "" : "group-hover:text-gray-primary"}
    `}
      />
    </Link>
  );
};

export default ConsultBtn;
