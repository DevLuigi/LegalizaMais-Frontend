import { DropdownList } from "react-widgets/cjs";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
`;

const GroupButton = styled.div`
    display: flex;
    justify-content: center;
    
    & > button {
        width: 15vw;
        margin: 1em;

        font-weight: bold;
    }
`;

const GroupInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ColumnInput = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 45%;
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

    & > input:disabled {
        background-color: #C4C0C0;
        font-weight: bold;
        color: black;
    } 
`;

const Title = styled.h1`
    align-self: center;
    margin: 0px;
    color: #1D43B7;
`;

const InputClient = styled.input`
    height: 2vh;
    padding: .8em;
    background-color: #EFEFEF;
    border: none;
    width: 85%;
    border-radius: .5em;

    &:disabled {
        background-color: #C4C0C0;
        font-weight: bold;
        color: black;
    } 
`;

const ButtonModal = styled.button`
    font-weight: bold;
    font-size: 1em;    
    color: #efefef;

    background-color: #1D43B7;
    
    border: none;
    border-radius: 100%;

    width: 2vw;
    height: 4vh;
    margin-left: .5em;

    cursor: pointer;
`;

const Chip = styled.div`
    background-color: #FFDA12;
    color: #FFFF;
    font-weight: bold;
    font-size: 14px;
    width: fit-content;
    padding: .5em;
    border-radius: .5em;
    cursor: pointer;
`;

const GroupLabelButton = styled.div`
    label {
        font-weight: bold;
        margin-bottom: .3em;
    }
`;

const GroupServices = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-height: 10vh;
    overflow-x: hidden;
    margin-top: .5em;

    & > div {
        display: flex;
        margin-top: .5em;
    }

    & > div:hover {
        svg {
            opacity: 1;
        }
    }

    & > div > svg {
        opacity: 0;
    }

    & > div > svg {
        position: relative;
        left: -8px;
        top: -5px;
        background: red;
        border-radius: .5em;
        color: white;
        margin: 0px;
        cursor: pointer;
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

const AlignInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const InputTotal = styled.div`
    width: 70%;
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
`;

const InputDiscount = styled.div`
    width: 30%;
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
`;

const StyledCombobox = styled(DropdownList)`
    margin: .5em;
`;

export { 
    Container, 
    GroupButton, 
    GroupInput, 
    ColumnInput, 
    Input, 
    Title, 
    InputClient,
    ButtonModal,
    Chip,
    GroupLabelButton,
    GroupServices,
    TextArea,
    AlignInputs,
    InputTotal,
    InputDiscount,
    StyledCombobox
}