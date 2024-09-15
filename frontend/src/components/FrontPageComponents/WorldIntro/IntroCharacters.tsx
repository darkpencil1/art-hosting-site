import { useRef } from "react";
import character from "../../../resources/images/herequest-tutkija.png";
import { motion, useInView, Variants } from "framer-motion";

const charVariant: Variants = {
  animate: {
    translateX: [-100, 0],
    opacity: [0, 100],
  },
  hidden: { opacity: 0 },
};
const IntroCharacters = () => {
  const charRef = useRef(null);
  const charInView = useInView(charRef, { once: true });

  return (
    <div ref={charRef}>
      <motion.img
        src={character}
        alt="Here was supposed to be an image of a mighty life explorer but we messed up."
        animate={charInView ? "animate" : "hidden"}
        transition={{
          delay: 0.5,
          duration: 0.3,
          type: "tween",
        }}
        variants={charVariant}
        height="700px"
      />
    </div>
  );
};

export default IntroCharacters;
