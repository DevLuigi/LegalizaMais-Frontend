
import styled from "styled-components";

const Container = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    min-height: 100vh;
    width: 12vw;
    
    background-color: #476EE2;
    font-size: .7em;
    color: white;
    border-right: 2px solid #FFDA12;
`

const GroupItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75%;
    width: 100%;
`;

const Item = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 50px;     
    gap: 0.5em;              

    font-weight: bold;
    white-space: nowrap;
  
    transition: color 0.3s ease;

    &:hover {
        cursor: pointer;
        color: #FFDA12;
    }
`

const Logo = styled.div`
    img {
        width: 8em;
        margin-top: 1em;
    }
`

export { Container, GroupItens, Item, Logo }