import StyledOurTeam from "./OurTeam.style";
import TeamMemberContainer from "./TeamMemberContainer";

const OurTeam = () => {
  return (
    <StyledOurTeam>
      <h1>Artist</h1>
      <div className="content-container">
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum.
        </p>
        <TeamMemberContainer />
      </div>
    </StyledOurTeam>
  );
};
export default OurTeam;
