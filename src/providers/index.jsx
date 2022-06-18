import React from "react";
import { UserPublishProvider } from "./UserPublishProvider";

import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";

export default function AppProvider({ children }) {
    return (
        <UserPublishProvider>
            <TrendingProvider>
                <UserPageProvider>{children}</UserPageProvider>
            </TrendingProvider>
        </UserPublishProvider>
    );
}
