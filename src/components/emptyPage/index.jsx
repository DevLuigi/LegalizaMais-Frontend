import { useNavigate } from "react-router-dom";

import Button from "../../components/button";

import { Container, Text } from "./styled";

export default function EmptyPage(props) {
    const navigation = useNavigate();

    return(
        <Container>
            <Text>
                <h1> Ops, ainda não há {props.subject.toLowerCase()} por aqui. Que tal cadastrar o primeiro? </h1>
                <Button
                    id="btn-example"
                    color="blue"
                    onClick={() => navigation(window.location.pathname+"/form")}
                >
                    Adicionar
                </Button>
            </Text>
            <img src="/assets/images/empty-page.png" alt="empty-page-image" />
        </Container>
    )
}