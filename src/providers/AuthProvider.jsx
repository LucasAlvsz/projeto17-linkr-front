/* eslint-disable no-undef */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ signUpData, setSignUpData ] = useState({
        email: "",
        password: "",
        username: "",
        pictureUrl: ""
    });

    const [ signInData, setSignInData ] = useState({
        email: "",
        password: ""
    });

    return (
        <AuthContext.Provider
            value={{ signUpData, setSignUpData, signInData, setSignInData }}
        >
            {children}
        </AuthContext.Provider>
    );
};