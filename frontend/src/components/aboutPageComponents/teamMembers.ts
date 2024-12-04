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
      "Greetings visitor. I'm an artist who has made this little site. I enjoy drawing, especially characters. Besides that I delve in dungeons and slay dragons.",
    imgDesc: "This is definitely not me.",
  },
];

export default members;
