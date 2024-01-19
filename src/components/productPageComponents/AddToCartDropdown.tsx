import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import StyledAddToCartDropdown from "./AddToCartDropdown.style";

export type DropdownOption = {
  id: number;
  name: string;
  price: number;
  specs?: string;
};

type AddToCartDropdownProps = {
  options: Array<DropdownOption>;
  setSelected: (param1: DropdownOption, param2: number) => void;
  dropdownId: number;
};

const AddToCartDropdown = ({
  options,
  setSelected,
  dropdownId,
}: AddToCartDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<
    DropdownOption | undefined
  >(undefined);
  const [show, setShow] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        // Clicked outside the component
        setShow(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Pressed the escape key
        setShow(false);
      }
    };

    // Add event listeners when the component mounts
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleDropdownChange = (option: DropdownOption) => {
    setSelected(option, dropdownId);
    // Update the local state with the selected option
    setSelectedOption(option);
  };

  return (
    <StyledAddToCartDropdown onClick={() => setShow(!show)} ref={dropdownRef}>
      <div className="addToCart__selected">
        {selectedOption && selectedOption.name}
      </div>
      <AnimatePresence onExitComplete={() => setShow(false)}>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0 } }}
            exit={{
              opacity: [1, 0],
              translateX: -10,
              transition: { delay: (options.length + 1) * 0.1 },
            }}
            className="addToCart__dropdown"
          >
            {options.map((option: DropdownOption, i: number) => (
              <motion.span
                animate={{
                  translateX: [-20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: i * 0.2,
                  },
                }}
                exit={{
                  translateX: [0, -20],
                  opacity: [1, 0],
                  transition: {
                    delay: (options.length - i) * 0.05,
                  },
                }}
                key={option.id}
                onClick={() => handleDropdownChange(option)}
              >
                {option.name}
                {option.specs && (
                  <span className="addToCart__dropdown-option--secondary">
                    &nbsp;({option.specs})
                  </span>
                )}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledAddToCartDropdown>
  );
};
export default AddToCartDropdown;