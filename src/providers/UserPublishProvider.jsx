/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const PublishContext = createContext();

export const UserPublishProvider = ({ children }) => {
    const [response, setResponse] = useState(false);
    const authHeader = authorizationHeader(getUserData()?.token);
    const publishSubmit = (data) => {
        const promise = axios.post(
            `${process.env.REACT_APP_URI}/post`,
            data,
            authHeader,
        );
        promise.then((response) => {
            console.log(response.data);
        });
        promise.catch((e) => {
            setResponse(true);
            alert("There was an error posting your link");
            console.log(e.data);
            return true;
        });
    };
    return (
        <PublishContext.Provider value={{ publishSubmit, response }}>
            {children}
        </PublishContext.Provider>
    );
};
