import { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(false);

    return (
        <LoadingContext.Provider
            value={{ loading, setLoading, update, setUpdate }}
        >
            {children}
        </LoadingContext.Provider>
    );
};
