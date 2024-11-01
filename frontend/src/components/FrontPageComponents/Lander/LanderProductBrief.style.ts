import styled from "styled-components";

const StyledLanderProductBrief = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  gap: 30px;

  min-height: 200px;
  height: 200px;
  min-width: 600px;
  width: 600px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  padding: 0;
  background-color: ${(p) => p.theme.colors.white};

  img {
    object-fit: contain;
    height: 160px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: ${(p) => p.theme.br.br_medium};
  }

  .landerBrief__text-container {
    width: 50%;
    > p {
      margin-top: 0;
      font-size: ${(p) => p.theme.fs.font_sm};
    }

    > span {
      display: flex;
      flex-direction: row;
      flex-wrap: no-wrap;
      justify-content: center;
      gap: 10px;

      /*Icon*/
      > div {
        > img {
          width: 40px;
          height: 40px;
        }
      }
      > h3 {
        text-transform: uppercase;
        //font-weight: ${(p) => p.theme.fw.fw_bold};
        font-size: ${(p) => p.theme.fs.font_md};
      }
    }
  }
`;

export default StyledLanderProductBrief;
