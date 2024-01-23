import "./App.css";
import Home from "./Home.js";
// import axios from "axios";
import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { instance } = useMsal();
  useEffect(() => {

    const getAccessToken = async () => {
      instance.acquireTokenSilent({
        scopes: ["user.read"],
        authority: `https://login.microsoftonline.com/a57f7d92-038e-4d4c-8265-7cd2beb33b34`,
      })
      .then((response) => {
        console.log(response)
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${response.accessToken}`);
        return fetch(`https://graph.microsoft.com/v1.0/me`, {
          method: "GET",
          headers,
        }).then((response) => console.log(response.json()))
      });    
  
    };
    getAccessToken();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<h1>Hello world!</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
