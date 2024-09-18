import MapLine2 from "./MapLines/MapLine2";
import heart from "../../../resources/images/lander-heart.png";
import StyledLanderHeart from "./LanderHeart.style";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const heartVariant: Variants = {
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      bounce: 0.35,
      damping: 12,
    },
  },
};
const LanderHeart = () => {
  const [width, setWidth] = useState<number>(350);
  return (
    <StyledLanderHeart>
      <motion.img
        animate="animate"
        variants={heartVariant}
        className="lander__heart"
        src={heart}
        width={width}
      />
      <MapLine2 />
    </StyledLanderHeart>
  );
};
export default LanderHeart;
