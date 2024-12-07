import styled from "styled-components";
import Row from "../baseComponents/Row.style";
import banner from "../../resources/images/website-banner-lg.jpg";

const StyledShopBanner = styled(Row)`
  height: 370px;
  position: relative;
  overflow: hidden;
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: start;

  border-radius: ${(p) => p.theme.br.br_large};
  border-right: 5px solid ${(p) => p.theme.colors.primary_shadow};
  border-bottom: 5px solid ${(p) => p.theme.colors.primary_shadow};

  .banner__text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${(p) => p.theme.colors.secondary}!important;
    text-shadow: ${(p) => p.theme.ts.base};
    margin-left: ${(p) => p.theme.spacing.spacing_5};
    margin-right: auto;
    z-index: 2;
  }

  .banner__title {
    font-size: 4rem;
    text-transform: uppercase;
    margin: ${(p) => p.theme.spacing.spacing_1} auto;
  }

  .banner__desc {
    font-size: 1.5rem;
    max-width: 600px;
    margin-top: 0;
  }
`;

export default StyledShopBanner;
