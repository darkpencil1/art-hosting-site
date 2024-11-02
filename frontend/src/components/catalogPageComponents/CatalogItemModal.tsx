// Modal.tsx
import { ICatalogItem } from "@shared/types/CatalogInterface";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import x from "../../resources/images/x-button.png";
import StyledCatalogItemModal from "./CatalogItemModal.style";

interface ModalProps extends Omit<ICatalogItem, "preview"> {
  onClose: () => void;
}

const CatalogItemModal: FC<ModalProps> = ({
  onClose,
  img,
  name,
  description,
}) => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    click && onClose();
  }, [click]);

  return (
    <StyledCatalogItemModal className="modal-overlay">
      <div className="modal-content">
        <motion.img
          whileHover={{ scale: 1.1 }} // Scale the image up by 10% on hover
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }} // Add a smooth transition effect
          className="modal-close"
          src={x}
          onClick={() => setClick(true)}
        />
        <div className="modal-body">
          <div className="modal-image">
            <img src={img} alt="Modal" />
          </div>
          <div className="modal-text">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </StyledCatalogItemModal>
  );
};

export default CatalogItemModal;
