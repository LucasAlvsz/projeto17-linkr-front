/* eslint-disable no-undef */
import { createContext } from "react";
import axios from "axios";

import setUserData from "../utils/setUserData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const signIn = (email, password) => {
        axios
            .post(`${process.env.REACT_APP_URI}/sign-in`, { email, password })
            .then(({ data }) => {
                setUserData(data);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    const logout = () => {
        localStorage.removeItem("userData");
    };

    return (
        <AuthContext.Provider
            value={{
                signIn,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
