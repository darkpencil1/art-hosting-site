import styled from "styled-components";
import bg from "../../resources/images/website-banner-lg.jpg";

const StyledMissionBanner = styled.div`
  height: 40vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-right: 5px solid ${(p) => p.theme.colors.primary_shadow};
  border-bottom: 5px solid ${(p) => p.theme.colors.primary_shadow};
  border-radius: ${(p) => p.theme.br.br_large};

  overflow: hidden;

  color: ${(p) => p.theme.colors.secondary}!important;
  text-shadow: ${(p) => p.theme.ts.base};

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
export default StyledMissionBanner;
