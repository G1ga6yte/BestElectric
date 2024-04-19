import React from "react";
import "./homeRentCar.scss"
import TextInView from "../../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";
import CarCardBlock from "../../../components/carCardBlock/carCardBlock";

function HomeRentCar (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomeRentCar G-CContainer">
        <p className="no-select header G-header-100 G-black"><TextInView text={t("main.sectionHeader1")}/></p>
       
       <div className="contentBlock G-flex">
         <CarCardBlock/>
  
  
  
         <div className="carPrgBlock G-flex-Column">
           <p className="carPrg G-16-300-Inter G-black"><TextInView text={t("main.prg2")}/></p>
           
           <div className="descBlock G-flex-Column">
             <p className="desc G-marginB-8 G-16-300-Inter G-black"><TextInView text={t("main.status2")}/></p>
             <p className="desc G-marginB-8 G-16-300-Inter G-black"><TextInView text={t("main.status3")}/></p>
             <p className="desc G-marginB-8 G-16-300-Inter G-black"><TextInView text={t("main.status4")}/></p>
             <p className="desc G-marginB-8 G-16-300-Inter G-black"><TextInView text={t("main.status5")}/></p>
           </div>
         </div>
       </div>
       
     </div>
  )
}

export default HomeRentCar