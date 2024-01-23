import "./App.css";
import Home from "./Home.js";
import axios from "axios";
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const getAccessToken = async () => {
    let response = await axios.get("https://graph.microsoft.com/v1.0/me");
    console.log("response", response);
    return response;
  };

  useEffect(() => {
    getAccessToken().then((res) => {
      console.log("access token", res);
    });
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
