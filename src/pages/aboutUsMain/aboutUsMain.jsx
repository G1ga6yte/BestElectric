import React from "react";
import "./aboutUsMain.scss"
import {Images} from "./images/images";
import TextInView from "../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";

function AboutUsMain (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="AboutUsMain ">
        <div className="G-CContainer">
          <p className="header G-header-100 G-black no-select"><TextInView text={t("aboutUs.header")}/></p>
          <p className="prg G-black no-select"><TextInView text={t("aboutUs.prg1")}/></p>
  
  
          <p className="miniHeader"><TextInView text={t("aboutUs.miniHeader1")}/></p>
  
          <div className="missionsCont G-flex">
    
            <div className="missionBlock">
              <img className="G-marginB-8" src={Images.icon1} alt=""/>
              <p className="missionPrg G-20-300-Inter G-black"><TextInView text={t("aboutUs.mission1")}/></p>
            </div>
    
            <div className="missionBlock">
              <img src={Images.icon2} alt=""/>
              <p className="missionPrg G-20-300-Inter G-black"><TextInView text={t("aboutUs.mission2")}/></p>
            </div>
    
            <div className="missionBlock">
              <img src={Images.icon3} alt=""/>
              <p className="missionPrg G-20-300-Inter G-black"><TextInView text={t("aboutUs.mission3")}/></p>
            </div>
  
          </div>
  
          <p className="miniHeader"><TextInView text={t("aboutUs.miniHeader2")}/></p>
        </div>
       <div className="portfolioCont">
         <div className="portfolioBlock G-flex">
           <div className="img" style={{backgroundImage: `url("${Images.img1}")`}}></div>
           <div className="img" style={{backgroundImage: `url("${Images.img2}")`}}></div>
         </div>
       </div>
       
       <div className="G-CContainer">
         <p className="miniPrg"><TextInView text={t("aboutUs.prg2")}/></p>
         
         <p className="bottomHeader G-header-72 G-black no-select"><TextInView text={t("aboutUs.prg3")}/></p>
         
         
         <button className="contactUsBtn G-flex-ACenter-JCenter G-greenBtn">
           <TextInView className={"G-marginR-16 G-20-300-Nexa G-white"} text={t("aboutUs.btn1")}/>
           <img src={Images.arrowRight} alt=""/>
         </button>
       </div>
       
       
     </div>
  )
}

export default AboutUsMain