import styled from "styled-components";

const StyledValueDisplay = styled.div`
  width: 100%;

  h1 {
    font-size: 3rem;
    margin: ${(p) => p.theme.spacing.spacing_1} auto;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }
`;
export default StyledValueDisplay;
