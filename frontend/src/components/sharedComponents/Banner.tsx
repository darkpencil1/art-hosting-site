import StyledBanner from "./Banner.style";

type BannerProps = {
  title: string;
  short: string;
};

const Banner = ({ title, short }: BannerProps) => {
  return (
    <StyledBanner>
      <h1>{title}</h1>
      <p>{short}</p>
    </StyledBanner>
  );
};

export default Banner;
