import React from "react";

import { TrendingProvider } from "./TrendingProvider";
import { UserPublishProvider } from "./UserPublishProvider";
export default function AppProvider({ children }) {
    return (
        <UserPublishProvider>
            <TrendingProvider>{children}</TrendingProvider>
        </UserPublishProvider>
    );
}
