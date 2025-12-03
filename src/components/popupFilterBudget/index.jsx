import {useEffect, useState} from "react";

import Button from "@components/button";
import TableFilter from "@components/tableFilter";

import ImageLupa from '@images/lupa.png';

import Modal from "react-modal";

import { Container, Title, Input, GroupButtons } from "./styled";

import BudgetAPI from "../../service/budget/budgetService.js";
import Cookies from "js-cookie";
const budgetApi = new BudgetAPI();

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

export default function PopupFilterBudget({ renderModal, setterRender, onConfirm }) {
  const [header, setHeader] = useState({
    id: 1,
    titulo: "titulo"
  });

  const [budgets, setBudgets] = useState([]);
  const [client, setClient] = useState();
  const [selectedBudget, setSelectedBudget] = useState(null);

  let tableActions = new Map();
  tableActions.set("none", () => {});

  const handleClient = () => {
      let logged = Cookies.get('user-logged-client');
      if (logged) {
        let cookie = JSON.parse(logged);
        setClient(cookie);
      }
  }


  const searchClient = async () => {
    debugger;
    const budgetsResponse = await budgetApi.getAllByUserId(client.id);

    const finalResponse = budgetsResponse.data.map((budget) => ({
      id: budget.id,
      titulo: budget.title,
      user: budget.user.id
    }));

    setBudgets(finalResponse);
  }

  const closeModal = () => {
    setterRender(false);
  };

  useEffect(() => {
    handleClient();
  }, []);

  return (
      <Modal
          isOpen={renderModal}
          style={customStyles}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
      >
        <Container>
          <Title> Filtro de Orçamentos </Title>
          <Input>
            <label htmlFor=""> Orçamento </label>
            <div>
              <input type="text" placeholder="Busque por Titulo"/>
              <Button className="sear" color="blue" onClick={() => searchClient()}> <img src={ImageLupa} alt="Lupa" /> </Button>
            </div>
          </Input>
          <TableFilter header={header} data={budgets} actions={tableActions} onClickRow={setSelectedBudget}/>
          <GroupButtons>
            <Button
                color="blue"
                onClick={async () => {
                  await onConfirm(selectedBudget);
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
