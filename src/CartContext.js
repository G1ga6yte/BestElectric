import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
const CartContext = createContext();

export const CartProvider = ({children}) => {
 
  function Call(el, el2){
    const location = useLocation()
    return el === location.pathname
  }
  
  const [loginBlock, setLoginBlock] = useState(false)
  
  const [authentication, setAuthentication] = useState(false)
  
  const [loginStep, setLoginStep] = useState(1)
  const [cartBlock, setCartBlock] = useState(false)
  
  
  
  
  
  return (<CartContext.Provider value={{
    Call, loginBlock, setLoginBlock,
    authentication, setAuthentication,
    loginStep, setLoginStep, cartBlock, setCartBlock
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};