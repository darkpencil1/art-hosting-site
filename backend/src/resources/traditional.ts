import { ICatalogItem } from "@shared/types/CatalogInterface";

const baseUrl = "/api/product/image";
const traditional: ICatalogItem[] = [
  {
    name: "Sibelius",
    description:
      "I haven't yet written description for this piece. But you can watch it meanwhile!",
    img: `${baseUrl}/sibelius.jpg`,
    preview: `${baseUrl}/sibelius_preview.jpg`,
  },
  {
    name: "Mannerheim",
    description:
      "I haven't yet written description for this piece. But you can watch it meanwhile!",
    img: `${baseUrl}/marski.jpg`,
    preview: `${baseUrl}/marski_preview.jpg`,
  },
];

export default traditional;
