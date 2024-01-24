import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MsalProvider } from "@azure/msal-react";
import { EventType, PublicClientApplication } from "@azure/msal-browser";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const msalConfiguration = {
//   auth: {
//     clientId: "31a0fdca-b2f7-4d01-bb76-8d681ca5487c",
//     authority: `https://login.microsoftonline.com/a57f7d92-038e-4d4c-8265-7cd2beb33b34`,
//   },
// };

const msalConfig = {
  auth: {
      clientId: "31a0fdca-b2f7-4d01-bb76-8d681ca5487c",
      authority: `https://login.microsoftonline.com/a57f7d92-038e-4d4c-8265-7cd2beb33b34`,
      redirectUri: "https://test22012024.azurewebsites.net",
      postLogoutRedirectUri: "https://test22012024.azurewebsites.net",
  },
  cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: isIE || isEdge || isFirefox,
  },
  system: {
      allowNativeBroker: false, // Disables WAM Broker
      loggerOptions: {
          loggerCallback: (level, message, containsPii) => {
              if (containsPii) {
                  return;
              }
              switch (level) {
                  case LogLevel.Error:
                      console.error(message);
                      return;
                  case LogLevel.Info:
                      console.info(message);
                      return;
                  case LogLevel.Verbose:
                      console.debug(message);
                      return;
                  case LogLevel.Warning:
                      console.warn(message);
                      return;
                  default:
                      return;
              }
          },
      },
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
 const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
// export const loginRequest = {
//   scopes: ["User.Read"],
// };

// export const graphConfig = {
//   graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
// };


// const pca = new PublicClientApplication(msalConfiguration);

// if (!pca.getActiveAccount() && pca.getAllAccounts().length > 0) {
//   console.log("initial active account");
//   pca.setActiveAccount(pca.getActiveAccount()[0]);
// }

// pca.addEventCallback((event) => {
//   if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
//     console.log("event", event);
//     console.log("account", event.payload.account);
//     pca.setActiveAccount(event.payload.account);
//   }
// });

// root.render(
//   <MsalProvider instance={pca}>
//     <App />
//   </MsalProvider>
// );


msalInstance.initialize().then(() => {
  // Default to using the first account if no account is active on page load
  if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  // Optional - This will update account state if a user signs in from another tab or window
  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);

  root.render(
      <MsalProvider instance={msalInstance}>
        <App  />
      </MsalProvider>
  );
});