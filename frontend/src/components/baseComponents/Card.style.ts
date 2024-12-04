import { motion } from "framer-motion";
import styled from "styled-components";

type CardProps = {
  primary?: boolean;
};

const Card = styled(motion.div)<CardProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bg};
  padding: ${(props) => props.theme.spacing.spacing_4};
  min-width: 200px;
  gap: 0 20px;
`;

export default Card;
