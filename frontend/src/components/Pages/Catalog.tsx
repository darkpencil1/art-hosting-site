import CatalogItemContainer from "../catalogPageComponents/CatalogItemContainer";
import CatalogTextContainer from "../catalogPageComponents/CatalogTextContainer";
import StyledCatalog from "./Catalog.style";
import { useDigital } from "../../hooks/useDigital";
import { useTraditional } from "../../hooks/useTraditional";
import { ICatalogItem } from "@shared/types/CatalogInterface";
import Banner from "../sharedComponents/Banner";

type catalogItem = {
  title: string;
  description: string;
  data: ICatalogItem[];
  isLoading: boolean;
  isError: boolean;
};

const Catalog = () => {
  const catalogItems = [
    {
      title: "Digital",
      description:
        "Here be my digital works! My stuff is pretty much always centered on a character.",
      data: useDigital().data,
      isLoading: useDigital().isLoading,
      isError: useDigital().isError,
    },
    {
      title: "Traditional",
      description:
        "The traditional realm! Pencil makes portraits really come alive.",
      data: useTraditional().data,
      isLoading: useTraditional().isLoading,
      isError: useTraditional().isError,
    },
  ];

  return (
    <StyledCatalog>
      <Banner
        title="Catalog"
        short="Welcome! The artwork is split based on its medium"
      />
      {catalogItems.map((item: catalogItem) => {
        return (
          <>
            <CatalogTextContainer
              title={item.title}
              description={item.description}
            />
            <CatalogItemContainer
              data={item.data}
              isLoading={item.isLoading}
              isError={item.isError}
            />
          </>
        );
      })}
    </StyledCatalog>
  );
};

export default Catalog;
