import { Orientation } from "@shared/types/ProductInterface";
import StyledLanderProductImg from "./LanderProductImg.style";

export type LanderProductImgProps = {
  img: string;
  top: number;
  left: number;
  orientation: Orientation;
  className?: string;
};

const LanderProductImg = ({
  img,
  top,
  left,
  orientation,
  className,
}: LanderProductImgProps) => {
  return (
    <StyledLanderProductImg
      top={top}
      left={left}
      orientation={orientation}
      className={className}
    >
      <img className="lander__product-img" src={img} />
    </StyledLanderProductImg>
  );
};
export default LanderProductImg;
