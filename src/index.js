import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./CartContext";
import "./source/styles/var.scss"
import "./source/styles/mixin.scss"
import "./source/styles/Global.scss"
import "./source/font/font.scss"
import './i18n'
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
     <CartProvider>
       <App/>
     </CartProvider>
   </BrowserRouter>,
);


