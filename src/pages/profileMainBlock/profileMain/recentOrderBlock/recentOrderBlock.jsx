import React from "react";
import {useTranslation} from "react-i18next";
import "./recentOrderBlock.scss"
import TextInView from "../../../../components/TextInView/TextInView";

function RecentOrderBlock ({date}){
  const {t, i18n} = useTranslation();
  
  
  
  return(
     <div className="RecentOrderBlock">
       <div className="imgBlock G-marginB-8 G-flex">
         {date.items.map((el)=>{
           return(
              <div className="itemImg" style={{backgroundImage: `url("${el.img}")`}}></div>
           )
         })}
       </div>
       
       <div className="itemsBlock">
         {date.items.map((el, index)=>{
           return(
              <div key={index} className=" G-flex-ACenter-JBetween G-marginB-8 no-select">
                <TextInView text={el.name} className={"G-14-400-Inter G-black no-select"}/>
                <div className="G-flex">
                  <TextInView text={`${el.count} x `} className={"G-14-400-Inter no-select G-marginR-8"}/>
                  <TextInView text={`BGN ${el.price}`} className={"grayText G-14-400-Inter no-select"}/>
                </div>
              </div>
           )
         })}
       </div>
       
       <div className="line"></div>
       
       <div className="G-flex-ACenter-JBetween G-marginB-8 G-16-400-Inter G-black no-select">
         <TextInView text={t("profile.total")}/>
         <TextInView text={`BGN ${date.total()}`}/>
       </div>
       
       <div className={`status ${date.status}`}>
         <TextInView text={
          date.status === "Delivered" && t("profile.status2") ||
           date.status === "In process" && t("profile.status3") ||
           date.status === "Cancelled" && t("profile.status4")
         }/>
       </div>
       
     </div>
  )
}
export default RecentOrderBlock