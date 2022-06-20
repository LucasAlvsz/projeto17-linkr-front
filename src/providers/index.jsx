import React from "react";

import { AuthProvider } from "./AuthProvider";
import { UserPublishProvider } from "./UserPublishProvider";
import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";
import { TimelineProvider } from "./TimelineProvider";
import { LoadingProvider } from "./LoadingProvider";
import { LikeProvider } from "./LikeProvider";

export default function AppProvider({ children }) {
    return (
        <LoadingProvider>
            <AuthProvider>
                <TimelineProvider>
                    <UserPublishProvider>
                        <TrendingProvider>
                            <UserPageProvider>
                                <LikeProvider>{children}</LikeProvider>
                            </UserPageProvider>
                        </TrendingProvider>
                    </UserPublishProvider>
                </TimelineProvider>
            </AuthProvider>
        </LoadingProvider>
    );
}
