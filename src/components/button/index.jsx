import { Container } from "./styled.js";

export default function Button(props) {
    return(
        <Container id={props.id} color={props.color} onClick={() => props.onClick && props.onClick()}>
            {props.children}
        </Container>
    )
}