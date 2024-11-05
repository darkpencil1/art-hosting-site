import MapLine2 from "./MapLines/MapLine2";
import heart from "../../../resources/images/lander-heart.png";
import StyledLanderHeart from "./LanderHeart.style";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Spinner from "../../baseComponents/Spinner";

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
  const [width] = useState<number>(350);
  const [height] = useState<number>(371);
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = heart;
    img.onload = () => {
      setIsImgLoaded(true);
    };
  }, [heart]);

  return (
    <>
      {!isImgLoaded && <Spinner width={`${width}px`} height={`${height}px`} />}
      <StyledLanderHeart>
        <motion.img
          animate="animate"
          variants={heartVariant}
          className="lander__heart"
          src={heart}
          width={width}
          height={height}
          style={{
            display: isImgLoaded ? "block" : "none", // hide until loaded
          }}
        />
        {isImgLoaded && <MapLine2 />}
      </StyledLanderHeart>
    </>
  );
};
export default LanderHeart;
