import IProduct, { Orientation } from "@shared/types/ProductInterface";

const baseUrl = "/api/product/image/";
const products: Array<IProduct> = [
  {
    id: 5,
    name: "Visionbaker's Bay",
    primer: "Travel through Visionbaker's Bay and find yourself a vision.",
    snapshot: "A map for those who are seeking a new vision.",
    description:
      "I'm just a placeholder description — here to hold the fort until the real words show up. I’m here for moral support and to keep the layout from collapsing in existential crisis.",
    price: 20.0,
    imageUrl: `${baseUrl}visionbakers-bay.jpg`,
    preview: `${baseUrl}visionbakers-bay_preview.jpg`,
    images: [`${baseUrl}visionbakers-bay.jpg`],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 1,
    name: "The Skillchase",
    primer: "Poster for those who are learning a skill.",
    snapshot: "A poster about the journey of learning a skill.",
    description:
      "I'm just a placeholder description — here to hold the fort until the real words show up. I’m here for moral support and to keep the layout from collapsing in existential crisis.",
    price: 20.0,
    imageUrl: `${baseUrl}taidonjahti.jpg`,
    preview: `${baseUrl}taidonjahti_preview.jpg`,
    images: [`${baseUrl}taidonjahti.jpg`],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 3,
    name: "The School of Ailments",
    primer: "Travel through the School of Ailments in search of a recovery.",
    snapshot:
      "Inspiring and encouraging poster for finding a cure or recovering.",
    description:
      "I'm just a placeholder description — here to hold the fort until the real words show up. I’m here for moral support and to keep the layout from collapsing in existential crisis.",
    price: 20.0,
    imageUrl: `${baseUrl}vaivojen-koulu.jpg`,
    preview: `${baseUrl}vaivojen-koulu_preview.jpg`,
    images: [`${baseUrl}vaivojen-koulu.jpg`],
    orientation: Orientation.PORTRAIT,
  },
];

export default products;
