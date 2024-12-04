import React from "react";
import Row from "../baseComponents/Row.style";
import ProductItem from "../shopComponents/ProductItem";
import { ShopBanner } from "../shopComponents/ShopBanner";
import StyledShop from "./Shop.style";
import { useProducts } from "../../hooks/useProducts";
import IProduct from "@shared/types/ProductInterface";
import Skeleton from "../sharedComponents/Skeleton";
import { AnimatePresence, motion } from "framer-motion";

const Shop: React.FC = () => {
  const { data } = useProducts();

  return (
    <StyledShop>
      <ShopBanner />
      {/* Product rows */}
      <Row className="product__wrapper">
        <AnimatePresence>
          {!data
            ? Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Skeleton height={320} width={750} />
                </motion.div>
              ))
            : data?.map((product: IProduct, index: number) => (
                <ProductItem key={index} product={product} />
              ))}
        </AnimatePresence>
      </Row>
    </StyledShop>
  );
};

export default Shop;
