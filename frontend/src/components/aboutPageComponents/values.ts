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
    desc: "Lorem ipsum dolor sit amet, qui minim labore",
  },
  {
    name: "Roots",
    icon: finland,
    desc: "Lorem ipsum dolor sit amet, qui minim labore. Sit amet, qui.",
  },
  {
    name: "Diversity",
    icon: multiplicity,
    desc: "Lorem ipsum dolor sit amet, qui minim labore",
  },
  {
    name: "Try to be a master",
    icon: mastery,
    desc: "Lorem ipsum dolor sit amet, qui minim labore",
  },
];

export default values;
