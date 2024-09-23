import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const ShinyText = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          `group rounded-full border border-black/5 transition-all ease-in hover:cursor-pointer 
          text-white
          bg-gray-lite bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
          `
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
          <span>✨ Introducing Magic UI</span>

          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export default ShinyText;
