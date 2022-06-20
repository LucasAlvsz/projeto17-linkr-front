import axios from "axios";
import { createContext } from "react";
import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const authHeader = authorizationHeader(getUserData()?.token);

    const likeMessage = (postId) => {
        axios.post(`${process.env.REACT_APP_URI}/like`, { postId }, authHeader);
    };

    return (
        <LikeContext.Provider value={{ likeMessage }}>
            {children}
        </LikeContext.Provider>
    );
};
