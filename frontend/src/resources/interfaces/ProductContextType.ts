import IProduct from "@shared/types/ProductInterface";

export default interface ProductContextType {
  product: IProduct | null;
  selectProduct: Function;
}
