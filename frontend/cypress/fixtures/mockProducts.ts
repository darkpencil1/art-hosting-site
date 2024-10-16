import IProduct from "../../../shared/types/ProductInterface";

const mockProducts: IProduct[] = [
  {
    id: 1,
    name: "Product 1",
    productType: "poster",
    primer: "Primer 1",
    description: "Description 1",
    snapshot: "Snapshot 1",
    images: ["image1-1.jpg"],
    imageUrl: "image1.jpg",
    price: 100,
    orientation: "portrait",
  },
  {
    id: 2,
    name: "Product 2",
    productType: "poster",
    primer: "Primer 2",
    description: "Description 2",
    snapshot: "Snapshot 2",
    images: ["image2-1.jpg"],
    imageUrl: "image2.jpg",
    price: 200,
    orientation: "landscape",
  },
  {
    id: 3,
    name: "Product 3",
    productType: "tag",
    primer: "Primer 3",
    description: "Description 3",
    snapshot: "Snapshot 3",
    images: ["image3-1.jpg"],
    imageUrl: "image3.jpg",
    price: 300,
    orientation: "portrait",
  },
];

export default mockProducts;
