import StyledLanderBrief from "./LanderBrief.style";
import BlurryImage from "../../baseComponents/BlurryImage";

export type LanderBriefProps = {
  img: string;
  preview: string;
  title: string;
  desc: string;
};

const LanderBrief = ({ img, preview, title, desc }: LanderBriefProps) => {
  return (
    <StyledLanderBrief>
      <BlurryImage
        src={img}
        preview={preview}
        alt="Product brief icon"
        height="160px"
        width="160px"
      />
      <div className="landerBrief__text-container">
        <span>
          <h3>{title}</h3>
        </span>
        <p>{desc}</p>
      </div>
    </StyledLanderBrief>
  );
};
export default LanderBrief;
