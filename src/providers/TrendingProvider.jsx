/* eslint-disable no-console */
/* eslint-disable no-undef */

import axios from "axios";
import { createContext, useContext, useState } from "react";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";
import { LoadingContext } from "./LoadingProvider";

export const TrendingContext = createContext();

export const TrendingProvider = ({ children }) => {
    const [trending, setTrending] = useState([]);
    const { setLoading } = useContext(LoadingContext);
    const [hashtagPosts, setHashtagPosts] = useState([]);
    let authHeader;

    const getTrending = () => {
        authHeader = authorizationHeader(getUserData()?.token);
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
        authHeader = authorizationHeader(getUserData()?.token);
        axios
            .get(`${process.env.REACT_APP_URI}/hashtag/${hashtag}`, authHeader)
            .then(({ data }) => {
                setHashtagPosts(data);
                setLoading(false);
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
