import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import arrowLeft from "./images/arrow-narrow-left.svg";
import TextInView from "../TextInView/TextInView";

import checkIcon from "./images/check.svg"
function LoginStep3 ({name, setName, surname, setSurname, handleLoginStep, telNumber, handleTelNumber}){
  const {t, i18n} = useTranslation()
  const [acceptTerms, setAcceptTerms] = useState(false)
  
  function handleChangeName (e){
    setName(e.target.value)
  }
  function handleChangeSurname (e){
    setSurname(e.target.name)
  }
  
  
  return(
     <div className="loginDialog G-flex-ACenter-JBetween G-flex-Column">
       <button onClick={()=>{
         handleLoginStep(1)
       }} className="backBtn">
         <img src={arrowLeft} alt=""/>
       </button>
  
       <p className="header G-black no-select"><TextInView text={t("login.signup")}/></p>
  
       
       <div className="nameSurnameBlock G-flex-ACenter-JBetween">
         <input defaultValue={telNumber} onChange={handleTelNumber} className="numberInput" placeholder="+359" type="number"/>
         <input defaultValue={name} onChange={handleChangeName} className="numberInput halfInput" placeholder="First name" type="text"/>
         <input defaultValue={surname} onChange={handleChangeSurname} className="numberInput halfInput" placeholder="Last name" type="text"/>

       </div>
       
       <div className="acceptBlock G-flex-ACenter">
         <button onClick={()=>{
           setAcceptTerms(prev=>!prev)
         }} className={`checkbox ${acceptTerms ? "checked" : ""}`}>
           <img src={checkIcon} alt=""/>
         </button>
         <p className="termsPrgGreen">
           <TextInView text={t("login.termsPrg2")}/>
           <a href="/termsOfUse" target="_blank"><TextInView text={t("login.termsPrg11")}/></a>,
           <a href="/privacyPolicy" target="_blank"><TextInView text={t("login.termsPrg12")}/></a> <TextInView text={t("login.termsPrg14")}/>
           <a href="/dataProcessingAgreement"><TextInView text={t("login.termsPrg13")}/></a>
         </p>
       </div>
       
       <button onClick={()=>{
         handleLoginStep(4)
       }} className="loginBtn G-greenBtn G-20-400-Nexa G-white G-marginB-32"><TextInView text={t("login.login")}/></button>
  
       <p className="termsPrg noMargin">
         <TextInView text={t("login.termsPrg1")}/>
         <a href="/termsOfUse" target="_blank"><TextInView text={t("login.termsPrg11")}/></a>,
         <a href="/privacyPolicy" target="_blank"><TextInView text={t("login.termsPrg12")}/></a> <TextInView text={t("login.termsPrg14")}/>
         <a href="/dataProcessingAgreement"><TextInView text={t("login.termsPrg13")}/></a>
       </p>


     </div>
  )
}

export default LoginStep3