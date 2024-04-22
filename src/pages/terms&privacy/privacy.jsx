import React from "react";
import TextInView from "../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";

function Privacy (){
  const {t, i18n} = useTranslation();
  
  return(
     <div className="termsPrivacyBlock G-CContainer">
       <p className="header G-black no-select G-marginB-32"><TextInView text={t("privacy.header2")}/></p>

       <p className="prg G-20-300-Inter G-black no-select"><TextInView text={t("privacy.prg21")}/></p>
       <p className="prg G-20-300-Inter G-black no-select"><TextInView text={t("privacy.prg22")}/></p>
       <ul>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted20")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted21")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted22")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted23")}/></li>
         <li className="G-20-300-Inter G-black no-select"><TextInView text={t("privacy.dotted24")}/></li>

       </ul>

     </div>
  )
}

export default Privacy