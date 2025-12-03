import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import ViewMain from "@components/viewMain";
import EmptyPage from "@components/emptyPage";
import Table from "@components/table";
import Filter from "@components/filter";
import Button from "@components/button";
import PopupAction from "@components/popupAction";
import PopupConfirm from "@components/popupConfirm";
import PopupCombo from "@components/popupCombo";

import { Container, GroupFilterAndButton } from "./styled.js";

import BudgetAPI from "../../../service/budget/budgetService";
import { toast } from "react-toastify";
const budgetApi = new BudgetAPI();

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
    // popupActions.set("Enviar por whatsapp", () => alert("enviou por whatsapp"));
    // popupActions.set("Enviar por E-mail", () => alert("enviar por e-mail"));
    // popupActions.set("Baixar o PDF", () => alert("baixou PDF"));
    popupActions.set("Alterar status do orçamento", () => setShowModalCombo(true));
    popupActions.set("Gerar contrato", () => navigation("/contracts/0"));

    let tableActions = new Map();
    tableActions.set("edit", (item) => navigation("/budgets/" + item?.id));
    tableActions.set("delete", (item) => showDeleteModal(item?.id));
    tableActions.set("kebab", () => setShowModalActions(true));

    const filtered = budgets?.filter(
        (budget) =>
            budget.título?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            budget.cliente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            budget["CPF/CNPJ"]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const listBudgets = async () => {
        const response = await budgetApi.getAll();

        // retira campos desnecessários
        const finalResponse = response.data.map((budget) => ({
            id: budget.id,
            Título: budget.title,
            cliente: budget.client.name,
            "CPF/CNPJ": budget.client.document,
            email: budget.client.email
        }));

        setBudgets(finalResponse);
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
        toast.success(`Status do orçamento alterado com sucesso para ${budgetStatus === 2 ? "Aprovado" : "Reprovado"}!`);
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
                            <Button color="blue" onClick={ () => navigation("/budgets/0") }> Adicionar </Button>
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