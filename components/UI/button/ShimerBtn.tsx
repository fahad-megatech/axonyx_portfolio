import ShimmerButton from "@/components/magicui/shimmer-button";
import React from "react";

const ShimmerBtn = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) => {
  return (
    <ShimmerButton
      background=""
      borderRadius="6px"
      shimmerColor="#1BD9D1"
      shimmerDuration="2s"
      shimmerSize="0.1em"
      className={`${classes}`}
    >
      {children}
    </ShimmerButton>
  );
};

export default ShimmerBtn;
