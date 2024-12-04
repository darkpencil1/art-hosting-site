import React, { useState, useEffect } from "react";
import logo from "../../resources/images/logo.png";

interface MobileWidthGuardProps {
  children: React.ReactNode;
  mobileMessage?: React.ReactNode;
}

//Until mobile widths are supported, display a notification instead of the actual app
const MobileWidthGuard: React.FC<MobileWidthGuardProps> = ({
  children,
  mobileMessage = (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <img src={logo} alt="darkpencil1 art vault" width="80px" />
      <h1 style={{ marginTop: "0" }}>Unsupported Screen Size</h1>
      <h3>
        This precious and fancy art vault doesn't support mobile devices...yet.
        Please use a larger screen.
      </h3>
    </div>
  ),
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    // Run on initial load
    checkScreenWidth();

    // Add a resize event listener
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return <>{isMobile ? mobileMessage : children}</>;
};

export default MobileWidthGuard;
