import TeamMemberCard from "./TeamMemberCard";
import StyledTeamMemberContainer from "./TeamMemberContainer.style";
import members, { TeamMember } from "./teamMembers";

const TeamMemberContainer = () => {
  return (
    <StyledTeamMemberContainer>
      {members.map((member: TeamMember, i: number) => {
        return <TeamMemberCard {...member} key={i} />;
      })}
    </StyledTeamMemberContainer>
  );
};

export default TeamMemberContainer;
