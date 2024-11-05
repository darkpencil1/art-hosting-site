import StyledLanderTagImg from "./LanderTagImg.style";
import icon from "../../../resources/images/achievement-tag-icon.svg";
import tag from "../../../resources/images/saavutusmerkki5.png";
import { Variants } from "framer-motion";
import LanderSwarmIcon from "./LanderSwarmIcon";
import LanderTagIcon from "./LanderTagIcon";

const swarm = [icon, icon];

const imgVariant: Variants = {
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
  },
};
const LanderTagImg = (props: { index: number }) => {
  //Index determines the animation order in relation to other images in lander
  const { index } = props;

  return (
    <StyledLanderTagImg
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
      <LanderTagIcon />
      <img className="lander__product-img" src={tag} />
      {swarm.map((icon: string, i: number) => {
        return (
          <LanderSwarmIcon
            icon={icon}
            index={i}
            key={`swarm__icon--${index}`}
          />
        );
      })}
    </StyledLanderTagImg>
  );
};
export default LanderTagImg;
