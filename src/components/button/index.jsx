import { Container } from "./styled.js";

export default function Button(props) {
    return(
        <Container color={props.color} onClick={() => props.onClick && props.onClick()}>
            {props.children}
        </Container>
    )
}