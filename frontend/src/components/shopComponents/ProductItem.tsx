import { useNavigate } from "react-router-dom";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Button from "../baseComponents/Button";
import IProduct from "@shared/types/ProductInterface";
import StyledProductItem from "./ProductItem.style";
import BlurryImage from "../baseComponents/BlurryImage";

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  const { id, imageUrl, preview, name, snapshot, productType, price } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product?id=${id}`);
  };

  const setProductType = () => {
    return productType === "poster" ? "Quest poster" : "Achievement tag";
  };

  return (
    <StyledProductItem>
      <Col className="product__img-container">
        <BlurryImage
          className={`product__img ${
            productType === "tag" ? "product__img--tag" : ""
          }`}
          src={`${imageUrl}`}
          preview={`${preview}`}
          alt={name}
        />
      </Col>
      <Row className="product__text-container">
        <h2 className="product__title">{name}</h2>
        <small className="product__type">- {setProductType()} -</small>
        <div className="product__text">{snapshot}</div>
        <Row className="product__price-and-button">
          <div className="product__price">
            <span>from &nbsp;</span>
            <h4>{price}€</h4>
          </div>
          <Button
            className="product__cta"
            type="white"
            size="md"
            text="Open"
            onClick={handleClick}
          />
        </Row>
      </Row>
    </StyledProductItem>
  );
};
export default ProductItem;
