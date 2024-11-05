import StyledLanderIcon from "./LanderIcon.style";
import { Size } from "../../baseComponents/Icon.style";

export type LanderIconProps = {
  icon: string;
  top: number;
  left: number;
  size: Size;
};

const LanderIcon = ({ icon, top, left, size }: LanderIconProps) => {
  return (
    <StyledLanderIcon top={top} left={left} size={size}>
      <img className="icon__main" src={icon} />
    </StyledLanderIcon>
  );
};

export default LanderIcon;
