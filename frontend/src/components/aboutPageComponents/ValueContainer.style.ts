import styled from "styled-components";

const StyledValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 70px;
  margin: ${(p) => p.theme.spacing.spacing_4} 0;
`;

export default StyledValueContainer;
