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

export default function PopupFilterServices({ renderModal, setterRender, onConfirm }) {
  const [header, setHeader] = useState({
        id: 1,
        description: "Serviço",
        suggestedValue: 100.50
  });

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  let tableActions = new Map();
  tableActions.set("none", () => {});

  const searchService = () => {
    setServices([
      {
        id: 1,
        description: "Pintura de parede",
        suggestedValue: 100.50
      },
      {
        id: 2,
        description: "Reforma elétrica",
        suggestedValue: 200.75
      },
      {
        id: 3,
        description: "Instalação hidráulica",
        suggestedValue: 50.25
      }
    ]);

    setHeader({
        id: 1,
        description: "Serviço",
        suggestedValue: 100.50
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
        <Title> Filtro de serviços </Title>
        <Input>
            <label htmlFor=""> Serviço </label>
            <div>
              <input type="text" placeholder="Busque por descrição"/>
              <Button className="sear" color="blue" onClick={() => searchService()}> <img src={ImageLupa} alt="Lupa" /> </Button>
            </div>
        </Input>
        <TableFilter header={header} data={services} actions={tableActions} onClickRow={setSelectedService}/>
        <GroupButtons>
          <Button
            color="blue"
            onClick={async () => {
              await onConfirm((prev) => [...prev, selectedService]);
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
