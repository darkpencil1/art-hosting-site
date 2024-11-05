import StyledHyperLink from "./Hyperlink.style";
import arrow from "../../resources/images/button_arrow1.png";
import { Link } from "react-router-dom";

type LinkProps = {
  content: string;
  href: string;
};

const linkVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    translateY: [20, -10],
  },
};

const Hyperlink = ({ content, href }: LinkProps) => {
  return (
    <StyledHyperLink
      variants={linkVariants}
      whileHover="hover"
      className="link"
    >
      <Link to={href}>{content}</Link>
      <img src={arrow} alt="" />
    </StyledHyperLink>
  );
};

export default Hyperlink;
