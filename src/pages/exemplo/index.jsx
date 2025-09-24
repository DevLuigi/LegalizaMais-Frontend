import ViewMain from "../../components/view/viewMain";
import { Container } from "./styled";

export default function Exemplo() {
  const path = [ "Exemplo", "Lista Exemplo" ]; // Caminho que vai aparecer no topo da tela

  return (
    <ViewMain path={path}> {/* Componente que cria o layout padrão da página */}
      <Container> {/* Seu styled-components aqui */}
        <h1> Exemplo de criação de tela </h1> {/* Conteudo da página aqui */}
      </Container>
    </ViewMain>
  );
}