import { MotionProps } from "framer-motion";
import { useEffect, useState } from "react";
import StyledImage, { StyledImageProps } from "./Image.style";

interface ImgProps extends MotionProps, StyledImageProps {}

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  onClick,
  ...motionProps
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsImgLoaded(true);
    };
  }, [src]);

  return (
    <StyledImage
      {...motionProps}
      src={src}
      alt={alt}
      width={width}
      height={height}
      isImgLoaded={isImgLoaded}
      className={className}
      onClick={onClick}
    ></StyledImage>
  );
};

export default Img;
