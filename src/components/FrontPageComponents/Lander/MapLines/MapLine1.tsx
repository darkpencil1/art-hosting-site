import StyledLines, { StyledLinesProps } from "./MapLine.style";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const MapLine1 = ({ size }: StyledLinesProps) => {
  const [show, setShow] = useState<boolean>(true);
  const [scope, animate] = useAnimate();

  //Animate the svg periodically
  useEffect(() => {
    const pathLength = show ? [0, 1] : [1, 0];
    animate(
      scope.current,
      { pathLength: pathLength },
      {
        delay: 1.8,
        duration: 3,
        type: "tween",
      }
    );
    setTimeout(() => setShow(!show), 5000);
  }, [show]);

  //Ratio for svg based on the original heart bg img it was drawn on
  const svgWidth = 421;
  const svgHeight = 379;
  const svgRatio = svgHeight / svgWidth;
  const heartWidth = 506;
  const svgImgRatio = svgWidth / heartWidth;
  const viewPortHeight = svgRatio * size * svgImgRatio;

  return (
    <StyledLines
      size={size}
      width={size}
      height={viewPortHeight}
      viewBox="0 0 421 379"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_925_46712)">
        <motion.path
          ref={scope}
          d="M90.4018 11.0159C86.6689 17.8595 80.4548 23.4622 76.141 30.001C72.5287 35.4765 68.696 40.6216 65.5549 46.4052C57.3158 61.5755 48.9107 76.6751 41.1892 92.1182C32.6808 109.135 27.7235 127.079 22.5977 145.399C20.7035 152.169 18.0978 159.208 18.3545 166.353C18.8329 179.667 20.5823 193.304 23.0352 206.379C24.612 214.784 26.6672 222.145 31.0842 229.389C36.821 238.797 53.2698 242.048 62.4927 245.268C75.838 249.926 91.2136 256.366 105.8 254.41C116.736 252.945 126.743 246.098 133.709 237.875C140.068 230.368 140.577 218.083 140.577 208.697C140.577 199.986 123.416 199.225 117.436 201.567C110.063 204.455 102.383 213.6 97.3571 218.802C89.4234 227.015 78.5944 237.023 76.491 248.942C75.0012 257.385 75.4022 266.843 77.0159 275.145C79.1123 285.93 81.5624 297.019 89.6144 305.11C101.575 317.129 118.459 325.431 132.659 334.375C151.823 346.447 172.053 357.099 194.951 360.185C201.224 361.03 203.828 355.195 207.2 350.648C215.815 339.03 226.219 326.449 231.609 312.853C234.708 305.036 236.502 296.106 238.871 288.094C241.313 279.833 245.168 270.699 246.22 262.022C247.275 253.317 242.697 243.762 239.658 236.038C234.641 223.286 227.733 211.511 222.773 198.767C219.872 191.316 214.814 182.305 215.074 174.052C215.32 166.23 222.174 158.995 227.322 153.886C231.037 150.199 238.613 143.614 244.776 145.487C259.603 149.991 273.985 159.334 284.146 170.99C288.023 175.436 289.686 181.042 291.714 186.519C297.915 203.268 303.131 220.251 308.512 237.263C311.145 245.586 316.55 257.327 326.622 250.736C337.098 243.881 347.366 234.656 355.494 225.189C366.735 212.096 372.28 194.791 373.341 177.683C374.951 151.722 348.956 134.143 330.209 121.165C322.16 115.592 313.475 110.397 306.675 103.229C305.359 101.843 304.095 99.9564 303.831 97.98C302.96 91.444 308.529 80.345 312.886 75.7578C316.659 71.7867 322.185 69.6783 327.103 67.5775C343.966 60.3759 360.37 51.6053 377.453 44.9616C385.468 41.8447 394.671 41.1376 403 38.5749"
          stroke="#EFCE1E"
          strokeWidth="8"
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_925_46712"
          x="0.337891"
          y="-6.98486"
          width="420.663"
          height="385.253"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.294118 0 0 0 0 0.160784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_46712"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_46712"
            result="shape"
          />
        </filter>
      </defs>
    </StyledLines>
  );
};

export default MapLine1;