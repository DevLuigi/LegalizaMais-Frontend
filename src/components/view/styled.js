import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 100vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > main {
    flex: 1;
  }
`;

const GroupPath = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  margin: 1em;
`;

const Path = styled.h1`
  font-size: 1em;
  color: ${({ root }) => (root ? '#476EE2' : '#1F1D1D')};
`;

export { Container, Content, Path, GroupPath };