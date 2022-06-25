import React from "react";

import { AuthProvider } from "./AuthProvider";
import { UserPublishProvider } from "./UserPublishProvider";
import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";
import { TimelineProvider } from "./TimelineProvider";
import { LoadingProvider } from "./LoadingProvider";
import { LikeProvider } from "./LikeProvider";
import { CommentsProvider } from "./CommentsProvider";
import { RepostProvider } from "./RepostProvider";
import { FollowersProvider } from "./FollowersProvider";

export default function AppProvider({ children }) {
    return (
        <LoadingProvider>
            <AuthProvider>
                <TimelineProvider>
                    <UserPublishProvider>
                        <TrendingProvider>
                            <UserPageProvider>
                                <LikeProvider>
                                    <FollowersProvider>
                                        <CommentsProvider>
                                            <RepostProvider>
                                                {children}
                                            </RepostProvider>
                                        </CommentsProvider>
                                    </FollowersProvider>
                                </LikeProvider>
                            </UserPageProvider>
                        </TrendingProvider>
                    </UserPublishProvider>
                </TimelineProvider>
            </AuthProvider>
        </LoadingProvider>
    );
}
