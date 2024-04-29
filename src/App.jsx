import React, {useEffect} from "react";
import "./App.scss";
import Navigation from "./pages/navigation/navigation";
import {Route, Routes, useLocation} from "react-router-dom";
import HomeMain from "./pages/homeMain/homeMain";
import {useNavigate} from "react-router";
import Footer from "./pages/footer/footer";
import {useTranslation} from "react-i18next";
import ProductsMain from "./pages/productsCont/productsMain/productsMain";
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
import ProductItemMain from "./pages/productsCont/productItemMain/productItemMain";
import ChargerStationBlock from "./pages/productsCont/chargerStationBlock/chargerStationBlock";
import SolarPanelsBlock from "./pages/productsCont/solarPanelsBlock/solarPanelsBlock";
import RentCarBlock from "./pages/productsCont/rentCarBlock/rentCarBlock";
import CarRentProgress from "./pages/productsCont/carRentProgress/carRentProgress";
import CartBlock from "./pages/cartBlock/cartBlock";
import CartCheckoutBlock from "./pages/cartCheckoutBlock/cartCheckoutBlock";
import ProfileMainBlock from "./pages/profileMainBlock/profileMainBlock";
import ProfileMain from "./pages/profileMainBlock/profileMain/profileMain";
import ProfileOrders from "./pages/profileMainBlock/profileOrders/profileOrders";


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
           <Route path="/products/chargerStation" element={<ChargerStationBlock/>}/>
           <Route path="/products/solarPanels" element={<SolarPanelsBlock/>}/>
           <Route path="/products/rentCar" element={<RentCarBlock/>}/>
           <Route path="/products/electricCars/product/:id" element={<ProductItemMain/>}/>
           <Route path="/products/electricCars/rentProgress/:id" element={<CarRentProgress/>}/>
         </Route>
         
         <Route path="/cart" element={<CartBlock/>}/>
         <Route path="/cart/checkout" element={<CartCheckoutBlock/>}/>
         
         <Route path="/profile" element={<ProfileMainBlock/>}>
           <Route path="/profile/" element={<ProfileMain/>}/>
           <Route path="/profile/orders" element={<ProfileOrders/>}/>
         </Route>


       </Routes>
       
       <Footer/>
     
     </div>
  );
}

export default App;
