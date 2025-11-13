import Button from "@components/button";
import ViewMain from "@components/view/viewMain";
import { Container,Text,GroupButtons } from "./styled";
import ImageHomePage from '@images/homeImage.png';
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate=useNavigate()

  const path = [ "", "" ]; // Caminho que vai aparecer no topo da tela

   
  return (
    <ViewMain path={path}> 
      <Container> 
        
         <Text>
            <h1>
                Pronto para gerenciar seus serviços?
            </h1>
            
            <p>
                Cada processo bem estruturado pode ser o início de uma transformação significativa.
                Descubra como é simples criar, gerenciar contratos e muito mais — tudo em um só lugar.
                Experimente agora e eleve sua gestão ao próximo nível!
            </p>
            
            <GroupButtons>
                <Button onClick={()=>{navigate("/services")}} color="yellow"> Meus Serviços </Button>
                <Button onClick={()=>{navigate("/clients")}} color="blue"> Meus Clientes </Button>
            </GroupButtons>
         </Text>

         <img src={ImageHomePage} alt="imagem-home" />
         
      </Container>
    </ViewMain>
  );
}