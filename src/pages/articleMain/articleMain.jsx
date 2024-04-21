import React, {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import "./articleMain.scss"
import arrowLeft from "./arrow-narrow-left.svg"
import panelsImg from "./panels.png"
import TextInView from "../../components/TextInView/TextInView";
import {useNavigate} from "react-router";
import ProductMiniCard from "../../components/productMiniCard/productMiniCard";
import {Images} from "../homeMain/homeSolarPanels/images/images";


function ArticleMain (){
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()
  
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
     <div className="ArticleMain G-CContainer">
        <button onClick={()=>navigate(-1)} className="backBtn G-flex-ACenter-JCenter">
          <img className="G-marginR-8" src={arrowLeft} alt=""/>
          <TextInView className="G-24-400-Nexa G-black no-select" text={t("article.btn1")}/>
        </button>
       
       <p className="header G-black no-select"><TextInView text={t("article.header")}/></p>
       
       
       <p className="prg G-20-300-Inter G-black no-select G-marginB-32"><TextInView text={t("article.prg1")}/></p>
       
       <p className="miniHeader G-20-400-Inter G-black G-marginB-8"><TextInView text={t("article.miniHeader1")}/></p>
  
       <p className="prg G-20-300-Inter G-black no-select G-marginB-32"><TextInView text={t("article.prg2")}/></p>
  
       <p className="miniHeader G-20-400-Inter G-black G-marginB-8"><TextInView text={t("article.miniHeader2")}/></p>
  
       <p className="prg G-20-300-Inter G-black no-select G-marginB-16"><TextInView text={t("article.prg3")}/></p>
  
       <img src={panelsImg} className="bigImg G-marginB-16" alt=""/>
       
       <p className="prg G-20-300-Inter G-black no-select G-marginB-16"><TextInView text={t("article.prg4")}/></p>

       <div className="imgBlock G-flex-ACenter-JBetween G-marginB-16">
         <img src={panelsImg} className="halfImg" alt=""/>
         <img src={panelsImg} className="halfImg" alt=""/>
       </div>
  
       <p className="miniHeader G-20-400-Inter G-black G-marginB-8"><TextInView text={t("article.miniHeader3")}/></p>
  
       <p className="prg G-20-300-Inter G-black no-select G-marginB-32"><TextInView text={t("article.prg5")}/></p>
  
       <p className="prg G-20-300-Inter G-black no-select"><TextInView text={t("article.prg6")}/></p>

       <p className="sectionHeader G-black G-24-400-Nexa G-marginB-16"><TextInView text={t("article.miniHeader4")}/></p>
  
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

export default ArticleMain