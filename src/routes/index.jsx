import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Template from "../pages/Template";
import Trending from "../components/Trending";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/hashtag/:hashtag" element={<Template />} />
            </Routes>
        </BrowserRouter>
    );
}
