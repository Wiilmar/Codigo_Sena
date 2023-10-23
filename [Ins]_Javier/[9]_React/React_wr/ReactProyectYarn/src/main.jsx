import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "../src/helloadso.jsx"
import { FirstApp } from "./firstapp.jsx";

// const App = () => <h1>Hola, esto es una funcion flecha</h1> 

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App /> 
        <FirstApp/>
    </React.StrictMode>
)