import ValueItem from "./ValueItem";
import values, { Value } from "./values";
import StyledValueContainer from "./ValueContainer.style";

const ValueContainer = () => {
  return (
    <StyledValueContainer>
      {values.map((value: Value, i: number) => {
        return <ValueItem value={value} delay={i * 0.3} key={i} />;
      })}
    </StyledValueContainer>
  );
};

export default ValueContainer;
