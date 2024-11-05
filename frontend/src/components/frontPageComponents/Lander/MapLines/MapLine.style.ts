import styled from "styled-components";
import heart from "../../../../resources/images/big-heart.png";
import { motion } from "framer-motion";

export type StyledLinesProps = {
  size: number;
};

const StyledLines = styled(motion.svg)<StyledLinesProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  mask-size: ${(p) => `${p.size}px`};
  mask-repeat: no-repeat;
  mask-image: url(${heart});
`;

export default StyledLines;
