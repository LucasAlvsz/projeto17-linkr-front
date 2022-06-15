import React from "react";

import AppProvider from "./providers";

import GlobalStyles from "./styles/GlobalStyle";
import Routes from "./routes";

export default function App() {
    return (
        <AppProvider>
            <GlobalStyles />
            <Routes />
        </AppProvider>
    );
}
