import { ICatalogItem } from "@shared/types/CatalogInterface";
import { useState } from "react";
import StyledCatalogItem from "./CatalogItem.style";
import CatalogItemModal from "./CatalogItemModal";
import BlurryImage from "../baseComponents/BlurryImage";

const CatalogItem = ({ img, preview, description, name }: ICatalogItem) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const isDefaultImg = (src: string) => {
    if (
      src.indexOf("default-quest") !== -1 ||
      src.indexOf("default-achievement") !== -1
    )
      return true;
    else return false;
  };

  return (
    <StyledCatalogItem onClick={() => setShowModal(true)}>
      <div className="catalog__img-container">
        <BlurryImage
          src={img}
          preview={preview}
          className={`${isDefaultImg(img) ? "catalog__img--small" : ""}`}
        />
      </div>
      <h2>{name}</h2>
      {showModal && (
        <CatalogItemModal
          img={img}
          description={description}
          name={name}
          onClose={handleCloseModal}
        />
      )}
    </StyledCatalogItem>
  );
};
export default CatalogItem;
