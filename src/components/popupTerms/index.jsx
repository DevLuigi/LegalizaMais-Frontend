import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root"); // ajuste se seu root tiver outro id

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "820px",
    maxWidth: "95%",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: "12px",
    padding: "20px 22px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.55)",
    zIndex: 2000
  }
};

const Title = styled.h2`
  text-align: center;
  color: #244fc2;
  margin: 0 0 12px 0;
  font-weight: 800;
  letter-spacing: 0.6px;
`;

const HeaderRow = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  gap: 12px;
  margin-bottom: 12px;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  font-weight: 700;
  color: #666;
  cursor: pointer;
`;

const Tabs = styled.div`
  display:flex;
  gap: 12px;
  margin-bottom: 12px;
`;

const Tab = styled.button`
  padding: 8px 14px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  background: ${p => (p.active ? "#244fc2" : "#f1f1f1")};
  color: ${p => (p.active ? "#fff" : "#333")};
`;

const Content = styled.div`
  background: #fbfbfb;
  border-radius: 8px;
  padding: 14px;
  line-height: 1.5;
  color: #222;
  max-height: 62vh;
  overflow: auto;
  border: 1px solid #eee;
`;

const Footer = styled.div`
  display:flex;
  justify-content:flex-end;
  gap: 12px;
  margin-top: 12px;
`;

const Btn = styled.button`
  padding: 10px 22px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
  background: ${p => (p.variant === "red" ? "#e34b55" : "#244fc2")};
`;

export default function TermsModal({ isOpen, onRequestClose }) {
  const [tab, setTab] = React.useState("terms");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Termos de Uso e Política de Privacidade"
    >
      <HeaderRow>
        <div style={{flex:1}}>
          <Title>{tab === "terms" ? "Termos de Uso" : "Política de Privacidade"}</Title>
        </div>
        <div style={{textAlign: "right"}}>
          <CloseBtn onClick={onRequestClose}>Fechar ✕</CloseBtn>
        </div>
      </HeaderRow>

      <Tabs>
        <Tab active={tab === "terms"} onClick={() => setTab("terms")}>Termos de Uso</Tab>
        <Tab active={tab === "privacy"} onClick={() => setTab("privacy")}>Política de Privacidade</Tab>
      </Tabs>

      <Content>
        {tab === "terms" ? (
          <>
            <h3>1. Aceitação</h3>
            <p>Ao utilizar este serviço você concorda com os termos aqui descritos. Leia atentamente antes de prosseguir.</p>

            <h3>2. Uso do Serviço</h3>
            <p>O usuário concorda em utilizar o sistema de acordo com as leis vigentes e para fins lícitos. É proibido: (a) replicar os serviços indevidamente; (b) tentar acesso não autorizado; (c) utilizar dados de terceiros sem consentimento.</p>

            <h3>3. Responsabilidades</h3>
            <p>A plataforma envidará esforços razoáveis para manter o serviço disponível, porém não garante operação ininterrupta. Não nos responsabilizamos por perdas indiretas, lucros cessantes ou danos decorrentes do uso inadequado.</p>

            <h3>4. Alterações</h3>
            <p>Podemos alterar os termos periodicamente; alterações serão publicadas na plataforma. O uso contínuo após publicação constitui aceite.</p>

            <h3>5. Contato</h3>
            <p>Em caso de dúvidas sobre os termos, entre em contato com nosso suporte.</p>
          </>
        ) : (
          <>
            <h3>1. Coleta de Dados</h3>
            <p>Coletamos os dados que você fornece ao se cadastrar (nome, documento, telefone, e-mail, endereço) e dados técnicos de uso para fins de operação e melhoria do serviço.</p>

            <h3>2. Uso dos Dados</h3>
            <p>Os dados são utilizados para fornecer e aprimorar funcionalidades, comunicação com o usuário e cumprimento de obrigações legais. Não vendemos seus dados a terceiros.</p>

            <h3>3. Compartilhamento</h3>
            <p>Podemos compartilhar dados com prestadores de serviço (ex.: hospedagem, e-mail) que atuam sob contrato com obrigação de confidencialidade. Também podemos compartilhar quando exigido por lei.</p>

            <h3>4. Segurança</h3>
            <p>Empregamos medidas técnicas e administrativas para proteção dos dados, contudo nenhum sistema é totalmente invulnerável. Recomendamos práticas seguras de senha e acesso.</p>

            <h3>5. Direitos do Titular</h3>
            <p>Você pode solicitar acesso, correção ou exclusão de seus dados conforme legislação aplicável. Para exercer seus direitos, contate nosso suporte.</p>
          </>
        )}
      </Content>

      <Footer>
        <Btn variant="red" onClick={onRequestClose}>Fechar</Btn>
      </Footer>
    </Modal>
  );
}
