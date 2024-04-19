import React from "react";
import "./homeProductsServices.scss"
import TextInView from "../../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";
import CarCardBlock from "../../../components/carCardBlock/carCardBlock";


function HomeProductsServices (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="HomeProductsServices G-CContainer">
        <p className="header G-header-100 G-black no-select"><TextInView text={t("main.sectionHeader4")}/></p>
       <p className="underHeader G-black no-select"><TextInView text={t("main.underHeader2")}/></p>
       
       
       <div className="contentBlock G-flex">
         <CarCardBlock/>
         
         
         <div className="advantagesBlock G-flex-Column">
            <p className="miniHeader G-24-400-Nexa G-black no-select G-marginB-16"><TextInView text={t("main.miniHeader1")}/></p>
           
           <div className="headerPrgCont G-flex-Column">
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv1")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc1")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv2")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc1")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv3")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc1")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv4")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc1")}/></p>
             </div>
           </div>


         </div>
         
       </div>
       
       
     </div>
  )
}

export default HomeProductsServices