import StyledLanderMoreImg from "./LanderMoreImg.style";
import icon from "../../../resources/images/plus-icon.svg";
import { Variants } from "framer-motion";
import LanderSwarmIcon from "./LanderSwarmIcon";

const swarm = [icon, icon, icon];

const imgVariant: Variants = {
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
  },
};
const LanderMoreImg = (props: { index: number }) => {
  //Index determines the animation order in relation to other images in lander
  const { index } = props;

  return (
    <StyledLanderMoreImg
      animate="animate"
      variants={imgVariant}
      transition={{
        delay: index,
        type: "spring",
        stiffness: 100,
        bounce: 0.35,
        damping: 12,
      }}
    >
      <div className="lander__more-img-container">
        <img src={icon} className="lander__more-img" />
        <h3>Lisää tulossa</h3>
      </div>

      {swarm.map((icon: string, i: number) => {
        return (
          <LanderSwarmIcon
            icon={icon}
            index={i}
            key={`swarm__icon--${index}`}
          />
        );
      })}
    </StyledLanderMoreImg>
  );
};
export default LanderMoreImg;
