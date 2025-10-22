
import styled from "styled-components";

const Container = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    min-height: 100vh;
    width: 4vw; /* largura reduzida */
    
    background-color: #476EE2;
    font-size: .7em;
    color: white;
    border-right: 2px solid #FFDA12;
    transition: width 0.3s ease; /* transição suave */

    &:hover {
        width: 12vw; /* expande ao passar o mouse */
    }
`;

const GroupItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75%;
    width: 100%;

    ${Container}:hover & {
        align-items: flex-start; /* volta ao normal ao expandir */
        padding-left: 0.5em;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    gap: 0.5em;
    
    width: 9vw;
    height: 50px;     

    font-weight: bold;
    transition: color 0.3s ease, opacity 0.3s ease;
    color: white;

    span {
        display: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    /* Quando o menu estiver expandido */
    ${Container}:hover & span {
        display: block;
        opacity: 1;
    }

    &:hover {
        cursor: pointer;
        color: #FFDA12;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1em;

    img {
        width: 2.5em;
        transition: opacity 0.3s ease;
    }

    .logo-full {
        display: none;
        width: 8em;
    }

    /* Quando o menu estiver em hover, esconde a mini e mostra a full */
    ${Container}:hover & .logo-mini {
        display: none;
    }

    ${Container}:hover & .logo-full {
        display: block;
    }
`;

export { Container, GroupItens, Item, Logo }