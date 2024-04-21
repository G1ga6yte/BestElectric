import React from "react";
import "./servicesMain.scss"
import {useTranslation} from "react-i18next";
import TextInView from "../../components/TextInView/TextInView";
import {Images} from "../productsMain/images/images";
import {Link} from "react-router-dom";

function ServicesMain (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="ServicesMain G-CContainer">
        <p className="header G-header-100 G-black no-select"><TextInView text={t("services.header")}/></p>
       <p className="prg G-black"><TextInView text={t("services.underHeader")}/></p>
       
       <div className="articlesCont G-flex">
         <div className="artBlock G-marginB-24">
           <div className="imgBlock G-marginB-24" >
             <Link to={`/service/solarPanels`} className="learnMoreBtn G-flex-ACenter-JCenter">
               <TextInView text={t("products.btn1")}/>
               <img src={Images.arrowRight} alt=""/>
             </Link>
             <div className="img" style={{backgroundImage: `url("${Images.art3Img}")`}}></div>
           </div>
    
           <p className="miniHeader G-black no-select"><TextInView text={t("services.artPrg1")}/></p>
         </div>
  
         <div className="artBlock G-marginB-24">
           <div className="imgBlock G-marginB-24">
             <Link to={`/service/chargers`} className="learnMoreBtn G-flex-ACenter-JCenter">
               <TextInView text={t("products.btn1")}/>
               <img src={Images.arrowRight} alt=""/>
             </Link>
             <div className="img" style={{backgroundImage: `url("${Images.art2Img}")`}}></div>
           </div>
    
           <p className="miniHeader G-black no-select"><TextInView text={t("services.artPrg2")}/></p>
         </div>
       </div>
       
       <div className="consultationBlock G-flex-ACenter-JCenter G-flex-Column">
          <p className="miniHeader G-black no-select"><TextInView text={t("services.prg1")}/></p>
         
         <button className="G-greenBtn G-white G-20-300-Nexa no-select"><TextInView text={t("services.btn1")}/></button>
         
       </div>
     </div>
  )
}

export default ServicesMain