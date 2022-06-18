import React from "react";

import { TrendingProvider } from "./TrendingProvider";
import { UserPageProvider } from "./UserPageProvider";

export default function AppProvider({ children }) {
    return (
        <TrendingProvider>
            <UserPageProvider>{children}</UserPageProvider>
        </TrendingProvider>
    );
}
