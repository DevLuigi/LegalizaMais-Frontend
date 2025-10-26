import { useEffect, useState } from "react";
import ViewMain from "../../../components/view/viewMain";
import EmptyPage from "../../../components/emptyPage";
import Table from "../../../components/table";
import { Container } from "./styled.js";

export default function ListBudgets() {
    const [budgets, setBudgets] = useState([]);
    const path = ["Orçamentos", "Lista de orçamentos"];

    const data = Array(12).fill({
        corinthians: "Cacanabis ancião da fiel",
        "CPF/CNPJ": "831.884.710-50",
        endereçooooo: "Rua teste, bairro teste, nº 100",
        telefone: "(11) 999999999",
        email: "clienteTeste@email.com",
        campo1: "Valor 1",
        campo2: "Valor 2",
    });

    let actions = new Map();
    actions.set("edit", () => { alert("Substituir por função de editar") });
    actions.set("delete", () => { alert("Substituir por função de deletar") });
    actions.set("PDF", () => { alert("Substituir por função de gerar PDF") });
    actions.set("email", () => { alert("Substituir por função de enviar email") });
    actions.set("whatsapp", () => { alert("Substituir por função de enviar WhatsApp") });
    // actions.set("none", () => {}); // Use "none" para esconder a coluna de ações

    useEffect(() => {
        setBudgets(['corinthians']);
    }, []);

    return(
        budgets.length <= 0 ? 
            (
                <ViewMain path={path}>
                    <EmptyPage subject={path[0]} />
                </ViewMain>
            ) 
            
            : 
            
            (
                <ViewMain path={path}>
                    <Container>
                        <Table data={data} actions={actions} />
                    </Container>
                </ViewMain>
            )
    )
}