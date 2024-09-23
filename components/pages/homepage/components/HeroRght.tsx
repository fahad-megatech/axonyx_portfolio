import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

import img1 from "../../../../public/header/img1.jpg";
import img2 from "../../../../public/header/img2.jpg";
import img3 from "../../../../public/header/img3.jpg";
import img4 from "../../../../public/header/img4.jpg";
import img5 from "../../../../public/header/img5.jpg";
import img6 from "../../../../public/header/img6.jpg";
import img7 from "../../../../public/header/img7.jpg";
import img8 from "../../../../public/header/img8.jpg";
import img9 from "../../../../public/header/img9.jpg";
import img10 from "../../../../public/header/img10.jpg";
import img11 from "../../../../public/header/img11.jpg";
import img12 from "../../../../public/header/img12.jpg";
import img13 from "../../../../public/header/img13.jpg";
import img14 from "../../../../public/header/img14.jpg";
import img15 from "../../../../public/header/img15.jpg";
import img16 from "../../../../public/header/img16.jpg";
import img17 from "../../../../public/header/img17.jpg";
import Image from "next/image";

const firstRow = [img1, img2, img3, img4, img5, img6];
const secondRow = [img7, img8, img9, img10, img11, img12];
const thirdRow = [img13, img14, img15, img16, img17];

const ImageCard = ({ image }: { image: any }) => {
  return (
    <figure
      className={cn(
        "relative h-full max-md:h-[300px] w-52 cursor-pointer overflow-hidden rounded-xl opacity-70 hover:opacity-100 transition-all duration-300 hover:brightness-110 max-md:opacity-100 "
      )}
    >
      <Image
        height={500}
        width={500}
        alt="header-image"
        src={image}
        className="h-full object-cover object-top"
      />
    </figure>
  );
};

const HeroRght = () => {
  return (
    <div className="relative rotate-6 max-md:rotate-0 flex h-[600px] items-center justify-center overflow-hidden max-md:w-screen">
      <Marquee
        pauseOnHover
        vertical={window.innerWidth <= 768 ? false : true}
        className="[--duration:40s]"
      >
        {firstRow.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical={window.innerWidth <= 768 ? false : true}
        className="[--duration:40s] max-md:hidden"
      >
        {secondRow.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical={window.innerWidth <= 768 ? false : true}
        className="[--duration:40s] max-lg:hidden"
      >
        {thirdRow.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </Marquee>

      <div className="max-md:hidden pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-backgroud-dark "></div>
      <div className="max-md:hidden pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-backgroud-dark "></div>

      <div className="md:hidden pointer-events-none absolute  left-0 h-full w-[8%] bg-gradient-to-r from-backgroud-dark "></div>
      <div className="md:hidden pointer-events-none absolute  right-0 h-full w-[8%] bg-gradient-to-l from-backgroud-dark "></div>
    </div>
  );
};

export default HeroRght;
