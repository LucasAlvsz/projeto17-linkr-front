import { createContext, useState } from "react";
import axios from "axios";
export const PublishContext = createContext();

export const UserPublishProvider = ({ children }) => {
    const [response, setResponse] = useState(false);
    const publishSubmit = (data) => {
        // eslint-disable-next-line no-undef
        // `${process.env.REACT_APP_URI}/post`
        const promise = axios.post(`${process.env.REACT_APP_URI}/post`, data);
        promise.then((response) => {
            console.log(response.data);
        });
        promise.catch((e) => {
            setResponse(true);
            alert("Houve um erro ao publicar seu link");
            console.log(e.data);
        });
        return response;
    };
    return (
        <PublishContext.Provider value={{ publishSubmit }}>
            {children}
        </PublishContext.Provider>
    );
};
