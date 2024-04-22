import React from "react";
import "./termsPrivacy.scss"
import TextInView from "../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";

function Delivery (){
  const {t, i18n} = useTranslation();
  
  return(
     <div className="termsPrivacyBlock G-CContainer">
        <p className="header G-black no-select G-marginB-32"><TextInView text={t("privacy.header1")}/></p>
       
       <ul>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted10")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted11")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted12")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted13")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted14")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted15")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted16")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted17")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted18")}/></li>
       </ul>
     </div>
  )
}

export default Delivery