import StyledHeader from "./Header.style";
import logo from "../../resources/images/logo.png";
import herequest from "../../resources/images/herequest.png";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cartComponents/CartIcon";
import Img from "../baseComponents/Img";

const navVariant: Variants = {
  animate: {
    translateX: [-50, 0],
    opacity: [0, 1],
  },
  exit: {
    translateX: [0, -50],
    opacity: [1, 0],
  },
};

type NavItem = {
  href: string;
  name: string;
};
const navItems: Array<NavItem> = [
  {
    href: "catalog",
    name: "Catalog",
  },
  {
    href: "about",
    name: "About",
  },
  {
    href: "shop",
    name: "Shop",
  },
];
const Header: React.FC = () => {
  const controls = useAnimation();
  const navigate = useNavigate();

  return (
    <StyledHeader animate={controls} transition={{ duration: 0.4 }}>
      <motion.div className="nav__logo" onClick={() => navigate("/")}>
        <Img
          whileHover={{ scale: 1.1 }} // Scale the image up by 10% on hover
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }} // Add a smooth transition effect
          src={logo}
          alt="Ville's Art Cave"
          width="60px"
        />
      </motion.div>
      <AnimatePresence>
        <Img
          src={herequest}
          className="header__logo-name"
          key="header-title"
          onClick={() => navigate("/")}
          width="150px"
        />
        <motion.nav
          animate="animate"
          exit="exit"
          variants={navVariant}
          key="header-nav"
        >
          {navItems.map((item: NavItem, i: number) => {
            return (
              <motion.a
                animate="animate"
                exit="exit"
                variants={navVariant}
                onClick={() => navigate(item.href)}
                transition={{ delay: i * 0.1, duration: 0.2 }}
                key={i}
              >
                {item.name}
              </motion.a>
            );
          })}
        </motion.nav>
        <CartIcon />
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
