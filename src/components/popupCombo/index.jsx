import Modal from "react-modal";
import Button from "@components/button";
import { Container, Title, GroupButtons, AlertMessage, StyledCombobox } from "./styled";
import ExclamationCircle from '@images/exclamation-circle.png';


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

export default function PopupCombo({ 
  title, 
  options, 
  alertMessage, 
  renderModal, 
  setterRender, 
  onConfirm,
  value,
  onChange 
}) {
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

        <StyledCombobox
          data={options}
          value={options.find(o => o.id === value)}
          onChange={(e) => onChange(e.id)}
          dataKey='id'
          textField='name'
          defaultValue={2}
        />
        <AlertMessage>
            <img src={ExclamationCircle} alt="exclamation-circle"/>
            <p> {alertMessage} </p>
        </AlertMessage>

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
