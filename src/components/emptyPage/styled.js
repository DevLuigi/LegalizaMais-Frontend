import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height: 90%;

    img {
        width: 45%;
    }
`;

const Text = styled.div`
    text-align: center;
    width: 45%;

    button {
        width: 50%;
    }
`; 

export { Container, Text };