import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

const root = ReactDOM.createRoot(document.getElementById('root'));

const msalConfiguration = {
    auth: {
        clientId: "client_id" 
    }
};
const pca = new PublicClientApplication(msalConfiguration);

root.render(
<MsalProvider instance={pca}>
       <App />
</MsalProvider>
);


