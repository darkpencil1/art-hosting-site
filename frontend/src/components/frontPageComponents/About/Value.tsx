import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Icon from "../../baseComponents/Icon";

type ValueProps = {
  icon: string;
  name: string;
  delay: number;
  play?: boolean;
};

const nameVariant: Variants = {
  animate: {
    opacity: [0, 1],
    translateX: [-50, 0],
  },
  hidden: { opacity: 0 },
};

const Value = ({ name, icon, delay }: ValueProps) => {
  const valueRef = useRef(null);
  const valuesInView = useInView(valueRef, { once: true });

  return (
    <div ref={valueRef} className="about-us__value">
      <Icon icon={icon} size="lg" delay={delay} play={valuesInView} />
      <motion.h3
        animate={valuesInView ? "animate" : "hidden"}
        transition={{
          delay: delay,
          duration: 0.2,
        }}
        variants={nameVariant}
      >
        {name}
      </motion.h3>
    </div>
  );
};

export default Value;
