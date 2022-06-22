import { createContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [openComments, setOpenComments] = useState(false);
    const authHeader = authorizationHeader(getUserData()?.token);

    const toggleComments = () => {
        setOpenComments(!openComments);
    };

    const addComment = (postId, userId, comment) => {
        const data = {
            postId,
            userId,
            comment,
        };
        axios
            .post(`${process.env.REACT_APP_URI}/comments`, data, authHeader)
            .then(({ data }) => {
                setComments([...comments, data]);
            })
            .catch((res) => {
                console.log(res);
            });
    };

    return (
        <CommentsContext.Provider
            value={{
                comments,
                addComment,
                toggleComments,
                openComments,
                setOpenComments,
                newComment,
                setNewComment,
            }}
        >
            {children}
        </CommentsContext.Provider>
    );
};
