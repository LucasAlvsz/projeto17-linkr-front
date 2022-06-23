/* eslint-disable no-undef */
/* eslint-disable no-console */

import { createContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
    const [usersSearchBar, setUsersSearchBar] = useState([]);
    const [userPosts, setUserPosts] = useState({});
    const [isFollower, setIsFollower] = useState(false);
    const authHeader = authorizationHeader(getUserData()?.token);

    const getUserPosts = (userId) => {
        axios
            .get(`${process.env.REACT_APP_URI}/user/${userId}`, authHeader)
            .then(({ data }) => {
                setUserPosts(data);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    const getUsersSearchBar = async (search) => {
        try {
            const users = await axios.get(
                `${process.env.REACT_APP_URI}/user/?search=${search}`,
                authHeader,
            );
            setUsersSearchBar(users.data);
        } catch {
            console.log("Error");
        }
    };

    const amIFollower = async (userId) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URI}/user/${userId}/follow`,
                authHeader,
            );
            setIsFollower(response.data);
        } catch {
            console.log("Error");
        }
    };

    const followOrUnfollow = async (userId, Following) => {
        console.log(userId, Following);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URI}/user/${userId}/follow`,
                { Following },
                authHeader,
            );
            console.log(response.data);
            setIsFollower(response.data);
        } catch {
            console.log("Error");
        }
    };

    return (
        <UserPageContext.Provider
            value={{
                usersSearchBar,
                getUsersSearchBar,
                userPosts,
                getUserPosts,
                amIFollower,
                isFollower,
                followOrUnfollow,
            }}
        >
            {children}
        </UserPageContext.Provider>
    );
};
