import React from "react";

import AppProvider from "./providers";

import GlobalStyles from "./GlobalStyles";
import Routes from "./routes";

export default function App() {
    return (
        <AppProvider>
            <GlobalStyles />
            <Routes />
        </AppProvider>
    );
}
