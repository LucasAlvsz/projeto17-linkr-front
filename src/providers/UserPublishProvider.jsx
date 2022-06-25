/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useState, useContext } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";
import { LoadingContext } from "./LoadingProvider";

export const PublishContext = createContext();

export const UserPublishProvider = ({ children }) => {
    const { update, setUpdate } = useContext(LoadingContext);
    const [response, setResponse] = useState(false);
    let authHeader;
    const publishSubmit = (data) => {
        authHeader = authorizationHeader(getUserData()?.token);
        const promise = axios.post(
            `${process.env.REACT_APP_URI}/post`,
            data,
            authHeader,
        );
        promise.then(() => {});
        promise.catch((e) => {
            setResponse(true);
            alert("There was an error posting your link");
            console.log(e.data);
            return true;
        });
    };

    const deletePost = async (postId, setDeletePost) => {
        authHeader = authorizationHeader(getUserData()?.token);
        axios
            .delete(`${process.env.REACT_APP_URI}/post/${postId}`, authHeader)
            .then(() => {
                setUpdate(!update);
                setDeletePost();
            });
    };

    const editPost = async (postId, data) => {
        authHeader = authorizationHeader(getUserData()?.token);
        try {
            await axios.put(
                `${process.env.REACT_APP_URI}/post/${postId}`,
                data,
                authHeader,
            );
        } catch ({ response }) {
            console.log(response);
        }
    };
    return (
        <PublishContext.Provider
            value={{ publishSubmit, response, deletePost, editPost }}
        >
            {children}
        </PublishContext.Provider>
    );
};
