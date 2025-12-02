import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/button";
import Filter from "@components/filter";
import ViewMain from "@components/viewMain";
import EmptyPage from "@components/emptyPage";
import Table from "@components/table";
import PopupConfirm from "@components/popupConfirm";
import PopupAction from "@components/popupAction";

import { Container, GroupFilterAndButton } from "./styled";

import ServiceAPI from "../../../service/workService/workService"
const api = new ServiceAPI();

export default function ListServices() {
    const [services, setServices] = useState([]);
    const [header, setHeader] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [showModalConfirm, setShowModalConfirm] = useState(false);
    const [showModalActions, setShowModalActions] = useState(false);
    const [rowId, setRowId] = useState(null);

    const navigation = useNavigate();
    const path = ["Serviços", "Lista de serviços"];

    let popupActions = new Map();
    popupActions.set("Editar serviço", () =>
        navigation("/services/form", { state: { client: selectedRowData } })
    );

    popupActions.set("Excluir serviço", () => setShowModalConfirm(true));

    let tableActions = new Map();
    tableActions.set("edit", (item) =>
        navigation("/services/form", { state: { client: item } })
    );

    tableActions.set("delete", (item) => showDeleteModal(item.id));
    // tableActions.set("kebab", (item) => {
    //   setRowId(item.id);
    //   setShowModalActions(true);
    // });

    function formatCurrency(value) {
        if (value == null) return "";
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    }

    const filteredServices = services.filter((c) =>
        (c.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (c.serviceDescription || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatCurrency(c.suggestedValue).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const listAllServices = async () => {
        const response = await api.getAllServices();

        if (response.status !== 200) {
            toast.warn(response.error);
            console.log(response.message);
            return;
        }

        setServices(response.data);

        setHeader({
            "Id": "Id",
            "Título": "Título",
            "Descrição do serviço": "Descrição do serviço",
            "Valor sugerido": "Valor sugerido",
            "Data de inclusão": "Data de inclusão",
            "Data de alteração": "Data de alteração"
        });

    }

    const showDeleteModal = (id) => {
        setRowId(id);
        setShowModalConfirm(true);
    };

    const deleteService = async () => {
        await api.deleteService(rowId);

        alert("Serviço deletado: " + rowId);
        setShowModalConfirm(false);
    };

    useEffect(() => {
        listAllServices();
    }, []);


    return services.length <= 0 ? (
        <ViewMain path={path}>
            <EmptyPage subject={path[0]} />
        </ViewMain>
    ) : (
        <ViewMain path={path}>
            <Container>
                <GroupFilterAndButton>
                    <Filter
                        placeholder="Busque por título, descrição ou valor"
                        value={searchTerm}
                        onChange={setSearchTerm}
                    />

                    <Button color="blue" onClick={() => navigation("/services/form")}>
                        Adicionar
                    </Button>
                </GroupFilterAndButton>

                <Table header={header} data={filteredServices} actions={tableActions} />

                {showModalConfirm && (
                    <PopupConfirm
                        title={`Deseja excluir o serviço ${rowId}?`}
                        onConfirm={deleteService}
                        setterRender={setShowModalConfirm}
                        renderModal={showModalConfirm}
                    />
                )}

                {showModalActions && (
                    <PopupAction
                        actions={popupActions}
                        setterRender={setShowModalActions}
                        renderModal={showModalActions}
                    />
                )}
            </Container>
        </ViewMain>
    );
}
