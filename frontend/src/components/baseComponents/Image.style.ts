import { motion } from "framer-motion";
import styled from "styled-components";

export type StyledImageProps = {
  width?: string;
  height?: string;
  alt?: string;
  src: string;
  isImgLoaded?: boolean;
  className?: string;
  onClick?: () => void;
};

const StyledImage = styled(motion.img)<StyledImageProps>`
  display: ${(p) => (p.isImgLoaded ? "block" : "none")};
  width: ${(p) => (p.width ? p.width : "auto")};
  height: ${(p) => (p.height ? p.height : "auto")};
`;

export default StyledImage;
