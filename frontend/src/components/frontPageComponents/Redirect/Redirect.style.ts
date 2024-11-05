import styled from "styled-components";
import bg from "../../../resources/images/website-banner-lg.jpg";

const StyledRedirect = styled.div`
  height: 35vh;
  max-width: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${(p) => p.theme.br.br_large};
  border-right: 5px solid ${(p) => p.theme.colors.primary_shadow};
  border-bottom: 5px solid ${(p) => p.theme.colors.primary_shadow};
  margin: 0 auto 20px;
  overflow: hidden;
`;

export default StyledRedirect;
