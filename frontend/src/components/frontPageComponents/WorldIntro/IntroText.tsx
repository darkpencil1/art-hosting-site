import Hyperlink from "../../baseComponents/Hyperlink";
import StyledIntroText from "./IntroText.style";

const IntroText = () => {
  return (
    <StyledIntroText>
      <div className="sidepane__text-container">
        <div className="sidepane__title-container">
          <h1>Shop</h1>
          <h3>Cover the walls with some art!</h3>
        </div>
        <p>
          The shop is not actually operational, but you can still flip through
          it :-)
        </p>
      </div>
      <Hyperlink href="/shop" content="To the shop" />
    </StyledIntroText>
  );
};

export default IntroText;
