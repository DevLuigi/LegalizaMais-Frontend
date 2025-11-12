import styled from "styled-components";

const primaryColor = "#1D43B7";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  width: 20vw;

  button:first-child {
      margin-right: 1em;
  }
`;

const Title = styled.h2 `
  color: ${primaryColor};
`

export { Container, Title, GroupButtons };