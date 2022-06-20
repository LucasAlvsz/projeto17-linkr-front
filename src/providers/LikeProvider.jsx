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
    const buildTooltipMessage = (usersLikes) => {
        const userIdStorage = getUserData().userId;
        const userLiked = usersLikes.find(
            (like) => like.userId === userIdStorage,
        );
        if (userLiked) {
            const length = usersLikes.length;
            const theTwoFirst = usersLikes.filter(
                (people) => people.userId !== userIdStorage,
            );
            const message =
                length === 1
                    ? "Você"
                    : `Você, ${theTwoFirst[0]?.username} e outras ${
                        length - 2
                    } pessoas`;
            return message;
        } else {
            const length = usersLikes.length;
            const theTwoFirst = usersLikes.slice(0, 2);
            const message =
                length === 1
                    ? `${theTwoFirst[0]?.username}`
                    : `${theTwoFirst[0]?.username}, ${
                        theTwoFirst[1]?.username
                    } e outras ${length - 1} pessoas`;
            return message;
        }
    };

    return (
        <LikeContext.Provider
            value={{
                likeMessage,
                getLikes,
                filterLikesPost,
                buildTooltipMessage,
            }}
        >
            {children}
        </LikeContext.Provider>
    );
};
