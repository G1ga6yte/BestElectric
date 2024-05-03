import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { useCookies } from 'react-cookie';
const CartContext = createContext();
export const CartProvider = ({children}) => {
 
  function Call(el, el2){
    const location = useLocation()
    return el === location.pathname
  }
  
  const [loginBlock, setLoginBlock] = useState(false)
  
  const [authentication, setAuthentication] = useState(true)
  
  const [loginStep, setLoginStep] = useState(1)
  const [cartBlock, setCartBlock] = useState(false)
  
  ///////////////////////////// cart
  const [cookies, setCookie] = useCookies(['cart', 'cookieConsent']);
  const [cart, setCart] = useState(cookies.cookieConsent ? (cookies.cart || []) : []);
  const [cookiesBlock, setCookiesBlock] = useState(false)
  
  const handleAccept = () => {
    setCookie('cookieConsent', true, { path: '/', maxAge: 31536000 }); // Max age set to 1 year
    setCookiesBlock(false);
  };
  
  const handleDecline = () => {
    setCookiesBlock(false);
  };
  
  useEffect(()=>{
    const newInterval = setTimeout(()=>{
      if (!cookies.cookieConsent){
        setCookiesBlock(true)
      }
    }, 5000)
    
    
    return ()=> clearTimeout(newInterval)
  }, [])
  
  
  const addToCart = (item) => {
      const existingItem = cart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        existingItem.count++;
        setCart([...cart]);
        setCookie('cart', cart, { path: '/' });
      } else {
        const newItem = { ...item, count: 1, checked: false };
        setCart([...cart, newItem]);
        setCookie('cart', [...cart, newItem], { path: '/' });
      }
  };
  
  
  
  const deleteFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    setCookie('cart', newCart, { path: '/' });
  };
  
  const increaseCount = (index) => {
    const newCart = [...cart];
    newCart[index].count++;
    setCart(newCart);
    setCookie('cart', newCart, { path: '/' });
  };
  
  const decreaseCount = (index) => {
    const newCart = [...cart];
    if (newCart[index].count > 1) {
      newCart[index].count--;
    }
    setCart(newCart);
    setCookie('cart', newCart, { path: '/' });
  };
  
  const toggleCheckbox = (index) => {
    const newCart = [...cart];
    newCart[index].checked = !newCart[index].checked;
    setCart(newCart);
    setCookie('cart', newCart, { path: '/' });
  };
  
  const toggleAllCheckboxes = () => {
    const allChecked = cart.every(item => item.checked);
    const newCart = cart.map(item => ({
      ...item,
      checked: !allChecked
    }));
    setCart(newCart);
    setCookie('cart', newCart, { path: '/' });
  };
  
  
  return (<CartContext.Provider value={{
    Call, loginBlock, setLoginBlock,
    authentication, setAuthentication,
    loginStep, setLoginStep, cartBlock, setCartBlock,
    addToCart, cart, deleteFromCart, increaseCount, decreaseCount, toggleCheckbox, toggleAllCheckboxes,
    handleDecline, handleAccept, cookiesBlock, setCookiesBlock
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};