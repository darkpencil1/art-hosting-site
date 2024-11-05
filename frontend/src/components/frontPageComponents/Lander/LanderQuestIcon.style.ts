import styled from "styled-components";

const StyledLanderQuestIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;

    > h3 {
      font-size: ${(p) => p.theme.fs.font_xl};
      margin: 0;
    }
  }
`;

export default StyledLanderQuestIcon;
