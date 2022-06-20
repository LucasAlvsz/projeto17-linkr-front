import React from "react";

import { AuthProvider } from "./AuthProvider";
import { UserPublishProvider } from "./UserPublishProvider";
import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";

export default function AppProvider({ children }) {
    return (
        <AuthProvider>
            <UserPublishProvider>
                <TrendingProvider>
                    <UserPageProvider>{children}</UserPageProvider>
                </TrendingProvider>
            </UserPublishProvider>
        </AuthProvider>
    );
}
