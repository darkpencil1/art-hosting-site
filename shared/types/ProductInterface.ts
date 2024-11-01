export enum Orientation {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
}

export type ProductType = "poster" | "tag";

interface IProduct {
  id: number;
  name: string;
  productType: ProductType;
  primer: string; //First part of the description
  description: string;
  snapshot: string; //Description displayed in shop
  imageUrl: string;
  preview: string; //Low res image used to display blurred version while main img loads
  images: string[];
  price: number;
  orientation: Orientation;
}
export default IProduct;
