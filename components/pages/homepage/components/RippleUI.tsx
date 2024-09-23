import Ripple from "@/components/magicui/ripple";

const RippleUI = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Ripple className="bg-transparent" />
    </div>
  );
};

export default RippleUI;
