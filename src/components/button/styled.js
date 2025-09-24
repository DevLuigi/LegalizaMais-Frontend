import styled from "styled-components";

const getHexColor = (color) => {
  switch (color) {
    case "blue":
      return "#1D43B7";
    case "red":
      return "#DC3545";
    case "yellow":
      return "#FFC107";
    default:
      return "#CACACA";
  }
};

const Container = styled.button`
  background-color: ${({ color }) => getHexColor(color)};
  color: white;
  border: none;
  border-radius: 2em;
  padding: 1.1em 0.7em;
  width: 100%;
  transition: background-color 0.4s ease, filter 0.4s ease;

  &:hover {
    cursor: pointer;
    background-color: ${({ color }) => getHexColor(color)};
    filter: brightness(0.85);
  }
`;

const GroupButtons = styled.div`
  display: flex;
  flex-direction: row;

  button {
    padding: 0.9em 0.7em;
  }

  button:first-child {
    margin-right: 1em;
  }
`;

export { Container, GroupButtons };
