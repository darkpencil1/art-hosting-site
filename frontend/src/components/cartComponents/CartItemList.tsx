import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../state/contexts/AppContextProvider";
import { CartItem, SecondaryProduct } from "../../state/reducers/cartReducer";
import StyledCartItemList from "./CartItemList.style";
import CartQuantityOption from "./CartQuantityOption";

const CartItemList = () => {
  const { state, removeCartItem } = useAppContext();
  const { cart } = state;
  const navigate = useNavigate();

  const navigateToProduct = (item: CartItem) => {
    const productHref = `/tuote?id=${item.id}`;
    navigate(productHref);
  };

  const convertFieldToFinnish = (field: string) => {
    if (field === "poster") return "Poster";
    else if (field === "tag") return "Tag";
  };

  return (
    <StyledCartItemList>
      {cart.items.map((item: CartItem) => {
        return (
          <div className="cart__item">
            <img src={item.images[0]} />
            <div className="cart__item-text-container">
              <h4>
                <Link to={`/product?id=${item.id}`}>{item.name}</Link>
              </h4>
              <p>{convertFieldToFinnish(item.productType)}</p>
              <p>{item.size}</p>
              {item.secondaryProducts &&
                Object.entries(item.secondaryProducts).map(([key, value]) => {
                  if (value !== "") {
                    return (
                      <p>
                        + {value} -{key}
                      </p>
                    );
                  }
                })}
              <p className="cart__item-price">{item.price}€</p>
            </div>
            <div className="cart__item-quantity-container">
              <span
                className="cart__item-remove"
                onClick={() => removeCartItem(item)}
              >
                Remove
              </span>
              <CartQuantityOption cartItem={item} />
            </div>
          </div>
        );
      })}
    </StyledCartItemList>
  );
};

export default CartItemList;
