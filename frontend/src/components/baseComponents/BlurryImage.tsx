import { useEffect, useState } from "react";
import StyledBlurryImage, { StyledBlurryImageProps } from "./BlurryImage.style";

interface BlurryImageProps
  extends Pick<StyledBlurryImageProps, "height" | "width"> {
  preview: string;
  src: string;
  alt?: string;
  className?: string;
}

const BlurryImage = ({
  preview,
  src,
  alt,
  className,
  width,
  height,
}: BlurryImageProps) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = () => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <StyledBlurryImage
      loading={loading}
      src={currentImage}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  );
};

export default BlurryImage;
