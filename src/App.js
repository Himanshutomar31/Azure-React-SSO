import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const getAccessToken = async () => {
    const response = await axios.get("https://test22012024.azurewebsites.net/.auth/me", {
      headers: {
        "Access-Control-Allow-Origin": "*", // Replace * with the actual origin of your frontend
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });   
    console.log("response =>", response);
    return response;
  };
  useEffect(() => {
    getAccessToken.then((res) => {
      console.log("access token=>", res);
    });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn SSO Azure App Service.
        </a>
      </header>
    </div>
  );
}

export default App;
