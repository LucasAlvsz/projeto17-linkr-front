import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Template from "../pages/Template";
import UserPublish from "../components/UserPublish";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />} />
                <Route path="/buildpost" element={<UserPublish />} />
            </Routes>
        </BrowserRouter>
    );
}
