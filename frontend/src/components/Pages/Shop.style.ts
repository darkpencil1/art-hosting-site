import styled from "styled-components";

const StyledShop = styled.div`
  margin: 0 3rem;
  .product__wrapper {
    margin: ${(p) => p.theme.spacing.spacing_6} 0;
    gap: 100px;
    justify-content: center;
  }
`;

export default StyledShop;
