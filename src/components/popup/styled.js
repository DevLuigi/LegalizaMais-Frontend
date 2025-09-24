import styled from "styled-components";

const primaryColor = "#1D43B7";

const Container = styled.div`
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

const Card = styled.div`
  padding: 20px;
  border: 1px solid ${primaryColor};
  border-radius: 5px;
  width: 300px;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export { Container, Card };