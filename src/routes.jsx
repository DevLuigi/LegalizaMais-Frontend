import { BrowserRouter, Routes, Route } from "react-router-dom";

import Example from "./pages/example";

export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/exemplo" element={<Example />} />
            </Routes>     
        </BrowserRouter>
    )
}