import styled from "styled-components";
import StyledIcon from "../../baseComponents/Icon.style";

type LanderIconProps = {
  top: number;
  left: number;
};

const StyledLanderIcon = styled(StyledIcon)<LanderIconProps>`
  position: absolute;
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;
`;

export default StyledLanderIcon;
