import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

const root = ReactDOM.createRoot(document.getElementById("root"));

const msalConfiguration = {
  auth: {
    clientId: "31a0fdca-b2f7-4d01-bb76-8d681ca5487c",
    authority: `https://login.microsoftonline.com/a57f7d92-038e-4d4c-8265-7cd2beb33b34`,
  },
};

// export const loginRequest = {
//   scopes: ["User.Read"],
// };

// export const graphConfig = {
//   graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
// };
const pca = new PublicClientApplication(msalConfiguration);

root.render(
  <MsalProvider instance={pca}>
    <App />
  </MsalProvider>
);
