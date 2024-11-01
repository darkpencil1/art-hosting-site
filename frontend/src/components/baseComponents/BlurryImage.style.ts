import { motion } from "framer-motion";
import styled from "styled-components";

export type StyledBlurryImageProps = {
  width?: string;
  height?: string;
  loading: boolean;
};

const StyledBlurryImage = styled(motion.img)<StyledBlurryImageProps>`
  display: block;
  width: ${(p) => (p.width ? p.width : "100%")};
  height: ${(p) => (p.height ? p.height : "100%")};
  filter: ${(p) => (p.loading ? "blur(20px)" : "")};
  transition: "1s filter linear";
`;

export default StyledBlurryImage;
