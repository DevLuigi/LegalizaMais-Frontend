import { BrowserRouter, Routes, Route } from "react-router-dom";

// User
import Register from "./pages/user/register";

// Clients
import ListClients from "./pages/clients/list";
import ClientRegister from "./pages/clients/register";

// Services
import ListServices from "./pages/services/list";
import ServiceRegister from "./pages/services/form";

// Budgets
import ListBudgets from "./pages/budgets/list";
import FormBudgets from "./pages/budgets/form";

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
        <Route path="/" element={<Login />} />
  
        {/* User */}
        <Route path="/register" element={<Register />} />

        {/* Clients */}
        <Route path="/clients" element={<ListClients />} />
        <Route path="/clients/:id" element={<ClientRegister />} />

        {/* Services */}
        <Route path="/services" element={<ListServices />} />
        <Route path="/services/form" element={<ServiceRegister />} />

        {/* Budgets */}
        <Route path="/budgets" element={<ListBudgets />} />
        <Route path="/budgets/:id" element={<FormBudgets/>} />
    
        {/* Contracts */}
        <Route path="/contracts" element={<ListContracts />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
