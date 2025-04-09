import styled from "styled-components";

const DisplayCSS = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({theme})=>theme.responsivE}) {
    flex-direction: column;
  }
`;

export default DisplayCSS;
