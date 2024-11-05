import Hyperlink from "../../baseComponents/Hyperlink";
import StyledIntroText from "./IntroText.style";

const IntroText = () => {
  return (
    <StyledIntroText>
      <div className="sidepane__text-container">
        <div className="sidepane__title-container">
          <h1>Shop</h1>
          <h3>Cover the walls with your active quests!</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <Hyperlink href="/shop" content="To the shop" />
    </StyledIntroText>
  );
};

export default IntroText;
