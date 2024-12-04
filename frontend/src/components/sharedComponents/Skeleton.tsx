import React from "react";
import StyledSkeleton from "./Skeleton.style";

const Skeleton: React.FC<{ height: number; width: number }> = ({
  height,
  width,
}) => {
  return <StyledSkeleton width={width} height={height} />;
};

export default Skeleton;
