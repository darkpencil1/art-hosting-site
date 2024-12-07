import StyledLander from "./Lander.style";
import Hyperlink from "../../baseComponents/Hyperlink";
import LanderHeart from "./LanderHeart";
import LanderBrief, { LanderBriefProps } from "./LanderBrief";
import digital from "../../../resources/images/digital.png";
import digitalPreview from "../../../resources/images/digital.png";
import traditional from "../../../resources/images/traditional.png";
import traditionalPreview from "../../../resources/images/traditional.png";

const productTypes: Array<LanderBriefProps> = [
  {
    img: digital,
    title: "Digital",
    desc: "I got some digital art you might fancy. Check it out!",
    preview: digitalPreview,
  },
  {
    img: traditional,
    title: "Traditional",
    desc: "I enjoy doing pencil portraits on real paper!",
    preview: traditionalPreview,
  },
];

const Lander = () => {
  return (
    <StyledLander>
      <div className="lander__row">
        <div className="lander__text-container">
          <h1 className="lander__title">Character art</h1>
          <h3 className="lander__subtitle">and more!</h3>
          <h3 className="lander__short">
            Welcome to darkpencil1's art site. I enjoy making character
            illustrations and drawings. Hop in to browse my art catalog!
          </h3>
          <Hyperlink content="To catalog" href="/catalog" />
        </div>
        <LanderHeart />
      </div>
      <div className="lander__row lander__row--gapped">
        {productTypes.map((item: LanderBriefProps) => {
          return <LanderBrief {...item} key={item.title} />;
        })}
      </div>
    </StyledLander>
  );
};
export default Lander;
