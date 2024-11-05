import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLander = styled(motion.div)`
  text-align: center;
  margin: 0 auto 100px auto;
  max-width: 2000px;

  .lander__row {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  .lander__row--gapped {
    gap: 100px;
  }

  .lander__text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .lander__text-container > p {
    width: 80%;
    max-width: 700px;
  }

  .lander__title {
    margin: 0;
  }

  .lander__subtitle {
    margin: 0;
  }

  @media (max-width: 1400px) {
    .lander__row--gapped {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }

  @media (max-width: 1600px) {
    flex-direction: column-reverse;
    gap: 50px;
  }

  @media (min-width: 2200px) {
    gap: 150px;
    .lander__text-container {
      justify-content: center;
    }
  }
`;
export default StyledLander;
