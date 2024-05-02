import React from "react";
import {Images} from "../images/images";
import TextInView from "../../../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";
import "./carReservationBlock.scss"

function CarReservationBlock (){
  const {t, i18n} = useTranslation();
  
  return(
     <div className="carReservationBlock G-flex-ACenter-JBetween G-marginB-40">
       <img src={Images.carImg} className="carImg tabletMarginB" alt=""/>
       <div className="tabletMarginB">
         <TextInView className={"G-16-300-Inter G-black no-select G-block G-marginB-8"} text={"Renault ZOE R135"}/>
         <div className="G-flex-ACenter">
           <TextInView className={"G-16-300-Inter G-black no-select G-marginR-16"} text={t("profile.color")}/>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
             <circle cx="8" cy="8" r="8" fill="white"/>
             <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_939_33287)"/>
             <defs>
               <linearGradient id="paint0_linear_939_33287" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#DDD9CF"/>
                 <stop offset="1" stopColor="#AEA79A"/>
               </linearGradient>
             </defs>
           </svg>
         </div>
       </div>
  
       <div className="tabletMarginB">
         <TextInView className={"G-16-300-Inter G-black no-select G-block G-marginB-8"} text={`${t("profile.pickUp")} - Sofia Airport area`} />
         <div className="G-flex-ACenter">
           <img src={Images.calendarIcon} className="G-marginR-8" alt=""/>
           <TextInView className={"G-16-400-Inter G-black no-select G-marginR-8"} text={"22.05.2024"}/>
           <img src={Images.clockIcon} className="G-marginR-8" alt=""/>
           <TextInView className={"G-16-400-Inter G-black no-select"} text={"12:00"}/>
         </div>
       </div>
  
       <div className="tabletMarginB">
         <TextInView className={"G-16-300-Inter G-black no-select G-block G-marginB-8"} text={`${t("profile.dropOff")} - Sofia Airport`} />
         <div className="G-flex-ACenter">
           <img src={Images.calendarIcon} className="G-marginR-8" alt=""/>
           <TextInView className={"G-16-400-Inter G-black no-select G-marginR-8"} text={"23.05.2024"}/>
           <img src={Images.clockIcon} className="G-marginR-8" alt=""/>
           <TextInView className={"G-16-400-Inter G-black no-select"} text={"12:00"}/>
         </div>
       </div>
  
       <p className="status paid"><TextInView text={t("profile.status1")}/></p>

     </div>
  )
}

export default CarReservationBlock