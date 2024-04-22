import React from "react";
import {useTranslation} from "react-i18next";
import TextInView from "../../components/TextInView/TextInView";

function Terms (){
  const {t, i18n} = useTranslation();
  
  return(
     <div className="termsPrivacyBlock G-CContainer">
       <p className="header G-black no-select G-marginB-32"><TextInView text={t("privacy.header3")}/></p>

       <p className="prg G-20-300-Inter G-black no-select"><TextInView text={t("privacy.prg31")}/></p>
       <p className="prg G-20-300-Inter G-black no-select"><TextInView text={t("privacy.prg32")}/></p>
       <ul className="G-marginB-24">
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted30")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted31")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted32")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted33")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted34")}/></li>
       </ul>
       
       <ul className="G-marginB-24">
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted35")}/></li>
         <div className="insideUl">
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted36")}/></li>
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted37")}/></li>
         </div>
       </ul>
  
       <ul className="G-marginB-24">
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted38")}/></li>
         <div className="insideUl">
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted39")}/></li>
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted40")}/></li>
         </div>
       </ul>
  
       <ul className="G-marginB-24">
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted41")}/></li>
         <div className="insideUl">
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted42")}/></li>
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted43")}/></li>
         </div>
       </ul>
  
       <ul className="G-marginB-24">
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted44")}/></li>
         <div className="insideUl">
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted45")}/></li>
           <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted46")}/></li>
         </div>
       </ul>


     </div>
  )
}

export default Terms