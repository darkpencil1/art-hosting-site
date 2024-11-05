import StyledLanderQuestIcon from "./LanderQuestIcon.style";
import icon from "../../../resources/images/quest-icon.svg";
import Icon from "../../baseComponents/Icon";

const LanderQuestIcon = () => {
  return (
    <StyledLanderQuestIcon>
      <Icon play={true} icon={icon} size="lg" />
      <div>
        <h3>Tehtävä-</h3>
        <h3>julisteita</h3>
      </div>
    </StyledLanderQuestIcon>
  );
};

export default LanderQuestIcon;
