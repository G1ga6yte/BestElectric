import React, {useState} from "react";
import "./carOrderBlock.scss"
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";

import settingsIcon from "./images/settings-04.svg"
import img1 from "./images/image 8.png"
import carImg1 from "./images/image 16.png"
import ProductsItem from "../../../components/productsItem/productsItem";
import {Images} from "../../homeMain/homeRentCar/images/images";
function CarOrderBlock (){
  const {t, i18n} = useTranslation();
  const [sortBlockActive, setSortBlockActive] = useState(false)
  
  const carInfo = [
    {
      name: t("main.desc1"),
      icon: Images.speedIcon,
      value: "13.5"
    },
    {
      name: t("main.desc2"),
      icon: Images.batteryIcon,
      value: "400"
    },
    {
      name: t("main.desc3"),
      icon: Images.car4Icon,
      padding: 5,
      value: t("main.front")
    },
    {
      name: t("main.desc4"),
      icon: Images.powerIcon,
      value: t("main.electro")
    }
  ]
  
  return(
     <div className="CarOrderBlock">
        <div className="G-CContainer">
          <p className="header G-header-100 G-black no-select"><TextInView text={t("products.header2")}/></p>
          <p className="prg G-16-300-Inter G-black no-select"><TextInView text={t("products.prg2")}/></p>
        </div>
       <button className={`sortBtn G-flex-ACenter-JCenter G-marginB-16 ${sortBlockActive ? "activeBtn" : ""}`}><img src={settingsIcon} className="G-marginR-8" alt=""/><TextInView className={"G-20-300-Inter G-black no-select"} text={t("products.sort")}/></button>
  
  
       <div className="itemsSection">
         {Array.from({length: 6}, (_, index)=>(
            <ProductsItem
               img={carImg1}
               name={"Renault ZOE R135"}
               available={true}
               discount={45}
               bestseller={true}
               price={"BGN 17000"}
               carInfo={carInfo}
            />
         ))}
       </div>
       
       <div style={{backgroundImage: `url("${img1}")`}} className="rentCarBlock G-flex-ACenter-JCenter G-flex-Column no-select">
          <p className="miniHeader G-white G-marginB-16"><TextInView text={t("products.miniHeader4")}/></p>
         <p className="underHeader G-28-300-Nexa G-white"><TextInView text={t("products.prg3")}/></p>
         <button className="calculateBtn G-greenBtn G-white G-20-400-Nexa"><TextInView text={t("products.btn3")}/></button>
       </div>
  
       <div className="itemsSection">
         {Array.from({length: 6}, (_, index)=>(
            <ProductsItem
               img={carImg1}
               name={"Renault ZOE R135"}
               available={true}
               discount={45}
               bestseller={true}
               price={"BGN 17000"}
               carInfo={carInfo}
            />
         ))}
       </div>
       
       <button className="showMoreBtn G-black G-20-400-Nexa no-select"><TextInView text={t("products.btn2")}/></button>
       
     </div>
  )
}

export default CarOrderBlock