import { useState } from "react";

import Button from "@components/button";
import TableFilter from "@components/tableFilter";

import ImageLupa from '@images/lupa.png';

import Modal from "react-modal";

import { Container, Title, Input, GroupButtons } from "./styled";

import ClientAPI from "../../service/client/client";
const clientApi = new ClientAPI();

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    borderRadius: "1em",
    padding: "2rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1000 // Forçando Z-index de 1000 para que seja superior a qualquer componente
  },
};

export default function PopupFilterClient({ renderModal, setterRender, onConfirm }) {
  const [header, setHeader] = useState({
        id: 1,
        name: "name",
        "CNPJ/CPF": "000.000.000-00",
        "E-mail": "email@email.com"
  });

  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  let tableActions = new Map();
  tableActions.set("none", () => {});

  const searchClient = async () => {
    const clientsResponse = await clientApi.getAllClients();
    
    // retira campos desnecessários
    const finalResponse = clientsResponse.data.map((client) => ({
      id: client.id,
      name: client.name,
      "CNPJ/CPF": client.document,
      "E-mail": client.email
    }));

    setClients(finalResponse);
  }

  const closeModal = () => {
    setterRender(false);
  };

  return (
    <Modal
      isOpen={renderModal}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <Container>
        <Title> Filtro de clientes </Title>
        <Input>
            <label htmlFor=""> Cliente </label>
            <div>
              <input type="text" placeholder="Busque por nome ou CNPJ/CPF"/>
              <Button className="sear" color="blue" onClick={() => searchClient()}> <img src={ImageLupa} alt="Lupa" /> </Button>
            </div>
        </Input>
        <TableFilter header={header} data={clients} actions={tableActions} onClickRow={setSelectedClient}/>
        <GroupButtons>
          <Button
            color="blue"
            onClick={async () => {
              await onConfirm(selectedClient);
              closeModal();
            }}
          > 
            Selecionar
          </Button>
          <Button color="red" onClick={() => closeModal()}>
            Cancelar
          </Button>
        </GroupButtons>
      </Container>
    </Modal>
  );
}
