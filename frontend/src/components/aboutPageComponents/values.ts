import mastery from "../../resources/images/mastery-icon.svg";
import finland from "../../resources/images/finland-icon.svg";
import multiplicity from "../../resources/images/multiplicity-icon.svg";
import heart from "../../resources/images/heart-icon.svg";

export type Value = {
  name: string;
  icon: string;
  desc: string;
};

const values: Array<Value> = [
  {
    name: "Go deep",
    icon: heart,
    desc: "Try and have a deep and true experiences of life",
  },
  {
    name: "Roots",
    icon: finland,
    desc: "Show what you actually see, smell, hear and touch in the art",
  },
  {
    name: "Diversity",
    icon: multiplicity,
    desc: "Play with different viewpoints",
  },
  {
    name: "Try to be a master",
    icon: mastery,
    desc: "No kidding, try to master a craft.",
  },
];

export default values;
