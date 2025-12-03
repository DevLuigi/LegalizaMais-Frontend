import { useEffect, useState } from "react";
import ViewMain from "../../../components/viewMain";
import EmptyPage from "../../../components/emptyPage";
import {GroupFilterAndButton} from "../../budgets/list/styled.js";
import Filter from "@components/filter/index.jsx";
import Button from "@components/button/index.jsx";
import Table from "@components/table/index.jsx";
import {generateContract} from "../../../service/utils/GenerateContract.jsx";
import apiService from "../../../service/contract/contractService.js";
import {Container} from "./styled.js";

export default function ListContracts() {
    const api = new apiService();
    const [contracts, setContracts] = useState([]);
    const [header, setHeader] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const path = ["Contratos", "Lista de contratos"];

    const templates = import.meta.glob("../../../assets/templates/*.jsx", { eager: true });
    const typesContracts = Object.entries(templates).map(([path, module]) => {
        const fileName = path.split("/").pop().replace(".jsx", "");
        return {
            fileName,
            module
        };
    });

    let tableActions = new Map();
    tableActions.set("PDF", (item) => {
        const constract = typesContracts.filter(itemType => itemType.fileName == item.tipo);
        generateContract({ page: constract[0].module.default, fileName: constract[0].fileName || 'Contrato' })
    });

    const filtered = contracts?.filter(
        (contract) =>
            contract.titulo?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const listContracts = async () => {
        const resp = await api.getAll();
        const finalResponse = resp.data.map((contract) => ({
            id: contract.id,
            titulo: contract.budget.title,
            nome: contract.client.name,
            "E-mail": contract.client.email,
            tipo: contract.typeContract.nameType,
            inclusao: contract.inclusionDate.substring(0, 10)
        }));

        setContracts(finalResponse);

        setHeader({
            id: "00",
            titulo: "Titulo Contrato",
            nome: "Nome Cliente",
            "E-mail": "Email Cliente",
            tipo: "Tipo contrato",
            inclusao: "Data inclusao"
        })
    }

    useEffect(() => {
        listContracts();
    }, []);

    return(
        contracts.length <= 0 ? 
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
                    </Container>
                </ViewMain>
            )
    )
}