import { useState } from "react";

import Button from "@components/button";
import TableFilter from "@components/tableFilter";

import ImageLupa from '@images/lupa.png';

import Modal from "react-modal";

import { Container, Title, Input, GroupButtons } from "./styled";

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
        name: "Cliente Teste 1",
        "CNPJ/CPF": "123.456.789-00",
        "E-mail": "teste1@email.com"
  });

  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  let tableActions = new Map();
  tableActions.set("none", () => {});

  const searchClient = () => {
    setClients([
      {
        id: 1,
        name: "Luigi da silva coelho",
        "CNPJ/CPF": "123.456.789-00",
        "E-mail": "luigi@email.com"
      },
      {
        id: 2,
        name: "kaio da silva coelho",
        "CNPJ/CPF": "123.456.789-00",
        "E-mail": "kaio@email.com"
      },
      {
        id: 3,
        name: "Cacanabis da fiel",
        "CNPJ/CPF": "123.456.789-00",
        "E-mail": "cacanabis@email.com"
      }
    ]);

    setHeader({
        id: 1,
        name: "Cliente Teste 1",
        "CNPJ/CPF": "123.456.789-00",
        "E-mail": "teste1@email.com"
    });
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
