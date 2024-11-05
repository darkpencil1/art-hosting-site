import { useAppContext } from "../../state/contexts/AppContextProvider";
import bag from "../../resources/images/shopping-bag.png";
import StyledCartIcon from "./CartIcon.style";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { state } = useAppContext();
  const { cart } = state;
  const navigate = useNavigate();
  const controls = useAnimation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    //Prevent animation from running when component is created
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (cart.items.length > 0) {
        controls.start({
          scale: [1, 1.3, 1],
          transition: { duration: 0.5 },
        });
      }
    }
  }, [cart]);

  return (
    <StyledCartIcon
      onClick={() => navigate("/cart")}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img src={bag} className="cart__icon" animate={controls} />
      <div className="cart__icon-number">
        {cart.items.length > 0 ? cart.items.length : ""}
      </div>
    </StyledCartIcon>
  );
};

export default CartIcon;
