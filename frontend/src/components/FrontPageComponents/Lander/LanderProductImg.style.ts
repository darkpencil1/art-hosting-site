import styled from "styled-components";
import { Orientation } from "@shared/types/ProductInterface";

type LanderImgProps = {
  top: number;
  left: number;
  orientation: Orientation;
};

//Lander img is either 400px wide or tall, based on its orientation
const size = 400;
const ratio = 1.414;
const landscapeWidth = `${size}px`;
const portraitWidth = `${size / ratio}px`;

const StyledLanderProductImg = styled.div<LanderImgProps>`
  position: absolute;
  top: ${(p) => p.top}px;
  left: ${(p) => p.left}px;
  border-radius: ${(p) => p.theme.br.br_medium};

  .lander__product-img {
    width: ${(p) =>
      p.orientation === "landscape" ? `${landscapeWidth}` : `${portraitWidth}`};
    border-radius: ${(p) => p.theme.br.br_medium};
    height: auto;
  }
`;

export default StyledLanderProductImg;
