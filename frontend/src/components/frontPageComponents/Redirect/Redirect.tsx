import StyledRedirect from "./Redirect.style";
import Button from "../../baseComponents/Button";
import Line from "../../baseComponents/Line";
import redirectSvg from "./redirectLine";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog`);
  };
  return (
    <StyledRedirect ref={containerRef}>
      <Button
        className="redirect__btn"
        size="lg"
        type="secondary"
        text="Browse the catalog"
        onClick={() => handleClick()}
      />
      <Line container={containerRef} svg={redirectSvg} />
    </StyledRedirect>
  );
};

export default Redirect;
