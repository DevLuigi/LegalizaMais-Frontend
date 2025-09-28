import Button from "../../components/button";
import ViewMain from "../../components/view/viewMain";
import { Container } from "./styled";

// Importantdo API
import ExampleAPI from "../../service/example/example.js";
const api = new ExampleAPI();

export default function Example() {
  const path = [ "Exemplo", "Lista de exemplo" ]; // Caminho que vai aparecer no topo da tela

  async function handleClick() {
    // Exemplo de chamada para API
    const response = await api.getAllExamples();
    console.log(response);
  }

  return (
    <ViewMain path={path}> {/* Componente que cria o layout padrão da página */}
      <Container> {/* Seu styled-components aqui */}
        <h1> Exemplo de criação de tela </h1> {/* Conteudo da página aqui */}
        <Button
          id="btn-example"
          color="blue"
          onClick={handleClick}
        >
          Clique em mim
        </Button>
      </Container>
    </ViewMain>
  );
}