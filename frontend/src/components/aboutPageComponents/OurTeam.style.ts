import styled from "styled-components";

const StyledOurTeam = styled.div`
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  h1 {
    font-size: 3rem;
    margin: ${(p) => p.theme.spacing.spacing_1} auto;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    font-weight: ${(p) => p.theme.fw.fw_semibold};
    max-width: 70%;
  }
`;
export default StyledOurTeam;
