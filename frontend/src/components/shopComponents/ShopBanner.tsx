import { useRef } from "react";
import StyledShopBanner from "./ShopBanner.style";
import ShopBannerLine from "./ShopBannerLine";

export const ShopBanner = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledShopBanner ref={containerRef}>
      <div className="banner__text-container">
        <h1 className="banner__title">Shop</h1>
        <p className="banner__desc">
          Fancy a poster to cover your wall? You're in the right place...once
          this shop is operational.
        </p>
      </div>
      <ShopBannerLine container={containerRef} />
    </StyledShopBanner>
  );
};
