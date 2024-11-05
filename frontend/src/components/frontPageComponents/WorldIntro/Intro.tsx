import StyledIntro from "./Intro.style";
import IntroText from "./IntroText";
import IntroCharacters from "./IntroCharacters";

const Intro = () => {
  return (
    <StyledIntro>
      <IntroText />
      <IntroCharacters />
    </StyledIntro>
  );
};

export default Intro;
