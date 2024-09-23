import BoxReveal from "@/components/magicui/box-reveal";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const HeaderText = () => {
  return (
    <div className="h-full w-full flex flex-col items-start justify-center  mt-5 gap-6">
      {/* <BoxReveal boxColor={"#1BD9D1"} duration={0.5}>
        <span className="flex flex-col items-center justify-start ">
          <div className="w-full flex items-center justify-start gap-3">
            <span className="w-[70px] h-[2px] rounded-full bg-primary opacity-70"></span>
            <span className="font-bold tracking-wider uppercase text-xl">
              axonyx
            </span>
          </div>
          <div className="w-full flex items-center justify-start gap-3">
            <span className="w-[30px] h-[2px] rounded-full bg-primary opacity-70"></span>
            <span className="tracking-wider capitalize text-sm">
              inovation beyond edge
            </span>
          </div>
        </span>
      </BoxReveal> */}

      <BoxReveal boxColor={"#1BD9D1"} duration={0.5}>
        <div className="w-[70%] max-md:w-full font-extralight">
          Bringing ideas to life through innovative solutions. Let's build
          something remarkable together, transforming visions into digital
          reality.
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#1BD9D1"} duration={0.5}>
        <div className=" flex max-[900px]:flex-col max-md:flex-row items-center justify-center gap-5">
          <Link
            href={"#learnMore"}
            className="
           text-white max-md:text-xs
            border-[2px] w-[170px] max-md:w-[150px] border-primary rounded-md px-5 py-2 text-sm
            flex items-center justify-center gap-3 group
            transition-all duration-300 hover:text-gray-primary
            hover:shadow-[0_3px_10px_2px_rgba(27,217,209,0.5)]
            hover:scale-[1.05]

            relative 
           after:absolute after:-z-10 after:content-[''] after:bg-primary after:origin-left after:h-full after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100
            "
          >
            <span>Learn More</span>
            <ChevronRight
              className="
            size-4 text-white   
            group-hover:text-gray-primary
            group-hover:translate-x-2
            transition-all duration-300 "
            />
          </Link>
          <Link
            href={"#consult"}
            className="
           text-gray-primary w-[170px] max-md:w-[150px] max-md:text-xs
            border-[2px] border-primary bg-primary rounded-md px-5 py-2 text-sm
            flex items-center justify-center gap-3 group
            hover:shadow-[0_3px_10px_2px_rgba(27,217,209,0.5)]
            hover:scale-[1.05]
             transition-all duration-300 
            "
          >
            <span>Consult Now</span>
            <ArrowRight
              className="
            size-4 text-gray-primary   
            group-hover:-rotate-[40deg]
            transition-all duration-300 "
            />
          </Link>
        </div>
      </BoxReveal>
    </div>
  );
};

export default HeaderText;
