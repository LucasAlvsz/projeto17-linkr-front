import axios from "axios";
import { createContext } from "react";
import { useContext } from "react";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";
import { LoadingContext } from "./LoadingProvider";

export const RepostContext = createContext();

export const RepostProvider = ({ children }) => {
    const { update, setUpdate } = useContext(LoadingContext);
    let authHeader;

    const newRepost = (postId) => {
        authHeader = authorizationHeader(getUserData()?.token);
        axios
            .post(
                `${process.env.REACT_APP_URI}/reposts/${postId}`,
                {},
                authHeader,
            )
            .then(() => setUpdate(!update))
            .catch((err) => console.log(err));
    };

    return (
        <RepostContext.Provider value={{ newRepost }}>
            {children}
        </RepostContext.Provider>
    );
};
