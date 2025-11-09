import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ViewMain from "@components/view/viewMain";
import EmptyPage from "@components/emptyPage";
import Table from "@components/table";
import Filter from "@components/filter";
import Button from "@components/button";
import PopupAction from "@components/popupAction";
import PopupConfirm from "@components/popupConfirm";
import PopupCombo from "@components/popupCombo";

import { Container, GroupFilterAndButton } from "./styled.js";

export default function ListBudgets() {
    const [budgets, setBudgets] = useState([]);
    const [header, setHeader] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [showModalActions, setShowModalActions] = useState(false);
    const [showModalConfirm, setShowModalConfirm] = useState(false);
    const [showModalCombo, setShowModalCombo] = useState(false);
    const [rowId, setRowId] = useState(0);
    const [budgetStatus, setBudgetStatus] = useState(2);
    
    const path = ["Orçamentos", "Lista de orçamentos"]; 
    const navigation = useNavigate();

    let popupActions = new Map();
    popupActions.set("Enviar por whatsapp", () => alert("enviou por whatsapp"));
    popupActions.set("Enviar por E-mail", () => alert("enviar por e-mail"));
    popupActions.set("Baixar o PDF", () => alert("baixou PDF"));
    popupActions.set("Alterar status do orçamento", () => setShowModalCombo(true));
    popupActions.set("Gerar contrato", () => alert("gerou contrato"));

    let tableActions = new Map();
    tableActions.set("edit", (item) => navigation("/budgets/form/" + item?.id));
    tableActions.set("delete", (item) => showDeleteModal(item?.id));
    tableActions.set("kebab", () => setShowModalActions(true));

    const filtered = budgets?.filter(
        (budget) =>
            budget.título?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            budget.cliente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            budget["CPF/CNPJ"]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const listBudgets = () => {
        setBudgets([
            {
                id: 1,
                título: "Pintura de parede",
                cliente: "Cacanabis ancião",
                "CPF/CNPJ": "831.884.710-50",
                email: "clienteTeste@email.com"
            },
            {
                id: 2,
                título: "Construção Neo Quimica Arena",
                cliente: "Andrés sanches fdp",
                "CPF/CNPJ": "666.666.666-66",
                email: "andressanchesfdp@email.com"
            },
            {
                id: 3,
                título: "Quarto do timão",
                cliente: "Luigi",
                "CPF/CNPJ": "123.456.789-10",
                email: "luigidasilvacoelho@gmail.com"
            }
        ]);

        setHeader({
                id: 1,
                título: "Pintura de parede",
                cliente: "Cacanabis ancião",
                "CPF/CNPJ": "831.884.710-50",
                email: "clienteTeste@email.com"
        })
    }

    const showDeleteModal = (item) => {
        setRowId(item);
        setShowModalConfirm(true);
    }

    const deleteBudget = () => {
        alert('deletou o orçamento ' + rowId);
    }

    const alterBudgetStatus = () => {
        alert('Alterou status do orçamento para: ' + budgetStatus);
    }

    useEffect(() => {
        listBudgets();
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
                        <GroupFilterAndButton>
                            <Filter placeholder="Busque por título, cliente ou CNPJ/CPF" value={searchTerm} onChange={setSearchTerm} />
                            <Button color="blue" onClick={ () => navigation("/budgets/form") }> Adicionar </Button>
                        </GroupFilterAndButton>
                        <Table header={header} data={filtered} actions={tableActions} />
                        
                        {/* Modal of delete action */}
                        {showModalConfirm &&
                            <PopupConfirm 
                                title={`Deseja excluir o orçamento ${rowId}?`} 
                                onConfirm={ () => deleteBudget() } 
                                setterRender={setShowModalConfirm} 
                                renderModal={showModalConfirm} 
                            />
                        }

                        {/* Menu's kebab modal of actions */}
                        {showModalActions && 
                            <PopupAction 
                                actions={popupActions} 
                                setterRender={setShowModalActions} 
                                renderModal={showModalActions} 
                            />
                        }

                        {/* Menu's kebab modal of budget status */}
                        {showModalCombo &&
                            <PopupCombo 
                                title="Alterar status do orçamento" 
                                options={[{id: 2, name: "Aprovado"}, {id: 3, name: "Reprovado"}]}
                                alertMessage="Após aprovação ou reprovação, não será mais possível alterar o status do orçamento."
                                setterRender={setShowModalCombo}
                                renderModal={showModalCombo}
                                onConfirm={alterBudgetStatus}
                                value={budgetStatus}
                                onChange={setBudgetStatus}
                            />
                        }
                    </Container>
                </ViewMain>
            )
    )
}