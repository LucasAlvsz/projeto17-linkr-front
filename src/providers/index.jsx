import React from "react";

import { TrendingProvider } from "./TrendingProvider";

export default function AppProvider({ children }) {
    return <TrendingProvider>{children}</TrendingProvider>;
}
