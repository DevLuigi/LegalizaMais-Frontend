import { DropdownList } from "react-widgets/cjs";
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
`;

const AlertMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    margin-right: .3em;
  }

  & > p {
    font-size: 12px;
    font-weight: bold;
    opacity: .3;
  }
`;

const StyledCombobox = styled(DropdownList)`
  width: 100%;
`;

export { Container, Title, GroupButtons, AlertMessage, StyledCombobox };