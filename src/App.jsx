import React, {useEffect}  from "react";
import "./App.scss";
import Navigation from "./pages/navigation/navigation";
import {Routes, Route, useLocation} from "react-router-dom";
import HomeMain from "./pages/homeMain/homeMain";
import {useNavigate} from "react-router";
import Footer from "./pages/footer/footer";
import {useTranslation} from "react-i18next";
import ProductsMain from "./pages/productsMain/productsMain";
import AboutUsMain from "./pages/aboutUsMain/aboutUsMain";




function App() {
  const {t, i18n} = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if (location.pathname === "/"){
      navigate("/home")
    }
    window.scrollTo(0, 0)
  }, [location])
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  
  return (
     <div className="App">
        <Navigation/>
       
       <Routes>
         <Route exact path="/home" element={<HomeMain/>}/>
         <Route path="/products" element={<ProductsMain/>}/>
         <Route path="/aboutUs" element={<AboutUsMain/>}/>
       </Routes>
       
       <Footer/>
       
     </div>
  );
}

export default App;
