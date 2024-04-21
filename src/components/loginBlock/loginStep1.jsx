import React from "react";
import TextInView from "../TextInView/TextInView";
import {useTranslation} from "react-i18next";


import googleIcon from "./images/googleIcon.svg"
import facebookIcon from "./images/facebookIcon.svg"
import arrowLeft from "./images/arrow-narrow-left.svg";
import {useCartContext} from "../../CartContext";
function LoginStep1 ({telNumber, handleTelNumber, handleLoginStep}){
  const {t, i18n} = useTranslation()
  const {setLoginBlock, loginBlock} = useCartContext()
  
  
  return(
     <div className="loginDialog G-flex-ACenter-JBetween G-flex-Column">
       {loginBlock &&
          <button onClick={()=>{
            setLoginBlock(false)
          }} className="backBtn">
            <img src={arrowLeft} alt=""/>
          </button>
       }
       <p className="header G-black no-select"><TextInView text={t("login.login")}/></p>
       <input defaultValue={telNumber} onChange={handleTelNumber} className="numberInput" placeholder="+359" type="number"/>
       <button onClick={()=>{
         handleLoginStep(2)
       }} className="sendBtn G-greenBtn G-white G-20-400-Nexa no-select"><TextInView text={t("login.btn1")}/></button>
       <p className="orLine"><div/><TextInView text={t("login.or")}/><div/></p>
       <button  className="socialBtn facebookBtn G-flex-ACenter-JCenter">
         <img src={facebookIcon} alt=""/>
         <TextInView text={t("login.loginFacebook")}/>
       </button>
       <button className="socialBtn googleBtn G-flex-ACenter-JCenter">
         <img src={googleIcon} alt=""/>
         <TextInView text={t("login.loginGoogle")}/>
       </button>
       
       <p className="underText G-flex-ACenter-JCenter G-20-300-Inter">
         <TextInView className={"G-black"} text={t("login.prg1")}/>
         <button onClick={()=>{
           handleLoginStep(3)
         }} className="signUpBtn G-Green-Text G-20-300-Inter"><TextInView text={t("login.signup")}/></button>
       </p>
     </div>
  )
}

export default LoginStep1