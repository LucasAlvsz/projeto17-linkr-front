import React from "react";

import { AuthProvider } from "./AuthProvider";
import { UserPublishProvider } from "./UserPublishProvider";
import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";
import { TimelineProvider } from "./timelineProvider";

export default function AppProvider({ children }) {
    return (
        <AuthProvider>
        <TimelineProvider>

            <UserPublishProvider>
                <TrendingProvider>
                    <UserPageProvider>{children}</UserPageProvider>
                </TrendingProvider>
            </UserPublishProvider>
        </AuthProvider>
        </TimelineProvider>

    );
}
