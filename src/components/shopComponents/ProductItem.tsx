import { useNavigate } from "react-router-dom";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import Button from "../baseComponents/Button";
import { useProduct } from "../../state/contexts/productContext";
import IProduct from "../../resources/interfaces/ProductInterface";
import StyledProductItem from "./ProductItem.style";

const ProductItem = (
  props: Pick<IProduct, "id" | "images" | "name" | "snapshot" | "productType">
) => {
  const { id, images, name, snapshot, productType } = props;
  const { selectProduct } = useProduct();
  const navigate = useNavigate();

  const handleClick = () => {
    selectProduct(id);
    navigate(`/tuote?id=${id}`);
  };

  return (
    <StyledProductItem>
      <Col className="product__img-container">
        <Image
          className={`product__img ${
            productType === "tag" ? "product__img--tag" : ""
          }`}
          src={images[0]}
        />
      </Col>
      <Row className="product__text-container">
        <h2 className="product__title">{name}</h2>
        <div className="product__text">{snapshot}</div>
        {/*<div className="product__price">alkaen {props.price}€</div>*/}
        <Button
          className="product__cta"
          type="white"
          size="md"
          text="Katso"
          onClick={handleClick}
        />
      </Row>
    </StyledProductItem>
  );
};
export default ProductItem;
