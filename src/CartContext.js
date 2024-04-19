import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
const CartContext = createContext();

export const CartProvider = ({children}) => {
 
  function Call(el, el2){
    const location = useLocation()
    return el === location.pathname
  }
  
 
  
  
  
  return (<CartContext.Provider value={{
    Call
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};