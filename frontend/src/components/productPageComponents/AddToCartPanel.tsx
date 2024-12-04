import { useEffect, useState } from "react";
import AddToCartDropdown, { DropdownOption } from "./AddToCartDropdown";
import Button from "../baseComponents/Button";
import StyledAddToCartPanel from "./AddToCartPanel.style";
import posterOptions from "../../resources/productOptions/posterOptions";
import quantities from "../../resources/productOptions/quantity";
import { motion, useAnimation } from "framer-motion";
import separator from "../../resources/images/addToCart__separator.png";
import { useAppContext } from "../../state/contexts/AppContextProvider";
import { CartItem, SecondaryProduct } from "../../state/reducers/cartReducer";

export type AddToCartOption = {
  name: string;
  id: "SIZE" | "FRAME" | "QUANTITY";
  data: DropdownOption[];
  default?: DropdownOption;
  //Signifies whether this is the base product
  primary: boolean;
};

export type SelectedOption = DropdownOption & {
  dropdownId: AddToCartOption["id"];
};

export const AddToCartPanel = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [options, _] = useState<AddToCartOption[]>(posterOptions);
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const { state, addItemToCart } = useAppContext();
  const { product } = state;
  const controls = useAnimation();

  const addCartEntry = (option: SelectedOption): void => {
    //Check if dropdown had already had something else selected
    const index = selectedOptions?.findIndex(
      (opt: SelectedOption) => opt.dropdownId === option.dropdownId
    );

    if (index !== -1) {
      setSelectedOptions((prevState) => [
        ...prevState.slice(0, index),
        option,
        ...prevState.slice(index + 1),
      ]);
    }
  };

  //Build default cart
  useEffect(() => {
    if (options.length > 0) {
      const defaultCart: SelectedOption[] = options.map(
        (option: AddToCartOption) => {
          if (option.default)
            return { dropdownId: option.id, ...option.default };
          else
            return {
              dropdownId: option.id,
              id: -1,
              name: "-1",
              price: -1,
            };
        }
      );
      setSelectedOptions(defaultCart);
    }
  }, [options]);

  useEffect(() => {
    calcPrice();
  }, [selectedOptions]);

  useEffect(() => {
    const jumpAnimation = async () => {
      // Trigger the jump animation by changing the y position
      await controls.start({ y: -10 });

      // Reset the y position after a short delay
      await controls.start({ y: 0 });
    };
    jumpAnimation();
  }, [price]);

  //Check if all dropdowns have a valid value
  const isSelectionDone = () => {
    return selectedOptions.every((option) => option.id !== -1);
  };

  const calcPrice = () => {
    if (isSelectionDone()) {
      //Sum the prices of items and multiply with quantity
      let quantityMultiplier = 1;
      let totalPrice: number = 0;
      if (selectedOptions.length > 1) {
        totalPrice = selectedOptions.reduce(
          (accumulator: number, currentOption: SelectedOption) => {
            //If handling a quantity option store it as multiplier and dont add it to price yet
            if (currentOption.dropdownId === quantities.id) {
              quantityMultiplier = currentOption.price;
              return accumulator;
            } else return accumulator + currentOption.price;
          },
          0
        );
        //Currently no product has only one option, but this maintains the feature for future's sake
      } else if (selectedOptions.length === 1) {
        //If only 1 option available it is the quantity.
        //Use product price as the total price
        if (selectedOptions[0].dropdownId === quantities.id) {
          if (product) totalPrice = product.price;
          quantityMultiplier = selectedOptions[0].price;
        }
      }
      //Return price of item multiplied by the quantity
      //totalPrice = totalPrice * quantityMultiplier;
      setQuantity(quantityMultiplier);
      setPrice(totalPrice);
    }
  };

  const getSecondaryProducts = () => {
    let secondaryProducts: SecondaryProduct = { frame: "" };

    selectedOptions.map((option: SelectedOption) => {
      if (option.dropdownId === "FRAME" && option.name !== "Ei kehystä")
        secondaryProducts.frame = option.name;
    });
    return secondaryProducts;
  };

  const getProductSize = () => {
    let size: string | undefined;

    selectedOptions.map((option: SelectedOption) => {
      if (option.dropdownId === "SIZE") size = option.name;
    });
    return size;
  };

  const generateUniqueId = (): string => {
    return `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
  };

  const pushToCart = () => {
    if (product) {
      let cartItem: CartItem = {
        cartId: generateUniqueId(),
        id: product.id,
        name: product.name,
        images: product.images,
        price: price,
        quantity: quantity,
        size: getProductSize(),
        secondaryProducts: getSecondaryProducts(),
      };
      addItemToCart(cartItem);
    }
  };

  return (
    <StyledAddToCartPanel>
      <div className="addToCart__panel">
        {options?.map((option: AddToCartOption, i: number) => {
          return (
            <div className="addToCart__dropdown-wrapper" key={i}>
              <div className="addToCart__dropdown-container">
                <label>{option.name}</label>
                <AddToCartDropdown
                  options={option}
                  addCartEntry={addCartEntry}
                  size={option.name === quantities.name ? "sm" : "normal"}
                />
              </div>
              <img src={separator} />
            </div>
          );
        })}

        <div className="addToCart__price">
          <label>Price</label>
          <motion.p
            animate={controls}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {price === 0 ? "-" : `${price * quantity}€`}
          </motion.p>
        </div>
        <Button
          text="Add to cart"
          size="md"
          type={isSelectionDone() ? "primary" : "disabled"}
          onClick={() => pushToCart()}
        />
      </div>
    </StyledAddToCartPanel>
  );
};
