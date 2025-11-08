import styled from "styled-components";

const primaryColor = "#1D43B7";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
  width: 30vw;

  button:first-child {
      margin-right: 1em;
  }
`;

const Title = styled.h2 `
  color: ${primaryColor};
`

export { Container, Title };