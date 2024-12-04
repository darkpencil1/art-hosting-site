import { useAppContext } from "../../state/contexts/AppContextProvider";
import StyledProductText from "./ProductText.style";

const ProductText = () => {
  const { state } = useAppContext();
  const { product } = state;

  return (
    <StyledProductText>
      <p className="product__text-class">Poster</p>
      <h2>{product?.name}</h2>
      <div className="product__text-desc-container">
        <p className="product__text-primer">{product?.primer}</p>
        <p className="product__text-desc">{product?.description}</p>
      </div>
    </StyledProductText>
  );
};
export default ProductText;
