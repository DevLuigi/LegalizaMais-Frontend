import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GroupFilterAndButton = styled.div`
  display: flex;
  align-items: center;
  width: 85vw;
  margin-bottom: 1em;

  & > button {
    font-weight: bold;
    height: 3em;
    width: 14em;
    padding: 0px;
  }
`;

export { Container, GroupFilterAndButton };
