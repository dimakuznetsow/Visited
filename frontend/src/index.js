import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountriesContextProvider } from "./context/CountryContext";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeProvider } from "./context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <CountriesContextProvider>
          <App />
        </CountriesContextProvider>
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
