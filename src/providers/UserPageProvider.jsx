/* eslint-disable no-undef */
/* eslint-disable no-console */

import { createContext, useState } from "react";
import axios from "axios";

export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
    const [usersSearchBar, setUsersSearchBar] = useState([]);
    const [userPosts, setUserPosts] = useState({});

    const getUserPosts = (userId) => {
        axios
            .get(`${process.env.REACT_APP_URI}/user/${userId}`)
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
            );
            setUsersSearchBar(users.data);
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
            }}
        >
            {children}
        </UserPageContext.Provider>
    );
};
