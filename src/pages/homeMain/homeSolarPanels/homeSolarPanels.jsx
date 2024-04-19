import React, {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import "./homeSolarPanels.scss"
import {Images} from "./images/images";
import TextInView from "../../../components/TextInView/TextInView";
import ProductBigCard from "../../../components/productBigCard/productBigCard";
import ProductMiniCard from "../../../components/productMiniCard/productMiniCard";


function HomeSolarPanels (){
  const {t, i18n} = useTranslation()
  
  const UESolarPanelData = [
    {
      name: t("main.settingsName1"),
      icon: Images.gridIcon,
      value: "MWT, IBC, optional"
    },
    {
      name: t("main.settingsName5"),
      icon: Images.dotsIcon,
      value: "100%"
    },
    {
      name: t("main.settingsName2"),
      icon: Images.lightningIcon,
      value: "400 Wp"
    },
    {
      name: t("main.settingsName4"),
      icon: Images.plusIcon,
      value: "Monocrystalline, microinverter"
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
     <div className="HomeSolarPanels G-CContainer">
       <p className="header G-header-100 G-black no-select"><TextInView text={t("main.sectionHeader7")}/></p>
       <p className="underHeader G-black no-select"><TextInView text={t("main.underHeader5")}/></p>
  
  
       <div className="contentBlock G-flex G-marginB-24">
    
         <ProductBigCard
            name={"UE Solar Panel"}
            status={t("main.status1")}
            discount={45}
            bestseller={true}
            price={1000}
            oldPrice={2500}
            prg={t("main.productPrg2")}
            settingsData={UESolarPanelData}
            img={Images.productImg}
         />
    
         <div className="advantagesBlock G-flex-Column">
           <p className="miniHeader G-24-400-Nexa G-black no-select G-marginB-16"><TextInView text={t("main.miniHeader3")}/></p>
      
           <div className="headerPrgCont G-flex-Column">
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv9")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc9")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv10")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc10")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv11")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc11")}/></p>
             </div>
             <div>
               <p className="sectionHeader G-20-400-Nexa G-Green-Text G-marginB-16 no-select"><TextInView text={t("main.adv12")}/></p>
               <p className="sectionPrg G-16-300-Inter G-black G-marginB-16 no-select"><TextInView text={t("main.advDesc12")}/></p>
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
                 bestseller={true}
                 img={Images.productImg}
                 name={"UE Solar Panel"}
                 desc={"400 Wp"}
                 price={"BGN 1000"}
              />
           ))}
         </div>
       </div>
       
     </div>
  )
}

export default HomeSolarPanels