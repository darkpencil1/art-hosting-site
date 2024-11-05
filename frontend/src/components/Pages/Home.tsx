import React from "react";
import Redirect from "../frontPageComponents/Redirect/Redirect";
import Lander from "../frontPageComponents/Lander/Lander";
import Intro from "../frontPageComponents/WorldIntro/Intro";
import AboutUs from "../frontPageComponents/About/AboutUs";
import StyledHome from "./Home.style";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Lander />
      <AboutUs />
      <Intro />
      <Redirect />
    </StyledHome>
  );
};

export default Home;
