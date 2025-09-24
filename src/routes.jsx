import { BrowserRouter, Routes, Route } from "react-router-dom";

import Exemplo from "./pages/exemplo";

export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/exemplo" element={<Exemplo />} />
            </Routes>     
        </BrowserRouter>
    )
}