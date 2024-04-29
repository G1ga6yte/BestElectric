import React from "react";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import "./profileMain.scss"
import {Images} from "./images/images";

function ProfileMain (){
  const {t, i18n} = useTranslation();
  
  return(
     <div className="ProfileMain">
       <div className="G-flex-ACenter-JBetween G-marginB-32">
         <p className="miniHeader G-24-400-Inter G-black no-select"><TextInView text={t("profile.miniHeader1")}/></p>
         <p className="textUnderlined G-16-400-Inter G-black no-select"><TextInView text={t("profile.archive")}/></p>
       </div>
       
       <div className="carReservationBlock G-flex-ACenter-JBetween G-marginB-40">
         <img src={Images.carImg} className="carImg" alt=""/>
         <div>
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
         
         <div>
           <TextInView className={"G-16-300-Inter G-black no-select G-block G-marginB-8"} text={`${t("profile.pickUp")} - Sofia Airport area`} />
           <div className="G-flex-ACenter">
             <img src={Images.calendarIcon} className="G-marginR-8" alt=""/>
             <TextInView className={"G-16-400-Inter G-black no-select G-marginR-8"} text={"22.05.2024"}/>
             <img src={Images.clockIcon} className="G-marginR-8" alt=""/>
             <TextInView className={"G-16-400-Inter G-black no-select"} text={"12:00"}/>
           </div>
         </div>
  
         <div>
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
       
  
       <div className="G-flex-ACenter-JBetween G-marginB-32">
         <p className="miniHeader G-24-400-Inter G-black no-select"><TextInView text={t("profile.miniHeader2")}/></p>
         <p className="textUnderlined G-16-400-Inter G-black no-select"><TextInView text={t("profile.allOrders")}/></p>
       </div>
       
       <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-32"><TextInView text={t("profile.miniHeader3")}/></p>
       <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-32"><TextInView text={t("profile.miniHeader4")}/></p>

     </div>
  )
}

export default ProfileMain