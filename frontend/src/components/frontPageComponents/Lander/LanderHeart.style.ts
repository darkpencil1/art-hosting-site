import styled from "styled-components";

const StyledLanderHeart = styled.div`
  /*For placing the golden line within the heart*/
  position: relative;

  .lander__heart {
    filter: drop-shadow(0 0 70px ${(p) => p.theme.colors.primary});
    z-index: 0;
  }
`;

export default StyledLanderHeart;
