/* eslint-disable no-undef */
/* eslint-disable no-console */
import { createContext, useState } from "react";
import axios from "axios";
import useInterval from "use-interval";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [DataPosts, setDataPosts] = useState([]);
    const [NewPosts, setNewPosts] = useState(0);
    const authHeader = authorizationHeader(getUserData()?.token);
    //console.log(authHeader, "primeiro");
    const catchPosts = () => {
        //console.log(authHeader);
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
                console.log({ atualizacao: data.length });
                console.log({ posts: DataPosts.length });
                setNewPosts(data.length);
            });
            promise.catch((res) => {
                console.log(res);
            });
        }, 15000);
    };
    return (
        <TimelineContext.Provider
            value={{ DataPosts, catchPosts, NewPosts, uploadNewPosts }}
        >
            {children}
        </TimelineContext.Provider>
    );
};
