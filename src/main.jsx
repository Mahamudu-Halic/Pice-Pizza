import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { ClerkProviderWithRoutes } from "./auth";
import App from "./App";
import { AuthContextProvider } from "./services/auth/auth.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        {/* <ClerkProviderWithRoutes /> */}
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
