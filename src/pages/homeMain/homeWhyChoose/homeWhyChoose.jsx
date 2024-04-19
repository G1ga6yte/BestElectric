import React from "react";
import "./homeWhyChoose.scss"
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import img1 from "./image 9.png"



function HomeWhyChoose (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="HomeWhyChoose G-CContainer">
       <p className="header G-header-100 G-black G-marginB-32"><TextInView text={t("main.sectionHeader3")}/></p>
       <p className="prg G-black G-marginB-32"><TextInView text={t("main.prg5")}/></p>
       
       
       <div className="imgStatuses G-flex-ACenter-JBetween">
         <div className="statusesBlock G-flex">
           
           <div className="statusBlock">
             <p className="statusHeader"><TextInView text={t("main.status6")}/></p>
             <p className="statusPrg G-20-300-Inter G-black"><TextInView text={t("main.statusPrg1")}/></p>
           </div>
  
           <div className="statusBlock">
             <p className="statusHeader"><TextInView text={t("main.status7")}/></p>
             <p className="statusPrg G-20-300-Inter G-black"><TextInView text={t("main.statusPrg2")}/></p>
           </div>
  
           <div className="statusBlock">
             <p className="statusHeader"><TextInView text={t("main.status8")}/></p>
             <p className="statusPrg G-20-300-Inter G-black"><TextInView text={t("main.statusPrg3")}/></p>
           </div>
  
           <div className="statusBlock">
             <p className="statusHeader"><TextInView text={t("main.status9")}/></p>
             <p className="statusPrg G-20-300-Inter G-black"><TextInView text={t("main.statusPrg4")}/></p>
           </div>
           
         </div>
  
         <img src={img1} className="img1" alt=""/>
       </div>
     </div>
  )
}

export default HomeWhyChoose