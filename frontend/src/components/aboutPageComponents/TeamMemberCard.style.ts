import styled from "styled-components";
import Card from "../baseComponents/Card.style";

const content_gap = "10px";

const StyledTeamMemberCard = styled(Card)`
  flex-direction: row-reverse;
  height: auto;
  min-height: 320px;
  min-width: 750px;
  width: 750px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.bg};
  border-radius: 15px;
  padding: 0;

  .member__img-container {
    flex: 1 0;
    max-width: 100%;
    width: ${(p) => p.theme.column.col_6};
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 0 15px 15px 0;
    background-color: ${(p) => p.theme.colors.white};

    .member__img {
      object-fit: contain;
      max-width: 300px;
      max-height: 300px;
      border-radius: ${(p) => p.theme.br.br_medium};
    }
    .member__img-desc {
      font-size: ${(p) => p.theme.fs.font_xs};
      max-width: 300px;
      margin-top: 10px;
    }
  }

  .member__text-container {
    width: calc(${(p) => p.theme.column.col_6} - ${content_gap});
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 30px;
    border-radius: 0 15px 15px 0;
  }

  .member__text {
    margin: 0 auto ${(p) => p.theme.spacing.spacing_1};
  }

  .member__title {
    width: auto;
    margin: 0 auto ${(p) => p.theme.spacing.spacing_2};
  }
`;

export default StyledTeamMemberCard;
