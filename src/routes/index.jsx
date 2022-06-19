import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import UserPublish from "../components/UserPublish";
import Hashtag from "../pages/Hashtag";
import UserPage from "../pages/UserPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/sign-in' />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/timeline" element={<UserPublish />} />
                <Route path="/hashtag/:hashtag" element={<Hashtag />} />
                <Route path="/user/:id" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
}
