import "./App.css";
import Home from "./Home.js";
// import axios from "axios";
//import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import {
  AuthenticatedTemplate,
  useIsAuthenticated,
  // UnauthenticatedTemplate,
  // useMsal,
  // useMsalAuthentication,
} from "@azure/msal-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InteractionStatus } from "@azure/msal-browser";

function App() {
  // const { instance } = useMsal();

  const loginRequest = {
    scopes: ["User.Read"],
  };

  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();

  if (inProgress === InteractionStatus.None && !isAuthenticated) {
    instance.loginRedirect(loginRequest);
  }

  useEffect(() => {
    const account = instance.getActiveAccount();
    console.log("account", account);
  }, [instance]);

  // useEffect(() => {
  //   const getAccessToken = async () => {
  //     instance
  //       .acquireTokenSilent({
  //         scopes: ["user.read"],
  //         authority: `https://login.microsoftonline.com/a57f7d92-038e-4d4c-8265-7cd2beb33b34`,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         const headers = new Headers();
  //         headers.append("Authorization", `Bearer ${response.accessToken}`);
  //         return fetch(`https://graph.microsoft.com/v1.0/me`, {
  //           method: "GET",
  //           headers,
  //         }).then((response) => console.log(response.json()));
  //       });
  //   };
  //   getAccessToken();
  // }, [instance]);
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <AuthenticatedTemplate>
              <Home></Home>
            </AuthenticatedTemplate>
          }
        ></Route>
        <Route
          path="/"
          element={
            <AuthenticatedTemplate>
              <h1>Hello world!</h1>
            </AuthenticatedTemplate>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
