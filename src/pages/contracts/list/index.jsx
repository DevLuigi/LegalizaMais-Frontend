import { useEffect, useState } from "react";
import ViewMain from "../../../components/view/viewMain";
import EmptyPage from "../../../components/emptyPage";

export default function ListContracts() {
    const [contracts, setContracts] = useState([]);
    const path = ["Contratos", "Lista de contratos"];

    useEffect(() => {
        setContracts([]);
    }, []);

    return(
        contracts.length <= 0 ? 
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