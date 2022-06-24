import { createContext } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
    const authHeader = authorizationHeader(getUserData()?.token);

    const addComment = (comment, postId, setComments) => {
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
