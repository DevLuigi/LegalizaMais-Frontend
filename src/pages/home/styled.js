import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items: center;
    height:90%;

    &>img{width:40%;}

`;
const Text= styled.div`
    display:flex;
    flex-direction:column;
    /* align-items:center; */
    text-align:center;
    line-height:2em;
    width:45%;
    button {
        width:30%;
    }

    p {
        width:50%;
        align-self:center;
    }

    h1{
        width:45%;
        align-self:center;
    }
`;

const GroupButtons= styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;

    & > button:first-child {
        margin-right:1em
    }
`

export { Container, Text, GroupButtons };