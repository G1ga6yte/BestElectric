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
import Delivery from "./pages/terms&privacy/delivery";
import Privacy from "./pages/terms&privacy/privacy";
import Terms from "./pages/terms&privacy/terms";
import ProductsCont from "./pages/productsCont/productsCont";
import CarOrderBlock from "./pages/productsCont/carOrderBlock/carOrderBlock";


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
         {/*<Route path="/ourProducts" element={<ProductsMain/>}/>*/}
         <Route path="/aboutUs" element={<AboutUsMain/>}/>
         <Route path="/services" element={<ServicesMain/>}/>
         <Route path="/service/:id" element={<Service/>}/>
         <Route path="/article/:id" element={<ArticleMain/>}/>
         <Route path="/bookingService" element={<BookingServiceBlock/>}/>
         <Route path="/delivery&payment" element={<Delivery/>}/>
         <Route path="/privacyPolicy" element={<Privacy/>}/>
         <Route path="/termsOfUse" element={<Terms/>}/>
         <Route path="/products" element={<ProductsCont/>}>
           <Route path="/products/" element={<ProductsMain/>}/>
           <Route path="/products/electricCars" element={<CarOrderBlock/>}/>
         </Route>

       </Routes>
       
       <Footer/>
     
     </div>
  );
}

export default App;
