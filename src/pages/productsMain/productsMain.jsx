import React from "react";
import "./productsMain.scss"
import TextInView from "../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";
import {Images} from "./images/images";


function ProductsMain (){
  const {t, i18n} = useTranslation()
  
  return(
     <div className="ProductsMain G-CContainer">
     
       <div className="headerBlock G-flex">
          <p className="header G-header-100 G-black no-select"><TextInView text={t("products.header")}/></p>
         
         <div className="prg G-16-300-Inter G-black no-select"><TextInView text={t("products.prg1")}/></div>
       </div>
       
       
       <div className="articlesCont G-flex">
         
         <div className="artBlock G-marginB-24">
           <div className="imgBlock G-marginB-24" >
             <button className="learnMoreBtn G-flex-ACenter-JCenter">
               <TextInView className={"G-marginR-8"} text={t("products.btn1")}/>
               <img src={Images.arrowRight} alt=""/>
             </button>
             <div className="img" style={{backgroundImage: `url("${Images.art1Img}")`}}></div>
           </div>
           
           <p className="miniHeader G-black no-select"><TextInView text={t("products.miniHeader1")}/></p>
         </div>
  
         <div className="artBlock G-marginB-24">
           <div className="imgBlock G-marginB-24">
             <button className="learnMoreBtn G-flex-ACenter-JCenter">
               <TextInView text={t("products.btn1")}/>
               <img src={Images.arrowRight} alt=""/>
             </button>
             <div className="img" style={{backgroundImage: `url("${Images.art2Img}")`}}></div>
           </div>
    
           <p className="miniHeader G-black no-select"><TextInView text={t("products.miniHeader2")}/></p>
         </div>
  
         <div className="artBlock G-marginB-24">
           <div className="imgBlock G-marginB-24" >
             <button className="learnMoreBtn G-flex-ACenter-JCenter">
               <TextInView text={t("products.btn1")}/>
               <img src={Images.arrowRight} alt=""/>
             </button>
             <div className="img" style={{backgroundImage: `url("${Images.art3Img}")`}}></div>
           </div>
    
           <p className="miniHeader G-black no-select"><TextInView text={t("products.miniHeader3")}/></p>
         </div>
         
       </div>
     
     </div>
  )
}

export default ProductsMain