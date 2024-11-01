import styled from "styled-components";

export type SpinnerProps = {
  width?: string;
  height?: string;
};

const StyledSpinner = styled.div<SpinnerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.width ? p.width : "100%")};
  height: ${(p) => (p.height ? p.height : "100%")};
`;

export default StyledSpinner;
