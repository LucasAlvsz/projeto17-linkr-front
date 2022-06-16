import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PublishContext = createContext();

export const PublishProvider = ({ children }) => {
    return (
        <PublishContext.Provider value={{}}>{children}</PublishContext.Provider>
    );
};
