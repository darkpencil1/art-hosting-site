import { motion } from "framer-motion";
import styled from "styled-components";
import { Orientation } from "@shared/types/ProductInterface";

export type StyledLanderImgProps = {
  orientation?: Orientation;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
};

//Lander img is either 400px wide or tall, based on its orientation
const size = 350;
const ratio = 1.414;
const landscapeWidth = `${size}px`;
const portraitWidth = `${size / ratio}px`;

const StyledLanderImg = styled(motion.div)<StyledLanderImgProps>`
  display: flex;
  flex-direction: ${(p) => (p.flexDirection ? p.flexDirection : "column")};
  gap: 30px;

  postion: relative;
  border-radius: ${(p) => p.theme.br.br_medium};

  .lander__product-img {
    width: ${(p) =>
      p.orientation === "landscape" ? `${landscapeWidth}` : `${portraitWidth}`};
    border-radius: ${(p) => p.theme.br.br_medium};
    height: auto;
  }
  .swarm__icon-container {
    position: absolute;
    left: 100px;
    top: 0;
  }
`;

export default StyledLanderImg;
