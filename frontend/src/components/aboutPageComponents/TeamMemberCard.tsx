import Row from "../baseComponents/Row.style";
import Img from "../baseComponents/Img";
import StyledTeamMemberCard from "./TeamMemberCard.style";
import { TeamMember } from "./teamMembers";

const TeamMemberCard = ({ img, name, description, imgDesc }: TeamMember) => {
  return (
    <StyledTeamMemberCard>
      <div className="member__img-container">
        <Img className="member__img" src={img} />
        <p className="member__img-desc">{imgDesc}</p>
      </div>
      <Row className="member__text-container">
        <h2 className="member__title">{name}</h2>
        <div className="member__text">{description}</div>
      </Row>
    </StyledTeamMemberCard>
  );
};

export default TeamMemberCard;
