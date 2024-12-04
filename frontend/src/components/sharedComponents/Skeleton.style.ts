import styled from "styled-components";

type StyledSkeletonProps = {
  height: number;
  width: number;
};

const StyledSkeleton = styled.div<StyledSkeletonProps>`
  background: linear-gradient(90deg, #e0e0e0 25%, #f3f3f3 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 15px;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray};
  border-right: 2px solid ${(props) => props.theme.colors.gray};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
  height: ${(p) => `${p.height}px`};
  width: ${(p) => `${p.width}px`};

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export default StyledSkeleton;
