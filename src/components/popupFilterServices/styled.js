import styled from "styled-components";

const primaryColor = "#1D43B7";

const Container = styled.div`  
    width: 40vw;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5em;

    & > label {
        align-self: flex-start;
        font-weight: bold;
        margin-bottom: .3em;
    }

    & > div {
        display: flex;
        flex-direction: row;
    }

    & > div > input {
        height: 2vh;
        width: 100%;
        padding: .8em;
        background-color: #EFEFEF;
        border: none;
        border-radius: .5em;
    }

    & > div > button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .5em;
        height: 3em;
        width: 3em;
    }
`;

const GroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40vw;

  margin-top: 1em;

  & > button {
    width: 13vw;
  }

  button:first-child {
    margin-right: 1em;
  }
`;

const Title = styled.h2 `
  color: ${primaryColor};
`

export { Container, Input, GroupButtons, Title };