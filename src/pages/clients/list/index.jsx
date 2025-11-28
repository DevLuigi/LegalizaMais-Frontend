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
import ClientAPI from "../../../service/client/client";


const api = new ClientAPI();

export default function ListClients() {
  const [clients, setClients] = useState([]);
  const [header, setHeader] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalActions, setShowModalActions] = useState(false);
  const [rowId, setRowId] = useState(null);

  const navigation = useNavigate();
  const path = ["Clientes", "Lista de clientes"];

  let popupActions = new Map();
  popupActions.set("Editar cliente", () => navigation("/clients/" + rowId));
  popupActions.set("Excluir cliente", () => setShowModalConfirm(true));

  let tableActions = new Map();
  tableActions.set("edit", (item) => navigation("/clients/" + item.id));
  tableActions.set("delete", (item) => showDeleteModal(item.id));
  // tableActions.set("kebab", (item) => {
  //   setRowId(item.id);
  //   setShowModalActions(true);
  // });


  const filteredClients = clients.filter((c) =>
    (c.nome || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.documento || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.email || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const listAllClients = async () => {
    const response = await api.getAllClients();

    if (response.status !== 200) {
      toast.warn(response.error);
      console.log(response.message);
      return;
    }

    setClients(response.data);

    setHeader({
      id: "Id", 
      Nome: "nome",
      "Tipo de pessoa": "Tipo de pessoa",
      "CPF/CNPJ": "documento",
      DDD: "DDD",
      Telefone: "telefone",
      "E-mail": "email",
      CEP: "CEP",
      "Número da residência": "Número da residência",
      Complemento: "Complemento",
      "Data da criação do cliente": "Data da criação do cliente"
    });

  }

  const showDeleteModal = (id) => {
    setRowId(id);
    setShowModalConfirm(true);
  };

  const deleteClient = () => {
    alert("Cliente deletado: " + rowId);
    setShowModalConfirm(false);
  };

  useEffect(() => {
    listAllClients();
  }, []);


  return clients.length <= 0 ? (
    <ViewMain path={path}>
      <EmptyPage subject={path[0]} />
    </ViewMain>
  ) : (
    <ViewMain path={path}>
      <Container>
        <GroupFilterAndButton>
          <Filter
            placeholder="Busque por nome, CPF/CNPJ ou email"
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <Button color="blue" onClick={() => navigation("/clients/:id")}>
            Adicionar
          </Button>
        </GroupFilterAndButton>

        <Table header={header} data={filteredClients} actions={tableActions} />

        {showModalConfirm && (
          <PopupConfirm
            title={`Deseja excluir o cliente ${rowId}?`}
            onConfirm={deleteClient}
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
