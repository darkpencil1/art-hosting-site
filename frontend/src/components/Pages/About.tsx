import React from "react";
import MissionBanner from "../aboutPageComponents/MissionBanner";
import OurStory from "../aboutPageComponents/OurStory";
import OurTeam from "../aboutPageComponents/OurTeam";
import OurValues from "../aboutPageComponents/OurValues";
import StyledAboutPage from "./About.style";

const About: React.FC = () => {
  return (
    <StyledAboutPage>
      <MissionBanner />
      <OurStory />
      <OurValues />
      <OurTeam />
    </StyledAboutPage>
  );
};

export default About;
