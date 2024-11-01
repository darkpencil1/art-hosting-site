import logo from "../../resources/images/logo.png";
import Img from "./Img";
import StyledSpinner, { SpinnerProps } from "./Spinner.style";

const Spinner = ({ width, height }: SpinnerProps) => {
  return (
    <StyledSpinner width={width} height={height}>
      <Img
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        src={logo}
        height={"100px"}
        width={"100px"}
      />
    </StyledSpinner>
  );
};

export default Spinner;
