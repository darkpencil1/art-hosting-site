import StyledLanderTagIcon from "./LanderTagIcon.style";
import icon from "../../../resources/images/achievement-tag-icon.svg";
import Icon from "../../baseComponents/Icon";

const LanderTagIcon = () => {
  return (
    <StyledLanderTagIcon>
      <Icon play={true} icon={icon} size="sm" />
      <h3>SAAVUTUSMERKIT</h3>
    </StyledLanderTagIcon>
  );
};

export default LanderTagIcon;
