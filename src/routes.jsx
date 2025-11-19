import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Example from "./pages/example";

// User
import Register from "./pages/user/register";

// Clients
import ListClients from "./pages/clients/list";

// Services
import ListServices from "./pages/services/list";

// Budgets
import ListBudgets from "./pages/budgets/list";

// Contracts
import ListContracts from "./pages/contracts/list";

// Login
import Login from "./pages/login";

// Home
import Home from "./pages/home";

export default function RoutesProject() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Login */}
        <Route path="/login" element={<Login />} />
  
        {/* User */}
        <Route path="/register" element={<Register />} />
        
        {/* Example */}
        <Route path="/exemplo" element={<Example />} />

        {/* Clients */}
        <Route path="/clients" element={<ListClients />} />

        {/* Services */}
        <Route path="/services" element={<ListServices />} />

        {/* Budgets */}
        <Route path="/budgets" element={<ListBudgets />} />

        {/* Contracts */}
        <Route path="/contracts" element={<ListContracts />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
