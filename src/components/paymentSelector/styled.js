import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: .5em;
`;

const Title = styled.label`
  font-weight: bold;
`;

const OptionsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  font-weight: bold;

  & > label {
    font-size: 14px;
  }
`;

const FakeCheckbox = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  border: 2px solid #ccc;
  background: ${({ checked }) => (checked ? "#1D43B7" : "#eee")};
  transition: 0.2s;
`;

export { Container, Title, OptionsGrid, Option, FakeCheckbox };