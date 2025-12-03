import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 3em;
`;
const ColumnInput = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 40%;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5em;

    & > label {
        font-weight: bold;
        margin-bottom: .3em;
    }

    & > input {
        height: 2vh;
        padding: .8em;
        background-color: #EFEFEF;
        border: none;
        border-radius: .5em;
    }

    & > input:disabled, & > textarea:disabled {
        background-color: #C4C0C0;
        font-weight: bold;
        color: black;
    } 
`;

const GroupButton = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 93%;
    & > button {
        padding: 1em 3em;
        margin: 1em;
        font-weight: bold;
        width: 20em;
    }
`;

const TextArea = styled.textarea`
    height: 5vh !important;
    padding: .8em;
    background-color: #EFEFEF;
    border: none;
    border-radius: .5em;
    resize: none;
    line-height: 1.5em;
`;

const GroupInput = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    gap: 10em;
`;

const GroupContracts = styled.div`
    display: flex;
    width: 90%;
    gap: 3em;

    background-color: #fafafa;
    padding: 2em 1em;
    margin-top: .5em;
`;

const BoxContract = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: .5em;
    
    background-color: #476EE2;
    border: 2px solid #476EE2;
    color: white;
    
    width: 10em;
    height: 13em;
    
    &:hover {
        cursor: pointer;
        border: 2px solid #FFDA12;
    }
    &:focus {
        cursor: pointer;
        border: 2px solid #FFDA12;
    }
`;

const ContainerContracts = styled.div`
    margin: .5em;
    
    & > label {
        font-weight: bold;
    }
`

export { Container, Input, ColumnInput, GroupButton, TextArea, GroupInput, GroupContracts, BoxContract, ContainerContracts };