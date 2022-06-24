/* eslint-disable no-undef */
/* eslint-disable no-console */
import { createContext, useState } from "react";
import axios from "axios";
import useInterval from "use-interval";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [dataPosts, setDataPosts] = useState([]);
    const authHeader = authorizationHeader(getUserData()?.token);
    const catchPosts = () => {
        if (!authHeader) return catchPosts();
        const promise = axios.get(
            `${process.env.REACT_APP_URI}/timeline`,
            authHeader,
        );
        promise.then(({ data }) => {
            setDataPosts(data);
            setNewPosts(data.length);
        });
        promise.catch((res) => {
            console.log(res);
        });
    };
    const uploadNewPosts = () => {
        useInterval(() => {
            if (!authHeader) return catchPosts();
            const promise = axios.get(
                `${process.env.REACT_APP_URI}/timeline`,
                authHeader,
            );
            promise.then(({ data }) => {
                setNewPosts(data.length);
            });
            promise.catch((res) => {
                console.log(res);
            });
        }, 15000);
    };
    return (
        <TimelineContext.Provider value={{ dataPosts, catchPosts }}>

            {children}
        </TimelineContext.Provider>
    );
};
