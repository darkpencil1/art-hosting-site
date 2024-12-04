import React from "react";
import Banner from "../sharedComponents/Banner";
import OurStory from "../aboutPageComponents/OurStory";
import OurTeam from "../aboutPageComponents/OurTeam";
import OurValues from "../aboutPageComponents/OurValues";
import StyledAboutPage from "./About.style";

const About: React.FC = () => {
  return (
    <StyledAboutPage>
      <Banner title="Mission" short="Make art that inspires wonder" />
      <OurStory />
      <OurValues />
      <OurTeam />
    </StyledAboutPage>
  );
};

export default About;
