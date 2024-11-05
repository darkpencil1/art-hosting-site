import StyledWIP from "./WIP.style";

const WIP = () => {
  return (
    <StyledWIP>
      <div className="wip__message">
        <p>
          This site serves as a proof-of-concept and has not been optimized for
          mobile widths. Please use a laptop or a larger screen to view the
          page.
        </p>
      </div>
    </StyledWIP>
  );
};

export default WIP;
