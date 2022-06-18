import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Template from "../pages/Template";
import UserPublish from "../components/UserPublish";
import Hashtag from "../pages/Hashtag";
import UserPage from "../pages/UserPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />} />
                <Route path="/timeline" element={<UserPublish />} />
                <Route path="/hashtag/:hashtag" element={<Hashtag />} />
                <Route path="/user/:id" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
}
