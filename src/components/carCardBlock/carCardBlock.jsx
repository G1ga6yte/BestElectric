import React from "react";
import TextInView from "../TextInView/TextInView";
import {Images} from "../../pages/homeMain/homeRentCar/images/images";
import "./carCardBlock.scss"
// import CarModel from "../carModel/carModel";
import {useTranslation} from "react-i18next";

const CarModel = React.lazy(()=> import("../carModel/carModel"))

function CarCardBlock (){
  const {t, i18n} = useTranslation()
  const price = 500
  
  return(
     <div className="carInfoBlock G-flex">
     
       <div className="carBlock">
         <div className="carName G-flex-ACenter no-select">
           <TextInView text={"Renault ZOE R135"} className="G-24-400-Nexa G-black G-marginR-16"/>
           <p className="availablePrg"><TextInView className="G-16-300-Inter G-black" text={t("main.status1")}/></p>
         </div>
         <p className="no-select G-marginB-8 G-16-400-Inter G-black"><TextInView text={t("main.price1", {price})}/></p>
       
         <div className="carCont">
           <CarModel/>
         </div>
     
       </div>
     
       <div className="infoBlock no-select">
         <div className="buyRentButtons G-flex-ACenter">
           <button className="buyBtn G-marginR-8 G-20-300-Inter"><TextInView text={t("main.btn5")}/></button>
           <button className="rentBtn G-20-300-Inter G-Green-Text"><TextInView text={t("main.btn6")}/></button>
         </div>
       
         <div className="statisticBlock G-flex-Column">
           <div className="statisticLine G-flex-ACenter-JBetween">
             <div className="statusName G-flex-ACenter"><img src={Images.speedIcon} alt=""/><TextInView className={`G-16-300-Inter G-black`} text={t("main.desc1")}/></div>
             <p className="status G-16-300-Inter G-black"><TextInView text={13.5}/></p>
           </div>
         
           <div className="statisticLine G-flex-ACenter-JBetween">
             <div className="statusName G-flex-ACenter"><img src={Images.batteryIcon} alt=""/><TextInView className={`G-16-300-Inter G-black`} text={t("main.desc2")}/></div>
             <p className="status G-16-300-Inter G-black"><TextInView text={`${400} ${t("main.km")}`}/></p>
           </div>
         
           <div className="statisticLine G-flex-ACenter-JBetween">
             <div className="statusName G-flex-ACenter"><img src={Images.car4Icon} alt=""/><TextInView className={`G-16-300-Inter G-black`} text={t("main.desc3")}/></div>
             <p className="status G-16-300-Inter G-black"><TextInView text={t("main.front")}/></p>
           </div>
         
           <div className="statisticLine G-flex-ACenter-JBetween">
             <div className="statusName G-flex-ACenter"><img src={Images.speedIcon} alt=""/><TextInView className={`G-16-300-Inter G-black`} text={t("main.desc4")}/></div>
             <p className="status G-16-300-Inter G-black"><TextInView text={t("main.electro")}/></p>
           </div>
         </div>
       
         <div className="buttonsBlock G-flex-ACenter">
           <button className="bookBtn G-marginR-16 G-greenBtn G-white G-20-400-Nexa"><TextInView text={t("main.btn3")}/></button>
           <button className="learnMoreBtn G-greenBtn G-black G-20-400-Nexa"><TextInView text={t("main.btn4")}/></button>
         </div>
     
       </div>
   
     </div>
  )
}

export default CarCardBlock