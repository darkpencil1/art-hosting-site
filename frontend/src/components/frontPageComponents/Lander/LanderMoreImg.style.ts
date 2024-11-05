import { motion } from "framer-motion";
import styled from "styled-components";
import bg from "../../../resources/images/lander-more-bg.png";

const StyledLanderTagImg = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: -200px;
  align-self: end;
  z-index: 1;
  order: 4;

  .lander__more-img-container {
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-bottom: 5px solid ${(props) => props.theme.colors.gray};
    border-right: 5px solid ${(props) => props.theme.colors.gray};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
    border-radius: 15px;
    background-color: ${(p) => p.theme.colors.bg};
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px;
    width: 300px;

    margin-bottom: -100px;

    .lander__more-img {
      width: 80px;
    }

    h3 {
      margin: 0;
    }
  }

  .swarm__icon {
    height: 40px;
  }

  .swarm__icon-container--0 {
    order: 1;
  }

  .swarm__icon-container--1 {
    order: 3;
    margin-left: -400px;
    margin-bottom: 100px;
  }

  .swarm__icon-container--2 {
    order: 4;
    margin-top: -100px;
  }

  @media (max-width: 1400px) {
    .lander__more-img-container {
      width: 250px;
    }
  }
`;

export default StyledLanderTagImg;
