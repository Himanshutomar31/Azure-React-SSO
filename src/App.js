import "./App.css";
import Home from "./Home.js"

import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

function App() {


  return (<Router><Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/" element={<h1>Hello world!</h1>}></Route>
    </Routes></Router>)
}

export default App;
