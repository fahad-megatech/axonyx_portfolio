import Globe from "@/components/magicui/globe";

const GlobeUI = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden ">
      {/* <span className="absolute top-[-100%] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        Globe
      </span> */}
      <Globe className=" max-w-[60vw]" />

      {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
    </div>
  );
};

export default GlobeUI;
