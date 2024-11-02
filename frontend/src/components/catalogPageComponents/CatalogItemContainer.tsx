import { ICatalogItem } from "@shared/types/CatalogInterface";
import CatalogItem from "./CatalogItem";
import StyledCatalogItemContainer from "./CatalogItemContainer.style";

type CatalogItemContainerProps = {
  data: ICatalogItem[];
  isLoading: boolean;
  isError: boolean;
};
const CatalogItemContainer = ({
  data,
  isLoading,
  isError,
}: CatalogItemContainerProps) => {
  return (
    <StyledCatalogItemContainer>
      {!isLoading &&
        !isError &&
        data.length > 0 &&
        data.map((item: ICatalogItem) => {
          return (
            <CatalogItem
              img={item.img}
              preview={item.preview}
              name={item.name}
              description={item.description}
            />
          );
        })}
    </StyledCatalogItemContainer>
  );
};
export default CatalogItemContainer;
