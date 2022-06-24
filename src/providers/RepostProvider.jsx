import axios from "axios";
import { createContext } from "react";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const RepostContext = createContext();

export const RepostProvider = ({ children }) => {
    const authHeader = authorizationHeader(getUserData()?.token);

    const newRepost = (postId) => {
        axios
            .post(
                `${process.env.REACT_APP_URI}/reposts/${postId}`,
                {},
                authHeader,
            )
            .then()
            .catch((err) => console.log(err));
    };

    return (
        <RepostContext.Provider value={{ newRepost }}>
            {children}
        </RepostContext.Provider>
    );
};
