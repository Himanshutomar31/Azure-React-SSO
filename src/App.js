import "./App.css";
import Home from "./Home.js"
// import { useEffect } from "react";
// import axios from "axios";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

function App() {
  // const getAccessToken = async () => {
  //   const response = await axios.get("https://test22012024.azurewebsites.net/.auth/me", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*", // Replace * with the actual origin of your frontend
  //       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  //       "Access-Control-Allow-Headers": "Content-Type, Authorization",
  //     },
  //   });   
  //   console.log("response =>", response);
  //   return response;
  // };
  // useEffect(() => {
  //   getAccessToken.then((res) => {
  //     console.log("access token=>", res);
  //   });
  // },[]);

  return (<Router><Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/" element={<h1>Hello world!</h1>}></Route>
    </Routes></Router>)
}

export default App;
