import ringo from "../../resources/images/ringo.png";

export type TeamMember = {
  img: string;
  name: string;
  description: string;
  imgDesc: string;
};

const members: Array<TeamMember> = [
  {
    img: ringo,
    name: "Ville",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim .",
    imgDesc: "Lorem ipsum dolor sit amet, officia.",
  },
];

export default members;
