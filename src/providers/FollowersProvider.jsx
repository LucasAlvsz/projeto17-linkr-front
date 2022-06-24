import { createContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const FollowersContext = createContext();

export const FollowersProvider = ({ children }) => {
    const [followers, setFollowers] = useState([]);
    let authHeader;
    const getFollowers = () => {
        authHeader = authorizationHeader(getUserData()?.token);
        axios
            .get(`${process.env.REACT_APP_URI}/followers`, authHeader)
            .then(({ data }) => {
                setFollowers(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <FollowersContext.Provider value={{ followers, getFollowers }}>
            {children}
        </FollowersContext.Provider>
    );
};
