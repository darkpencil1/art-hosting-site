import styled from "styled-components";
import bg from "../../resources/images/arvo-maaviiva1.png";
import { motion } from "framer-motion";

const StyledValueItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  flex: 1 1 200px;
  min-width: 400px;
  max-width: 400px;
  overflow-y: hidden;
  overflow-x: hidden;

  height: 300px;
  padding: ${(p) => p.theme.spacing.spacing_2};

  border-radius: ${(p) => p.theme.br.br_large};
  border-bottom: 5px solid ${(props) => props.theme.colors.gray};
  border-right: 5px solid ${(props) => props.theme.colors.gray};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};

  /*Small animation for height change*/
  transition: height 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.secondary}!important;
    text-shadow: ${(p) => p.theme.ts.base};
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    p {
      display: block;
    }
    h2 {
      font-size: ${(p) => p.theme.fs.font_xl};
    }
  }

  h2 {
    font-size: ${(p) => p.theme.fs.font_xl};
    line-height: 1;
  }

  p {
    display: none;
    width: 80%;
    font-size: ${(p) => p.theme.fs.font_md}!important;
    margin-top: 0;
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }
`;
export default StyledValueItem;
