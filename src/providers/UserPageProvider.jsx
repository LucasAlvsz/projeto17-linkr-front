/* eslint-disable no-undef */
/* eslint-disable no-console */

import { createContext, useContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";
import { LoadingContext } from "./LoadingProvider";

export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
    const [usersSearchBar, setUsersSearchBar] = useState([]);
    const [userPosts, setUserPosts] = useState({});
    const [isFollower, setIsFollower] = useState(false);
    const { setLoading } = useContext(LoadingContext);
    let authHeader;

    const getUserPosts = (userId) => {
        authHeader = authorizationHeader(getUserData()?.token);
        axios
            .get(`${process.env.REACT_APP_URI}/user/${userId}`, authHeader)
            .then(({ data }) => {
                setUserPosts(data);
                setLoading(false);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    const getUsersSearchBar = async (search) => {
        authHeader = authorizationHeader(getUserData()?.token);
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
        authHeader = authorizationHeader(getUserData()?.token);
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
        authHeader = authorizationHeader(getUserData()?.token);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URI}/user/${userId}/follow`,
                { Following },
                authHeader,
            );
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
