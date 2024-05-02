import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import {Images} from "./images/images";

function OrderBlock({date}) {
  const {t, i18n} = useTranslation();
  const [status, setStatus] = useState(true); // true = order Received
  
  useEffect(() => {
    date.status.map((el) => {
      if (el.date === null) {
        if (status) {
          setStatus(false);
        }
      }
    });
  }, []);
  
  return (
     <div className="OrderBlock G-marginB-56">
       
       <div className="idBlock G-flex-ACenter-JBetween">
         <p className="G-flex-ACenter">
           {status && <img src={Images.verifiedIcon} className="G-marginR-8" alt=""/>}
           <TextInView text={t("orders.prg1")} className={"G-marginR-8 G-24-400-Inter G-black no-select"}/>
           <TextInView text={date.id} className={"G-24-400-Inter no-select grayText"}/>
         </p>
         
         {status ?
            <button className="actionBtn G-20-400-Nexa G-black no-select G-flex-ACenter">
              <TextInView text={t("orders.report")}/>
            </button>
            :
            <button className="actionBtn G-20-400-Nexa G-black no-select G-flex-ACenter">
              <img src={Images.xClose} className="G-marginR-8" alt=""/>
              <TextInView text={t("orders.cancel")}/>
            </button>
         }
       </div>
       
       <div className="midLine"></div>
       
       <div className="G-flex-ACenter-JCenter">
         <div className="statusCont G-flex-ACenter">
           {date.status.map((el, index) => {
             return (
                <div className="statusBlock G-flex-ACenter">
           
                  {index > 0 && <div className={`line ${el.estimateDays ? "orangeLine" : el.date ? "greenLine" : ""}`}></div>}
           
                  <div className="statusM">
                    {(el.date === null && el.estimateDays === null) &&
                       <div className="Status3">
                         <div className="statusCount">{index + 1}</div>
                         <div className="textBlock">
                           <p className="G-20-400-Inter G-black no-select"><TextInView text={t(`orders.${el.name}`)}/></p>
                         </div>
                       </div>}
                    {(el.date === null && el.estimateDays) &&
                       <div className="Status2">
                         <div className="statusCount orangeBlock">{index + 1}</div>
                         <div className="textBlock">
                           <p className="G-20-400-Inter G-black no-select"><TextInView text={t(`orders.${el.name}`)}/></p>
                           <p className="G-14-400-Inter G-black no-select"><TextInView text={el.estimateDays ? `${el.estimateDays} ${t("orders.estimate")}` : ""}/></p>
                         </div>
                       </div>}
                    {(el.date) &&
                       <div className="Status1">
                         <img src={Images.checkedStatus} alt=""/>
                         <div className="textBlock">
                           <p className="G-20-400-Inter G-black no-select"><TextInView text={t(`orders.${el.name}`)}/></p>
                           <p className="G-14-400-Inter G-black no-select"><TextInView text={el.date ? el.date : ""}/></p>
                         </div>
                       </div>}
                  </div>
                </div>
             );
           })}
         </div>
       </div>
  
       <div className="midLine2"></div>
       
       <div className="infoCont G-flex G-marginB-24">
         
         <div className="infoBlock G-flex G-flex-Column">
           <p className="infoHeader grayText G-16-400-Inter no-select G-marginB-16"><TextInView text={t("orders.miniHeader2")}/></p>
           <TextInView className={"G-14-400-Inter grayText no-select G-marginB-8"} text={t("orders.infoHeader1")}/>
           <TextInView className={"G-14-400-Inter infoText G-black no-select"} text={date.orderInfo.pickUpDate}/>
           <TextInView className={"G-14-400-Inter grayText no-select G-marginB-8"} text={t("orders.infoHeader2")}/>
           <TextInView className={"G-14-400-Inter infoText G-black no-select"} text={`${date.orderInfo.dropOffEstimate} ${t("orders.days")}`}/>
           <TextInView className={"G-14-400-Inter grayText no-select G-marginB-8"} text={t("orders.infoHeader3")}/>
           <TextInView className={"G-14-400-Inter infoText G-black no-select"} text={date.orderInfo.insurance}/>
         </div>
  
         <div className="infoBlock G-flex G-flex-Column">
           <p className="infoHeader grayText G-16-400-Inter no-select G-marginB-16"><TextInView text={t("orders.miniHeader3")}/></p>
           <TextInView className={"G-14-400-Inter grayText no-select G-marginB-8"} text={t("orders.infoHeader4")}/>
           <TextInView className={"G-14-400-Inter infoText G-black no-select"} text={date.orderInfo.pickUpLocation}/>
           <TextInView className={"G-14-400-Inter grayText no-select G-marginB-8"} text={t("orders.infoHeader5")}/>
           <TextInView className={"G-14-400-Inter infoText G-black no-select"} text={date.orderInfo.dropOffLocation}/>
         </div>
         
       </div>

       <div className="itemsCont G-flex G-flex-wrap">
         {date.items.map((el, index)=>{
           return(
              <div key={index} className="itemBlock G-flex G-marginR-16 G-marginB-16">
                <div className="image G-marginR-8" style={{backgroundImage: `url("${el.img}")`}}></div>
                <div className="itemInfoBlock G-flex G-flex-Column">
                  <TextInView className={"G-20-400-Inter G-black no-select G-marginB-8"} text={el.name}/>
                  <TextInView className={"G-16-400-Inter G-black no-select"} text={`${el.count}x BGN ${el.price}`}/>
                </div>
              </div>
           )
         })}
       </div>

     </div>
  );
}

export default OrderBlock;