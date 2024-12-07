import styled from "styled-components";

const StyledCatalog = styled.div`
  margin: 0 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  .catalog__title {
    margin: auto;
    margin-top: 10px;
    text-align: center;
    width: 50%;
    > h3 {
      margin-top: 10px;
      margin-bottom: 0;
    }
    > .catalog__title-img {
      height: 200px;
    }
  }
`;

export default StyledCatalog;
