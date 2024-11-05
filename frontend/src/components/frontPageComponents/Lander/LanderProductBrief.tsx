import Icon from "../../baseComponents/Icon";
import StyledLanderProductBrief from "./LanderProductBrief.style";
import BlurryImage from "../../baseComponents/BlurryImage";

export type LanderProductBriefProps = {
  img: string;
  preview: string;
  title: string;
  desc: string;
  icon: string;
};

const LanderProductBrief = ({
  img,
  preview,
  title,
  desc,
  icon,
}: LanderProductBriefProps) => {
  return (
    <StyledLanderProductBrief>
      <BlurryImage
        src={img}
        preview={preview}
        alt="Product brief icon"
        height="160px"
        width="160px"
      />
      <div className="landerBrief__text-container">
        <span>
          <Icon play={true} icon={icon} size="md" />
          <h3>{title}</h3>
        </span>
        <p>{desc}</p>
      </div>
    </StyledLanderProductBrief>
  );
};
export default LanderProductBrief;
