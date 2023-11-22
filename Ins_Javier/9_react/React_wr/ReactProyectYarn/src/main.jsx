import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "../src/helloadso.jsx"
import { FirstApp, Avatar2 } from "./firstapp.jsx";
import { Avatar } from "./avatar.jsx";
import { Description } from "./description.jsx";
import { Clase } from "./clase.jsx"; 
import { MoteroApp } from "./moteroApp.jsx";
// import { Registropersona2 } from "./registro.jsx";
import "../src/estilo.css"

// const App = () => <h1>Hola, esto es una funcion flecha</h1> 

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MoteroApp/>
        {/* <Registropersona2/> */}
       {/*  <Clase/>
        <Avatar2/>
        <FirstApp/>
        <Registropersona/>
        <Avatar/>
        <Description/>
        <Clase/>
        <App /> 
        <FirstApp/> */}
    </React.StrictMode>
)