import React, {useEffect, useState} from "react";
import "./cookiesBlock.scss"
import TextInView from "../TextInView/TextInView";
import {useTranslation} from "react-i18next";
import {useCartContext} from "../../CartContext";

function CookiesBlock (){
  const {t, i18n} = useTranslation();
  const { handleDecline, handleAccept, cookiesBlock, setCookiesBlock} = useCartContext()
  const [settings1, setSettings1] = useState(true)
  const [settings2, setSettings2] = useState(false)
  const [settings3, setSettings3] = useState(true)
  const [settings4, setSettings4] = useState(false)
  
  // onClick={()=>{
  //   setCookiesBlock(false)
  // }}
  
  
  
  
  
  return(
     cookiesBlock &&
     <div  className="CookiesBlock">

       <p className="header no-select G-marginB-16"><TextInView text={t("cookies.header")}/></p>
       <p className="prg G-20-300-Inter G-black no-select G-marginB-32"><TextInView text={t("cookies.prg1")}/></p>
     
       <div className="settingsLine G-flex-ACenter-JBetween G-marginB-16">
         <p className="settingsName G-20-400-Inter G-black no-select"><TextInView text={t("cookies.settings1")}/></p>
         <p className="statusPrg G-20-400-Inter"><TextInView text={t("cookies.status1")}/></p>
       </div>
       
       <div className="settingsLine G-flex-ACenter-JBetween G-marginB-16">
         <p className="settingsName G-20-400-Inter G-black no-select"><TextInView text={t("cookies.settings2")}/></p>
         <div onClick={()=>setSettings1(prev=>!prev)} className={`switcherBlock ${settings1 ? "activeSwitcher" : ""}`}><div className="switcher"></div></div>
       </div>
  
       <div className="settingsLine G-flex-ACenter-JBetween G-marginB-16">
         <p className="settingsName G-20-400-Inter G-black no-select"><TextInView text={t("cookies.settings3")}/></p>
         <div onClick={()=>setSettings2(prev=>!prev)} className={`switcherBlock ${settings2 ? "activeSwitcher" : ""}`}><div className="switcher"></div></div>
       </div>
  
       <div className="settingsLine G-flex-ACenter-JBetween G-marginB-16">
         <p className="settingsName G-20-400-Inter G-black no-select"><TextInView text={t("cookies.settings4")}/></p>
         <div onClick={()=>setSettings3(prev=>!prev)} className={`switcherBlock ${settings3 ? "activeSwitcher" : ""}`}><div className="switcher"></div></div>
       </div>
  
       <div className="settingsLine G-flex-ACenter-JBetween G-marginB-16">
         <p className="settingsName G-20-400-Inter G-black no-select"><TextInView text={t("cookies.settings5")}/></p>
         <div onClick={()=>setSettings4(prev=>!prev)} className={`switcherBlock ${settings4 ? "activeSwitcher" : ""}`}><div className="switcher"></div></div>
       </div>
  
       <a className="cookieLink G-marginB-32 G-20-400-Inter G-black" href="/cookiePolicy" target="_blank"><TextInView text={"cookie policy"}/></a>
       
      <div className="buttonsBlock G-flex">
        <button onClick={()=>{handleDecline()}} className="saveBtn G-20-400-Nexa G-black no-select"><TextInView text={t("cookies.btn1")}/></button>
        <button onClick={()=>{handleAccept()}} className="acceptBtn G-greenBtn G-20-400-Nexa G-white no-select"><TextInView text={t("cookies.btn2")}/></button>

      </div>
      
     </div>
  )
}

export default CookiesBlock