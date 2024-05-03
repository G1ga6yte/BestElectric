import React from "react";
import {useTranslation} from "react-i18next";
import {Images} from "../homeHeadBlock/images/images";
import TextInView from "../../../components/TextInView/TextInView";
import "./homeAboutCompany.scss"
import {Link} from "react-router-dom";

function HomeAboutCompany (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="HomeAboutCompany G-CContainer G-flex">
       <p className="header"><TextInView text={t("main.sectionHeader2")}/></p>
       
       <div className="prgBlock G-flex-Column">
         <p className="prg G-16-300-Inter G-black G-marginB-16"><TextInView text={t("main.prg3")}/></p>
         <p className="prg G-16-300-Inter G-black G-marginB-32"><TextInView text={t("main.prg4")}/></p>
         <div className="buttonCont G-flex">
           <Link to="/services" className="G-flex-ACenter-JCenter G-greenBtn G-white G-20-400-Nexa">
             <TextInView className={"G-marginR-16"} text={t("main.btn7")}/>
             <img src={Images.arrowRight} alt=""/>
           </Link>
         </div>
       </div>
     </div>
  )
}

export default HomeAboutCompany