import styled from "styled-components";

const StyledIntroText = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-self: center;

  .sidepane__text-container {
    text-align: center;
    margin: 0;
  }

  .sidepane__title-container > h1 {
    margin-bottom: 0;
  }

  .sidepane__title-container > h3 {
    margin-top: 0;
  }

  .sidepane__text-container > p {
    width: 80%;
    margin: auto;
  }

  .link {
    margin: 30px auto;
  }

  @media (max-width: 1600px) {
    width: 500px;
  }

  @media (max-width: 1450px) {
    width: 100%;
    flex-direction: column;

    .sidepane__text-container {
      display: flex;
      flex-direction: column;
      margin: 0 50px;

      > p {
        font-size: ${(p) => p.theme.fs.font_lg};
      }
    }
    .sidepane__title-container {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledIntroText;
