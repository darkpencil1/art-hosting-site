import { ICatalogItem } from "@shared/types/CatalogInterface";
import { useState } from "react";
import Img from "../baseComponents/Img";
import StyledCatalogItem from "./CatalogItem.style";
import CatalogItemModal from "./CatalogItemModal";

const CatalogItem = ({ img, description, name }: ICatalogItem) => {
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
        <Img
          src={img}
          className={`${isDefaultImg(img) ? "catalog__img--small" : ""}`}
        />
      </div>
      <h2>{name}</h2>
      {showModal && (
        <CatalogItemModal
          img={img}
          description={description}
          name={name}
          show={showModal}
          onClose={handleCloseModal}
        />
      )}
    </StyledCatalogItem>
  );
};
export default CatalogItem;
