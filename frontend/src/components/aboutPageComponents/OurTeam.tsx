import StyledOurTeam from "./OurTeam.style";
import TeamMemberContainer from "./TeamMemberContainer";

const OurTeam = () => {
  return (
    <StyledOurTeam>
      <h1>Hi, this is me</h1>
      <div className="content-container">
        <TeamMemberContainer />
      </div>
    </StyledOurTeam>
  );
};
export default OurTeam;
