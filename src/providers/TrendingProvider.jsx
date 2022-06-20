/* eslint-disable no-console */
/* eslint-disable no-undef */

import axios from "axios";
import { createContext, useState } from "react";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const TrendingContext = createContext();

export const TrendingProvider = ({ children }) => {
    const [trending, setTrending] = useState([]);
    const [hashtagPosts, setHashtagPosts] = useState([]);
    const authHeader = authorizationHeader(getUserData()?.token);

    const getTrending = () => {
        axios
            .get(`${process.env.REACT_APP_URI}/trending`, authHeader)
            .then(({ data }) => {
                setTrending(data);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    const getHashtagPosts = (hashtag) => {
        axios
            .get(`${process.env.REACT_APP_URI}/hashtag/${hashtag}`, authHeader)
            .then(({ data }) => {
                console.log(data);
                setHashtagPosts(data);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    return (
        <TrendingContext.Provider
            value={{
                trending,
                getTrending,
                getHashtagPosts,
                hashtagPosts,
            }}
        >
            {children}
        </TrendingContext.Provider>
    );
};
