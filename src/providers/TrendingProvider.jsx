import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TrendingContext = createContext();

export const TrendingProvider = ({ children }) => {
    const [trending, setTrending] = useState([]);
    const [hashtagPosts, setHashtagPosts] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URI}/trending`)
            .then(({ data }) => {
                setTrending(data);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    }, []);

    const getHashtagPosts = (hashtag) => {
        axios
            .get(`${process.env.REACT_APP_URI}/hashtag/${hashtag}`)
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