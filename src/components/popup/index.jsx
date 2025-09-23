import Modal from "react-modal";
import { Container } from "./styled";
import Button from "../button";

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
  },
};

export default function Popup({ message, renderModal, setterRender, onConfirm,}) {
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
      <div>
        <h2> {message} </h2>
        <Container>
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
        </Container>
      </div>
    </Modal>
  );
}
