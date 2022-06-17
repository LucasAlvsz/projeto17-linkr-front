import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Template from "../pages/Template";
import UserPublish from "../components/UserPublish";

//import Trending from "../components/Trending";
// import Header from "../components/Header";
// import Post from "../components/Post";
import SearchBar from "../components/SearchBar";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />} />
                <Route path="/timeline" element={<UserPublish />} />
                <Route path="/testes" element={<SearchBar />} />
            </Routes>
        </BrowserRouter>
    );
}
