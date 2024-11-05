import { motion } from "framer-motion";
import styled from "styled-components";

const StyledHyperLink = styled(motion.div)`
  position: relative;

  > a {
    font-weight: ${(p) => p.theme.fw.fw_semibold};
    font-size: ${(p) => p.theme.fs.font_lg};
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
    margin-right: 5px;
    cursor: pointer;
  }

  /* Define the ::after pseudo-element */
  ::after {
    content: ""; /* Add content to the pseudo-element */
    position: absolute; /* Position it relative to the <a> element */
    left: 0; /* Align it with the left edge of the <a> element */
    bottom: 0; /* Place it at the bottom */
    width: 0; /* Initially, the width is 0 */
    height: 3px; /* Set the height to create the border effect */
    background-color: ${(p) =>
      p.theme.colors.primary}; /* Set the border color */
    transition: width 0.3s ease; /* Add a smooth transition for width */
  }

  /* Define the styles for the <a> element on hover */
  :hover::after {
    width: 100%; /* Expand the width to 100% on hover */
  }
`;
export default StyledHyperLink;
