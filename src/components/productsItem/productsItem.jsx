import React from "react";
import "./productsItem.scss"
import TextInView from "../TextInView/TextInView";
import {useTranslation} from "react-i18next";

function ProductsItem ({img, name, available, carInfo, price, discount, bestseller}){
  const {t, i18n} = useTranslation();
  
  return(
     <div className="ProductsItem">
        <div style={{backgroundImage: `url("${img}")`}} className="imgBlock G-marginB-16">
          <div className="statusBlock">
            {available && <p className="availablePrg G-black G-16-300-Inter G-marginB-8"><TextInView text={t("main.status1")}/></p>}
            {discount && <p className="discountPrg G-black G-16-300-Inter G-marginB-8"><TextInView text={t("main.discount", {discount})}/></p>}
            {bestseller && <p className="bestsellerPrg G-black G-16-300-Inter G-marginB-8"><TextInView text={t("main.bestseller")}/></p>}
          </div>
        </div>
       
       <p className="name G-black no-select G-marginB-16"><TextInView text={name}/></p>
       
       <div className="descriptionBlock">
         {carInfo.map((el, index)=>{
           return(
              <div className="statisticLine G-flex-ACenter-JBetween G-marginB-16">
                <div className="statusName G-flex-ACenter"><img style={{padding: `${el.padding ? `0 ${el.padding}px` : "0"}`}} src={el.icon} alt=""/><TextInView className={`G-16-300-Inter G-black`} text={el.name}/></div>
                <p className="status G-16-300-Inter G-black"><TextInView text={el.value}/></p>
              </div>
           )
         })}
       </div>
       
       <button className="buyBtn G-20-400-Nexa G-black no-select">
         <TextInView text={price}/>
       </button>
       
       
     </div>
  )
}

export default ProductsItem