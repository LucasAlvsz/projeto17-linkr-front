/* eslint-disable no-undef */
/* eslint-disable no-console */

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
    const [usersSearchBar, setUsersSearchBar] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    useEffect((userId) => {
        if (userId !== undefined) {
            axios
                .get(`${process.env.REACT_APP_URI}/user/:${userId}`)
                .then(({ data }) => {
                    setUserPosts(data);
                })
                .catch(({ response }) => {
                    console.log(response);
                });
        }
    }, []);

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
            value={{ usersSearchBar, getUsersSearchBar, userPosts }}
        >
            {children}
        </UserPageContext.Provider>
    );
};
