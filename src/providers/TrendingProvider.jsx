import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TrendingContext = createContext();

export const TrendingProvider = ({ children }) => {
    const [trending, setTrending] = useState([]);
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

    return (
        <TrendingContext.Provider value={{ trending }}>
            {children}
        </TrendingContext.Provider>
    );
};
