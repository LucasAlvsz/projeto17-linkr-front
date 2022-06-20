import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { LoadingContext } from "./LoadingProvider";

import authorizationHeader from "../utils/authorizationHeader";
import isLogged from "../utils/isLogged";
import getUserData from "../utils/getUserData";

export const TrendingContext = createContext();

export const TrendingProvider = ({ children }) => {
    const { update } = useContext(LoadingContext);
    const [trending, setTrending] = useState([]);
    const [hashtagPosts, setHashtagPosts] = useState([]);
    const authHeader = authorizationHeader(getUserData()?.token);
    if (isLogged()) {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_URI}/trending`, authHeader)
                .then(({ data }) => {
                    setTrending(data);
                })
                .catch(({ response }) => {
                    console.log(response);
                });
        }, [update]);
    }

    const getHashtagPosts = (hashtag) => {
        axios
            .get(`${process.env.REACT_APP_URI}/hashtag/${hashtag}`, authHeader)
            .then(({ data }) => {
                setHashtagPosts(data);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    return (
        <TrendingContext.Provider
            value={{ trending, getHashtagPosts, hashtagPosts }}
        >
            {children}
        </TrendingContext.Provider>
    );
};
