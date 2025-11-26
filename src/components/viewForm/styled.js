import styled from "styled-components";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #1C92D2, white);

    & > img {
        align-self: flex-end;
        width: 10em;
        margin: .5em;
    } 
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
`;

const BoxContent = styled.div`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background-color: white;
    border: 1px solid #1D43B7;
    border-radius: 5px;
`;

export { Container, Content, BoxContent };