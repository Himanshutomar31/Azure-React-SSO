import "./App.css";
import Home from "./Home.js";
// import axios from "axios";
// import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
// import {
//   AuthenticatedTemplate,
//   UnauthenticatedTemplate,
//   useMsal,
//   useMsalAuthentication,
// } from "@azure/msal-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { instance } = useMsal();
  const account = instance.getActiveAccount();

  // useEffect(() => {
  //   let user = accounts[0];
  //   console.log("user", user);
  // }, [accounts]);

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
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/"
          element={<h1>Hello world! {console.log("account", account)}</h1>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
