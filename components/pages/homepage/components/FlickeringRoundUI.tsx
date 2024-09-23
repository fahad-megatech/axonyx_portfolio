import FlickeringGrid from "@/components/magicui/flickering-grid";

const FlickeringRoundUI = ({
  height = 850,
  width = 700,
  size = "600",
}: {
  height?: any;
  width?: any;
  size?: any;
}) => {
  return (
    <div className={`relative size-[600px] w-full overflow-hidden`}>
      <FlickeringGrid
        className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_300px,transparent_0)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={height}
        width={width}
      />
    </div>
  );
};

export default FlickeringRoundUI;
