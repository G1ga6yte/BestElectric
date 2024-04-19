import React, {useEffect, useRef} from "react";
import "./homeChargingSolution.scss"
import TextInView from "../../../components/TextInView/TextInView";
import ProductBigCard from "../../../components/productBigCard/productBigCard";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";
import ProductMiniCard from "../../../components/productMiniCard/productMiniCard";

function HomeChargingSolution (){
  const {t, i18n} = useTranslation()
  
  const WebastoPureData = [
    {
      name: t("main.settingsName1"),
      icon: Images.targetIcon,
      value: "AC"
    },
    {
      name: t("main.settingsName2"),
      icon: Images.lightningIcon,
      value: "up to 22 kW"
    },
    {
      name: t("main.settingsName3"),
      icon: Images.chargerIcon,
      value: "Type 2"
    },
    {
      name: t("main.settingsName4"),
      icon: Images.plusIcon,
      value: "Wi-Fi, consumption monitoring"
    }
  ]
  
  const divRef = useRef(null)
  
  useEffect(() => {
    if (divRef.current) {
      const divElement = divRef.current;
      const totalWidth = divElement.scrollWidth;
      const centerPosition = (totalWidth - window.innerWidth) /2;
      divElement.scrollLeft = centerPosition;
    }
  }, []);
  
  
  return(
     <div className="HomeChargingSolution G-CContainer">
        <p className="header G-header-100 G-black no-select"><TextInView text={t("main.sectionHeader6")}/></p>
       <p className="underHeader G-black no-select"><TextInView text={t("main.underHeader4")}/></p>
       
       
       <div className="contentBlock G-flex G-marginB-24">
  
         <ProductBigCard
            name={"Webasto Pure"}
            status={t("main.status1")}
            discount={45}
            price={1700}
            oldPrice={2500}
            prg={t("main.productPrg1")}
            settingsData={WebastoPureData}
            img={Images.productImg}
         />
  
         <div className="advantagesBlock G-flex-Column">
           <p className="miniHeader G-24-400-Nexa G-black no-select G-marginB-16"><TextInView text={t("main.miniHeader2")}/></p>
    
           <div className="headerPrgCont G-flex-Column">
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv5")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc5")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv6")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc6")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv7")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc7")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv8")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc8")}/></p>
             </div>
           </div>
  
  
         </div>
         
       </div>
       
       
       <div ref={divRef} className="productsCont">
         <div className="productsBlock G-flex">
           {Array.from({length: 5}, (_, index)=>(
              <ProductMiniCard
                 status={t("main.status1")}
                 discount={45}
                 img={Images.productImg}
                 name={"Webasto Pure"}
                 desc={"up to 22 kW"}
                 price={"BGN 1700"}
              />
           ))}
         </div>
       </div>
       
       
       
     </div>
  )
}

export default HomeChargingSolution