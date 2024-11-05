import { useAppContext } from "../../state/contexts/AppContextProvider";
import Hyperlink from "../baseComponents/Hyperlink";
import CartItemList from "../cartComponents/CartItemList";
import CartSummary from "../cartComponents/CartSummary";
import StyledCart from "./Cart.style";

const Cart = () => {
  const { state } = useAppContext();
  const { cart } = state;
  return (
    <StyledCart>
      <div className="cart">
        <h1>Cart</h1>
        {cart.items.length > 0 ? (
          <div className="cart__container">
            <div className="cart__item-wrapper">
              <CartItemList />
            </div>
            <CartSummary />
          </div>
        ) : (
          <div className="cart__empty-container">
            <h3>Cart is empty.</h3>
            <Hyperlink content="Go to shop" href="/shop" />
          </div>
        )}
      </div>
    </StyledCart>
  );
};

export default Cart;
