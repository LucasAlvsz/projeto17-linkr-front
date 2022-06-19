import React from "react";
import { UserPublishProvider } from "./UserPublishProvider";

import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";
import { TimelineProvider } from "./timelineProvider";

export default function AppProvider({ children }) {
    return (
        <TimelineProvider>
            <UserPublishProvider>
                <TrendingProvider>
                    <UserPageProvider>{children}</UserPageProvider>
                </TrendingProvider>
            </UserPublishProvider>
        </TimelineProvider>
    );
}
