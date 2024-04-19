import React from "react";
import "./homeEcoBlock.scss"
import {useTranslation} from "react-i18next";
import img1 from "./image 8.png"
import TextInView from "../../../components/TextInView/TextInView";
function HomeEcoBlock (){
  const {t, i18n} = useTranslation()
  
  
  return(
     <div className="HomeEcoBlock">
        <div className="HomeEcoCont" style={{backgroundImage: `url("${img1}")`}}>
          <div className="innerCont G-CContainer">
            <p className="header G-white"><TextInView text={t("main.sectionHeader5")}/></p>
            <p className="underHeader G-white"><TextInView text={t("main.underHeader3")}/></p>
            
            <div className="artsCont G-flex">
              <div className="artBlock">
                <p className="artHeader G-white G-24-400-Nexa G-marginB-16"><TextInView text={t("main.artHeader2")}/></p>
                <p className="artPrg G-white G-16-300-Inter"><TextInView text={t("main.artPrg2")}/></p>
              </div>
  
              <div className="artBlock">
                <p className="artHeader G-white G-24-400-Nexa G-marginB-16"><TextInView text={t("main.artHeader3")}/></p>
                <p className="artPrg G-white G-16-300-Inter"><TextInView text={t("main.artPrg3")}/></p>
              </div>
  
              <div className="artBlock">
                <p className="artHeader G-white G-24-400-Nexa G-marginB-16"><TextInView text={t("main.artHeader4")}/></p>
                <p className="artPrg G-white G-16-300-Inter"><TextInView text={t("main.artPrg4")}/></p>
              </div>
            </div>
            
          </div>
        </div>
     </div>
  )
}

export default HomeEcoBlock