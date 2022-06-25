/* eslint-disable no-undef */
/* eslint-disable no-console */
import { createContext, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import useInterval from "use-interval";
import { isAfter } from "date-fns";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";
import { LoadingContext } from "./LoadingProvider";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [dataPosts, setDataPosts] = useState([]);
    const [newPosts, setNewPosts] = useState([]);
    const { setLoading } = useContext(LoadingContext);
    let authHeader;
    const catchPosts = () => {
        authHeader = authorizationHeader(getUserData()?.token);
        const promise = axios.get(
            `${process.env.REACT_APP_URI}/timeline`,
            authHeader,
        );
        promise.then(({ data }) => {
            setDataPosts(data);
            setLoading(false);
        });
        promise.catch((res) => {
            console.log(res);
        });
    };

    useInterval(() => {
        authHeader = authorizationHeader(getUserData()?.token);
        const promise = axios.get(
            `${process.env.REACT_APP_URI}/timeline`,
            authHeader,
        );
        promise.then(({ data }) => {
            data.forEach((post) => {
                const createdAt = new Date(post.createdAt);
                if (isAfter(createdAt, new Date(dataPosts[0].createdAt)))
                    setNewPosts((newPosts) => [...newPosts, post]);
            });
        });
        promise.catch((res) => {
            console.log(res);
        });
    }, 15000);

    return (
        <TimelineContext.Provider
            value={{
                dataPosts,
                catchPosts,
                newPosts,
                setNewPosts,
            }}
        >
            {children}
        </TimelineContext.Provider>
    );
};
