import { BrowserRouter, Routes, Route } from "react-router-dom";

import Example from "./pages/example";

// Clients
import ListClients from "./pages/clients/list"

// Services
import ListServices from "./pages/services/list"

// Budgets
import ListBudgets from "./pages/budgets/list";

// Contracts
import ListContracts from "./pages/contracts/list"


export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/exemplo" element={<Example />} />
                
                {/* Clients */}
                <Route path="/clients" element={<ListClients />} />
                
                {/* Services */}
                <Route path="/services" element={<ListServices />} />
                
                {/* Budgets */}
                <Route path="/budgets" element={<ListBudgets />} />

                {/* Contracts */}
                <Route path="/contracts" element={<ListContracts />} />
                
            </Routes>     
        </BrowserRouter>
    )
}