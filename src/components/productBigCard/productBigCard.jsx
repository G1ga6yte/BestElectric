import React from "react";
import TextInView from "../TextInView/TextInView";
import {useTranslation} from "react-i18next";
import "./productBigCard.scss"


import leftArrow from "./arrow-narrow-left.svg"
import rightArrow from "./arrow-narrow-right.svg"
function ProductBigCard ({name, discount, prg, price, oldPrice, status, settingsData, img, bestseller}){
  const {t, i18n} = useTranslation()
  
  
  
  
  return(
     <div className="ProductBigCard G-flex">
     
       <div className="productBlock">
         <div className="productName G-flex-ACenter no-select">
           <TextInView text={name} className="G-24-400-Nexa G-black G-marginR-16"/>
           {status && <p className="availablePrg G-marginR-16"><TextInView className="G-16-300-Inter G-black" text={status}/></p>}
           {discount && <p className="discountTag G-16-300-Inter G-black no-select G-marginR-16"><TextInView text={t("main.discount", {discount})}/></p>}
           {bestseller && <p className="bestseller G-16-300-Inter G-black no-select G-marginR-16"><TextInView text={t("main.bestseller")}/></p>}
         </div>
         <div className="G-flex-ACenter G-marginB-16">
           <p className="no-select G-16-400-Inter G-black"><TextInView text={t("main.cardPrice", {price})}/></p>
           {oldPrice && <p className="oldPrice"><TextInView text={oldPrice}/></p>}
         </div>
       
         <div className="carCont" style={{backgroundImage: `url("${img}")`}}></div>
     
       </div>
     
       <div className="infoBlock no-select">
         <div className="countButtons G-flex-ACenter">
            <button ><img src={leftArrow} alt=""/></button>
           <button ><img src={rightArrow} alt=""/></button>
         </div>
       
         <div className="statisticBlock G-flex-Column">
           
  
           {settingsData.map((el, index)=>{
             return(
                <div key={index} className="statisticLine G-flex-ACenter-JBetween">
                  <div className="statusName G-flex-ACenter"><img src={el.icon} alt=""/><TextInView className={`G-14-400-Inter G-black`} text={el.name}/></div>
                  <p className="status G-14-400-Inter G-black"><TextInView text={el.value}/></p>
                </div>
             )
           })}
         </div>
       
         <div className="buttonsBlock G-flex-ACenter">
           <button className="bookBtn G-marginR-16 G-greenBtn G-white G-20-400-Nexa"><TextInView text={t("main.btn3")}/></button>
           <button className="learnMoreBtn G-greenBtn G-black G-20-400-Nexa"><TextInView text={t("main.btn4")}/></button>
         </div>
         
         <div className="prg G-black">
           <TextInView text={prg}/>
         </div>
     
       </div>
   
     </div>
  )
}
export default ProductBigCard