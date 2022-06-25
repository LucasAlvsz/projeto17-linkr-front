import { createContext } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
    let authHeader;
    const addComment = (comment, postId, setComments) => {
        authHeader = authorizationHeader(getUserData()?.token);
        axios
            .post(
                `${process.env.REACT_APP_URI}/comments/${postId}`,
                { comment },
                authHeader,
            )
            .then(({ data }) => {
                setComments(data);
            })
            .catch((res) => {
                console.log(res);
            });
    };

    return (
        <CommentsContext.Provider
            value={{
                addComment,
            }}
        >
            {children}
        </CommentsContext.Provider>
    );
};
