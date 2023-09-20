import StyledLine from "./Line.style";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type LineProps = {
  container: React.RefObject<HTMLDivElement | null>;
};
const Line = ({ container }: LineProps) => {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true });
  const [scope, animate] = useAnimate();
  const [clipWidth, setClipWidth] = useState<number>(0);
  const [clipHeight, setClipHeight] = useState<number>(0);

  useEffect(() => {
    if (container.current) {
      setClipWidth(container.current.clientWidth);
      setClipHeight(container.current.clientHeight);
    }
  }, [container]);

  useEffect(() => {
    animate(
      scope.current,
      { pathLength: [0, 1] },
      {
        delay: 1.3,
        duration: 3,
        type: "tween",
      }
    );
  }, [lineInView]);

  return (
    <StyledLine
      width="2258"
      height="444"
      viewBox="70 70 2258 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={lineRef}
    >
      <g filter="url(#banner-filter)">
        <motion.path
          ref={scope}
          d="M-41.7135 65.8718C-60.6804 70.0866 -55.4876 119.577 -52.4279 131.646C-47.5857 150.745 -26.4102 186.204 -5.70141 192.361C17.4018 199.229 34.6673 205.599 59.4775 207.242C104.333 210.212 148.288 218.26 193.407 218.551C222.629 218.74 253.308 220.99 282.098 215.277C322.879 207.186 361.708 197.664 400.997 183.878C451.804 166.052 491.185 122.122 547.724 122.122C584.409 122.122 647.182 117.049 665.433 159.027C671.73 173.51 681.247 183.917 681.505 200.396C681.791 218.704 681.894 237.151 681.505 255.456C681.035 277.55 668.187 296.85 660.671 317.064C652.255 339.702 631.197 359.02 609.927 369.891C594.502 377.775 574.32 385.362 556.802 380.457C539.734 375.678 528.24 354.574 519.45 340.576C510.461 326.259 483.665 284.456 511.415 272.123C530.69 263.556 563.151 263.239 583.588 268.105C603.752 272.906 611.866 301.099 624.659 314.385C647.358 337.956 669.793 358.796 702.041 369.147C730.099 378.154 756.961 379.266 786.267 379.266C814.233 379.266 847.472 384.372 873.024 371.231C941.679 335.922 988.663 280.505 1037.31 221.676C1064.36 188.967 1092.64 161.996 1123.17 132.985C1151.21 106.349 1188.32 93.9442 1223.47 79.2647C1253.11 66.8852 1282.58 50.0962 1313.06 40.574C1324.92 36.8678 1333.14 33.7287 1345.5 33.7287C1370.38 33.7287 1395.3 30.1524 1416.93 44.4431C1437.25 57.8724 1457.03 72.2235 1477.64 85.2171C1517.57 110.388 1550.96 145.009 1589.25 172.42C1627.85 200.055 1672.23 238.777 1675.11 289.236C1678.06 340.829 1656.55 373.858 1608.89 395.338C1578.02 409.254 1548.22 411.409 1514.99 411.409C1495.18 411.409 1487.7 397.324 1480.91 380.457C1474.43 364.343 1463.42 339.898 1470.8 322.421C1480.93 298.398 1513.73 279.778 1535.08 267.956C1584.97 240.333 1657.2 225.994 1713.36 222.718C1769.93 219.418 1826.96 221.23 1883.59 221.23C1939.92 221.23 1998.38 225.724 2054.28 217.063C2084.53 212.376 2146.15 206.416 2155.92 167.36C2178.26 77.9759 2061.08 74.1744 2004.13 99.8005C1956.18 121.379 1904.2 159.232 1896.1 214.087C1892.22 240.273 1895.9 263.891 1905.62 288.194C1917.53 317.968 1936.07 328.249 1967.82 333.433C2041.48 345.459 2118.4 342.52 2192.82 345.784C2243.43 348.004 2301.41 350.016 2350.26 333.73"
          stroke="#EFCE1E"
          strokeWidth="13"
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <clipPath id="banner-clip">
          <rect
            x="0"
            y="0"
            stroke="#000000"
            strokeMiterlimit="10"
            width={clipWidth}
            height={clipHeight}
          />
        </clipPath>
        <filter
          id="banner-filter"
          x="-87.9678"
          y="0.834717"
          width="2470.73"
          height="443.075"
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
          <feGaussianBlur stdDeviation="13" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.294118 0 0 0 0 0.160784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_956_57810"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_956_57810"
            result="shape"
          />
        </filter>
      </defs>
    </StyledLine>
  );
};

export default Line;
