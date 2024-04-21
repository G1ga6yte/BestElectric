import React, {useEffect} from "react";
import "./App.scss";
import Navigation from "./pages/navigation/navigation";
import {Route, Routes, useLocation} from "react-router-dom";
import HomeMain from "./pages/homeMain/homeMain";
import {useNavigate} from "react-router";
import Footer from "./pages/footer/footer";
import {useTranslation} from "react-i18next";
import ProductsMain from "./pages/productsMain/productsMain";
import AboutUsMain from "./pages/aboutUsMain/aboutUsMain";
import ServicesMain from "./pages/servicesMain/servicesMain";
import Service from "./pages/servicesMain/service/service";
import ArticleMain from "./pages/articleMain/articleMain";
import CookiesBlock from "./components/cookiesBlock/cookiesBlock";
import BookingServiceBlock from "./pages/bookingServiceBlock/bookingServiceBlock";
import LoginDialog from "./components/loginBlock/loginDialog";


function App() {
  const {t, i18n} = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
     <div className="App">
       <Navigation/>
       <LoginDialog/>
       <CookiesBlock/>
       
       <Routes>
         <Route exact path="/home" element={<HomeMain/>}/>
         <Route path="/products" element={<ProductsMain/>}/>
         <Route path="/aboutUs" element={<AboutUsMain/>}/>
         <Route path="/services" element={<ServicesMain/>}/>
         <Route path="/service/:id" element={<Service/>}/>
         <Route path="/article/:id" element={<ArticleMain/>}/>
         <Route path="/bookingService" element={<BookingServiceBlock/>}/>
       </Routes>
       
       <Footer/>
     
     </div>
  );
}

export default App;
