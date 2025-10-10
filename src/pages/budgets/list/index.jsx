import { useEffect, useState } from "react";
import ViewMain from "../../../components/view/viewMain";
import EmptyPage from "../../../components/emptyPage";

export default function ListBudgets() {
    const [budgets, setBudgets] = useState([]);
    const path = ["Orçamentos", "Lista de orçamentos"];

    useEffect(() => {
        setBudgets([]);
    }, []);

    return(
        budgets.length <= 0 ? 
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