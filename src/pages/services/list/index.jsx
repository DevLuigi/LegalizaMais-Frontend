import { useEffect, useState } from "react";
import ViewMain from "../../../components/view/viewMain";
import EmptyPage from "../../../components/emptyPage";

export default function ListServices() {
    const [services, setServices] = useState([]);
    const path = ["Serviços", "Lista de serviços"];

    useEffect(() => {
        setServices([]);
    }, []);

    return(
        services.length <= 0 ? 
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