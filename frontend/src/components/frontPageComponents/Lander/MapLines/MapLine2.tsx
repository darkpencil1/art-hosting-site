import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StyledLines from "./MapLine.style";
import Filter from "./Filter";

const MapLine2 = () => {
  const [size, setSize] = useState<350>(350);

  //Calculate the svg size ratio based on window width
  useEffect(() => {
    function calcSize() {
      if (window.innerWidth > 1400) {
        setSize(350);
      } else if (window.innerWidth > 1200) {
        setSize(350);
      } else setSize(350);
    }

    calcSize();

    // Event listener for window resize
    window.addEventListener("resize", calcSize);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, []);

  //Ratio for svg based on the original heart bg img it was drawn on
  const svgWidth = 464;
  const svgHeight = 458;
  const heartWidth = 504;
  const svgRatio = svgHeight / svgWidth;
  const svgHeartRatio = svgWidth / heartWidth;

  //Size is heart's current width
  const svgScaledWidth = svgHeartRatio * size;
  const svgScaledHeight = svgRatio * svgScaledWidth;

  return (
    <StyledLines
      size={size}
      width={svgScaledWidth}
      height={svgScaledHeight}
      viewBox="0 0 464 458"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#svg-shadow)">
        <motion.path
          animate={{ pathLength: [0, 1] }}
          transition={{
            delay: 1.8,
            duration: 4,
            type: "tween",
          }}
          d="M-8.53125 84.8074C31.046 84.8074 73.2293 81.5401 111.561 93.1194C126.108 97.5138 139.099 107.982 150.044 118.271C159.818 127.459 164.017 140.694 166.722 153.516C170.681 172.279 172.105 192.795 170.932 211.916C169.527 234.813 161.303 253.181 149.181 272.205C135.299 293.99 116.15 313.129 96.7719 330.065C81.8898 343.072 63.337 353.692 50.1924 368.495C40.5132 379.394 12.3934 407.666 32.5969 420.903C47.8186 430.876 70.1711 428.464 87.2185 426.355C112.194 423.265 137.446 416.265 160.677 406.708C183.287 397.407 204.968 386.21 226.849 375.349C244.868 366.405 262.144 356.128 272.349 338.269C279.074 326.501 288.138 311.47 279.042 298.544C276.135 294.414 271.105 293.739 266.412 293.687C257.659 293.588 248.192 292.777 239.803 295.738C231.414 298.699 222.461 306.702 216.54 313.117C209.699 320.529 206.473 327.963 206.123 337.945C205.809 346.885 203.444 356.564 207.311 365.04C211.476 374.173 219.257 383.562 227.011 389.868C247.152 406.246 273.098 408.327 298.041 408.327C329.975 408.327 366.064 409.125 394.708 393.269C408.997 385.359 428.98 372.656 431.95 355.163C437.115 324.745 413.151 296.136 391.038 278.142C381.728 270.566 371.277 265.431 360.866 259.683C352.235 254.918 344.519 248.569 336.254 243.221C327.712 237.694 319.265 234.235 315.097 224.276C312.853 218.917 311.93 211.014 313.477 205.277C316.809 192.923 336.785 184.584 346.833 178.722C359.286 171.458 372.206 167.211 386.234 163.933C397.863 161.216 424.901 156.21 425.689 174.728C426.927 203.824 421.55 232.477 398.001 252.289C370.711 275.247 330.83 276.091 297.069 273.824C286.142 273.091 266.833 271.968 261.069 260.439C257.315 252.931 256.197 245.156 255.509 236.906C254.912 229.733 253.072 220.255 255.401 213.265C259.722 200.303 273.771 188.95 284.655 182.015C308.394 166.889 335.511 159.808 362.054 151.303C377.125 146.474 392.203 141.781 407.23 136.838C416.745 133.708 427.902 130.425 433.515 121.51C438.45 113.672 422.648 101.677 417.323 98.6248C410.51 94.7195 402.863 92.4445 395.194 91.1764C381.66 88.9384 368.366 86.0618 354.713 84.3217C324.818 80.5114 295.241 78.9783 265.117 78.9783C239.496 78.9783 214.625 75.9581 189.121 74.3365C173.377 73.3354 158.101 71.1687 142.596 68.2914C132.442 66.4072 121.024 64.4586 112.154 58.792C103.387 53.1905 95.5663 48.2505 88.7298 40.171C78.1574 27.6763 65.7408 16.9189 54.6183 4.92601C48.0726 -2.13196 43.9028 -10.6258 37.6704 -17.6891C36.0507 -19.5248 34.9716 -21.7375 34.2161 -24.004"
          stroke="#FFCA7A"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>

      <defs>
        <Filter id="svg-shadow" />
      </defs>
    </StyledLines>
  );
};

export default MapLine2;
