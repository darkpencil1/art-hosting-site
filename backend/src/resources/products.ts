import IProduct, { Orientation } from "@shared/types/ProductInterface";

const baseUrl = "/api/product/image/";
const products: Array<IProduct> = [
  {
    id: 5,
    name: "Visionbaker's Bay",
    productType: "poster",
    primer:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 20.0,
    imageUrl: `${baseUrl}visionbakers-bay.jpg`,
    images: [`${baseUrl}visionbakers-bay.jpg`],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 1,
    name: "The Skillchase",
    productType: "poster",
    primer:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 20.0,
    imageUrl: `${baseUrl}Taidonjahti_thumbnail.jpg`,
    images: [`${baseUrl}Taidonjahti_thumbnail.jpg`],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 3,
    name: "The School of Ailments",
    productType: "poster",
    primer:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 20.0,
    imageUrl: `${baseUrl}vaivojen-koulu_thumbnail.jpg`,
    images: [`${baseUrl}vaivojen-koulu_thumbnail.jpg`],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 2,
    name: "This one has started",
    productType: "tag",
    primer:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 12.0,
    imageUrl: `${baseUrl}taidonjahti-merkki-teksti.png`,
    images: [`${baseUrl}taidonjahti-merkki-teksti.png`],
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 4,
    name: "Soaked, pecked, learned",
    productType: "tag",
    primer:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 12.0,
    imageUrl: `${baseUrl}vaivojen-koulu-merkki-teksti.png`,
    images: [`${baseUrl}vaivojen-koulu-merkki-teksti.png`],
    orientation: Orientation.LANDSCAPE,
  },
];

export default products;
