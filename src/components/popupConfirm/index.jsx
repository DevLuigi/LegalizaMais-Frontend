import Modal from "react-modal";
import Button from "@components/button";
import { Container, Title, GroupButtons } from "./styled";

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

export default function PopupConfirm({ title, renderModal, setterRender, onConfirm }) {
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
        <Title> {title} </Title>
        <GroupButtons>
          <Button
            color="blue"
            onClick={async () => {
              await onConfirm();
              closeModal();
            }}
          > 
            Sim
          </Button>
          <Button color="red" onClick={() => closeModal()}>
            Não
          </Button>
        </GroupButtons>
      </Container>
    </Modal>
  );
}
