import React from "react";
import "./productMiniCard.scss"
import {useTranslation} from "react-i18next";
import TextInView from "../TextInView/TextInView";

function ProductMiniCard ({status, img, name, desc, price, discount, bestseller}){
  const {t, i18n} = useTranslation()
  
  
  
  return(
     <div className="ProductMiniCard">
        <div className="imgBlock G-flex-Column G-marginB-16" style={{backgroundImage: `url("${img}")`}}>
  
          {status && <p className="availablePrg"><TextInView className="G-16-300-Inter G-black" text={status}/></p>}
          {discount && <p className="discountTag G-16-300-Inter G-black no-select"><TextInView text={t("main.discount", {discount})}/></p>}
          {bestseller && <p className="bestseller G-16-300-Inter G-black no-select"><TextInView text={t("main.bestseller")}/></p>}
        </div>
       
       <div className="nameBlock G-flex-Column">
         <p className="name G-black G-marginB-8"><TextInView text={name}/></p>
         <p className="desc G-marginB-8"><TextInView text={desc}/></p>
         <button className="G-black G-20-400-Nexa">{price}</button>
       </div>
     </div>
  )
}

export default ProductMiniCard