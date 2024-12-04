import { ICatalogItem } from "@shared/types/CatalogInterface";

const baseUrl = "/api/product/image";
const digital: ICatalogItem[] = [
  {
    name: "Visionbaker's Bay",
    description:
      "I haven't yet written description for this piece. But you can watch it meanwhile!",
    img: `${baseUrl}/visionbakers-bay.jpg`,
    preview: `${baseUrl}/visionbakers-bay_preview.jpg`,
  },
  {
    name: "Oracle",
    description:
      "I haven't yet written description for this piece. But you can watch it meanwhile!",
    img: `${baseUrl}/oracle.jpg`,
    preview: `${baseUrl}/oracle_preview.jpg`,
  },
  {
    name: "Bringo the Ringbearer",
    description:
      "I haven't yet written description for this piece. But you can watch it meanwhile!",
    img: `${baseUrl}/bringo.jpg`,
    preview: `${baseUrl}/bringo_preview.jpg`,
  },
  {
    name: "The Skillchase",
    description:
      "I haven't yet written description for this piece. But you can watch it meanwhile!",
    img: `${baseUrl}/taidonjahti.jpg`,
    preview: `${baseUrl}/taidonjahti_preview.jpg`,
  },
  {
    name: "The School of Ailments",
    description:
      "I haven't yet written description for this piece. But you can watch it meanwhile!",
    img: `${baseUrl}/vaivojen-koulu.jpg`,
    preview: `${baseUrl}/vaivojen-koulu_preview.jpg`,
  },
];

export default digital;
