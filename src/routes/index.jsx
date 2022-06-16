import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Template from "../pages/Template";
import UserPublish from "../components/UserPublish";

import Trending from "../components/Trending";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />} />
                <Route path="/timeline" element={<UserPublish />} />
                <Route path="/testes" element={<Trending />} />
            </Routes>
        </BrowserRouter>
    );
}
