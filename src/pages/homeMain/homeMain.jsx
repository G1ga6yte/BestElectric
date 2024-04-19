import React from "react";
import HomeHeadBlock from "./homeHeadBlock/homeHeadBlock";
import HomeRentCar from "./homeRentCar/homeRentCar";
import HomeAboutCompany from "./homeAboutCompany/homeAboutCompany";
import HomeWhyChoose from "./homeWhyChoose/homeWhyChoose";
import HomeProductsServices from "./homeProductsServices/homeProductsServices";
import HomeEcoBlock from "./homeEcoBlock/homeEcoBlock";
import HomeChargingSolution from "./homeChargingSolution/homeChargingSolution";
import HomeSolarPanels from "./homeSolarPanels/homeSolarPanels";
import HomeCustomerReviews from "./homeCustomerReviews/homeCustomerReviews";

function HomeMain (){
  return(
     <div className="HomeMain G-Container">
       <HomeHeadBlock/>
       <HomeRentCar/>
       <HomeAboutCompany/>
       <HomeWhyChoose/>
       <HomeProductsServices/>
       <HomeEcoBlock/>
       <HomeChargingSolution/>
       <HomeSolarPanels/>
       <HomeCustomerReviews/>
     </div>
  )
}

export default HomeMain