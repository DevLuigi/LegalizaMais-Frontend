import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    & > input {
        background-color: #EFEFEF;
        border: none;
        width: 50%;
        border-radius: 8px;
        padding: 1em;
    }

    & > input::placeholder {
        font-weight: bold;
        opacity: .5;
    }
`;

export {
    Container
}