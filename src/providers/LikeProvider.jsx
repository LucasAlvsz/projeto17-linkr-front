import axios from "axios";
import { createContext, useState } from "react";
import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [userLikes, setUserLikes] = useState([]);

    const authHeader = authorizationHeader(getUserData()?.token);

    const likeMessage = (postId) => {
        axios.post(
            `${process.env.REACT_APP_URI}/likes`,
            { postId },
            authHeader,
        );
    };
    const getLikes = () => {
        axios
            .get(`${process.env.REACT_APP_URI}/likes`, authHeader)
            .then(({ data }) => setUserLikes(data));
    };
    const filterLikesPost = (postId) => {
        return userLikes.filter((like) => like.postId === postId);
    };

    return (
        <LikeContext.Provider
            value={{ likeMessage, getLikes, filterLikesPost }}
        >
            {children}
        </LikeContext.Provider>
    );
};
