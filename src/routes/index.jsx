import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Template from "../pages/Template";
import Trendings from "../components/Trendings";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />} />
                <Route path="/trendings" element={<Trendings />} />
            </Routes>
        </BrowserRouter>
    );
}
