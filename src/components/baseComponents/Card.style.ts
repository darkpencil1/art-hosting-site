import styled from "styled-components";

type CardProps = {
  primary?: boolean;
};

const Card = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  background-color: ${(props) => props.theme.bg};
  padding: ${(props) => props.theme.spacing.spacing_4};
  min-width: 200px;
  gap: 0 20px;
`;

export default Card;
