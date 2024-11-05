import StyledAboutUs from "./AboutUs.style";
import Value from "./Value";
import Hyperlink from "../../baseComponents/Hyperlink";
import mastery from "../../../resources/images/mastery-icon.svg";
import finland from "../../../resources/images/finland-icon.svg";
import multiplicity from "../../../resources/images/multiplicity-icon.svg";
import heart from "../../../resources/images/heart-icon.svg";

type Value = {
  name: string;
  icon: string;
};

const values: Array<Value> = [
  { name: "Go deep", icon: heart },
  { name: "Roots", icon: finland },
  { name: "Diversity", icon: multiplicity },
  { name: "Try to be a master", icon: mastery },
];

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <div className="about-us__text-container">
        <h1>Read the story behind the art</h1>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
        </p>
        <Hyperlink href="about" content="Read more" />
      </div>
      <div className="about-us__value-container">
        {values.map((value: Value, i: number) => {
          return (
            <Value
              name={value.name}
              icon={value.icon}
              delay={i * 0.3}
              key={i}
            />
          );
        })}
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
