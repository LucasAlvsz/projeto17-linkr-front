/* eslint-disable no-undef */
/* eslint-disable no-console */
import { createContext, useState } from "react";
import axios from "axios";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [DataPosts, setDataPosts] = useState([]);
    const catchPosts = () => {
        const promise = axios.get(`${process.env.REACT_APP_URI}/catchPosts`);
        promise.then(({ data }) => {
            setDataPosts(data);
        });
        promise.catch((res) => {
            console.log(res);
        });
    };
    return (
        <TimelineContext.Provider value={{ DataPosts, catchPosts }}>
            {children}
        </TimelineContext.Provider>
    );
};
