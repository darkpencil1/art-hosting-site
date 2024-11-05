import { motion } from "framer-motion";
import styled from "styled-components";

const StyledLanderTagImg = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: -170px;
  margin-left: -600px;
  z-index: 1;
  order: 3;

  > div:first-of-type {
    order: 2;
    margin-top: 50px;
  }

  .lander__product-img {
    order: 3;
    width: 200px;
    height: 200px;
    border-radius: ${(p) => p.theme.br.br_medium};
  }

  .swarm__icon {
    height: 40px;
  }

  .swarm__icon-container--0 {
    order: 1;
  }
  .swarm__icon-container--1 {
    order: 3;
    margin-top: 100px;
  }

  @media (max-width: 1200px) {
  }
`;

export default StyledLanderTagImg;
