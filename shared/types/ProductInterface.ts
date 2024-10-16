//export enum Orientation {
//PORTRAIT = "portrait",
//LANDSCAPE = "landscape",
//}

export type Orientation = "portrait" | "landscape";

export type ProductType = "poster" | "tag";

interface IProduct {
  id: number;
  name: string;
  productType: ProductType;
  primer: string; //First part of the description
  description: string;
  snapshot: string; //Description displayed in shop
  imageUrl: string;
  images: string[];
  price: number;
  orientation: Orientation;
}
export default IProduct;
