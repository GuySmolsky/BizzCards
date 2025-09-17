import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter } from "react-router-dom";
import UserProvider from "./users/providers/UserProvider.jsx";
import ThemeContextProvider from "./theme/providers/ThemeProvider.jsx";
import SearchProvider from "./layout/components/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <SearchProvider>
          <ThemeContextProvider>
            <CssBaseline />
            <App />
          </ThemeContextProvider>
        </SearchProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);
