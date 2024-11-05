import { motion } from "framer-motion";
import styled from "styled-components";

const StyledWIP = styled(motion.div)`
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: auto;
    font-size: ${(p) => p.theme.fs.font_md};
  }
`;

export default StyledWIP;
