import { useEffect, useState } from "react";
import ViewMain from "../../../components/view/viewMain";
import EmptyPage from "../../../components/emptyPage";

export default function ListClients() {
    const [clients, setClients] = useState([]);
    const path = ["Clientes", "Lista de clientes"];

    useEffect(() => {
        setClients([]);
    }, []);

    return(
        clients.length <= 0 ? 
            (
                <ViewMain path={path}>
                    <EmptyPage subject={path[0]} />
                </ViewMain>
            ) 
            
            : 
            
            (
                <ViewMain path={path}>
                    <Container>
                        
                    </Container>
                </ViewMain>
            )
    )
}