import { useEffect, useState } from "react";
import { Orientation } from "@shared/types/ProductInterface";
import Icon from "../../baseComponents/Icon";
import StyledLanderImg, { StyledLanderImgProps } from "./LanderImg.style";

export type LanderImgProps = {
  img: string;
  icon?: React.ReactNode;
  flexDirection?: StyledLanderImgProps["flexDirection"];
  orientation: Orientation;
  swarmSize?: number;
  swarmIcon?: string;
  className?: string;
};

const LanderImg = ({
  img,
  icon,
  swarmIcon,
  flexDirection,
  orientation,
  swarmSize,
  className,
}: LanderImgProps) => {
  const [swarm, setSwarm] = useState<string[]>([]);

  useEffect(() => {
    if (swarmSize && swarmIcon) {
      const items: string[] = [];
      for (let i = 0; i < swarmSize; i++) items.push(swarmIcon);
      setSwarm(items);
    }
  }, [swarmSize, swarmIcon]);

  return (
    <StyledLanderImg
      orientation={orientation}
      flexDirection={flexDirection}
      className={className}
    >
      <img className="lander__product-img" src={img} />
      {icon}
      {swarm?.map((icon: string, i: number) => {
        return (
          <div className="swarm__icon-container" key={i}>
            <Icon icon={icon} size="sm" />
          </div>
        );
      })}
    </StyledLanderImg>
  );
};
export default LanderImg;
