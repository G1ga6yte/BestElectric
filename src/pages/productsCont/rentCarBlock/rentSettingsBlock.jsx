import React, {useState} from "react";
import Calendar from "react-calendar";
import {useTranslation} from "react-i18next";
import {RentImages} from "./images/images";
import TextInView from "../../../components/TextInView/TextInView";


function RentSettingsBlock (){
  const {t, i18n} = useTranslation();
  
  const months = [
    `${t("products.month1")}`,
    `${t("products.month2")}`,
    `${t("products.month3")}`,
    `${t("products.month4")}`,
    `${t("products.month5")}`,
    `${t("products.month6")}`,
    `${t("products.month7")}`,
    `${t("products.month8")}`,
    `${t("products.month9")}`,
    `${t("products.month10")}`,
    `${t("products.month11")}`,
    `${t("products.month12")}`,
    `${t("products.month1")}`,
    `${t("products.month2")}`,
    `${t("products.month3")}`,
  ];
  const times = ["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
  
  
  const [totalDays, setTotalDays] = useState(2)
  const [deliveryType, setDeliveryType] = useState("Without delivery")
  
  
  const [activeSelectBlock, setActiveSelectBlock] = useState(0)
  
  const [selectedFromDate, setSelectedFromDate] = useState(t("products.from"));
  const [fromDateValue, setFromDateValue] = useState(new Date());
  const [activeFromTime, setActiveFromTime] = useState("9:00")
  
  const [selectedToDate, setSelectedToDate] = useState(t("products.to"));
  const [toDateValue, setToDateValue] = useState(new Date());
  const [activeToTime, setActiveToTime] = useState("9:00")
  
  
  function handleChangeFromDate(event) {
    if (event){
      setFromDateValue(event);
      let newDate = `${event.getDate()} ${months[event.getMonth()]}, ${event.getFullYear()}`;
      setSelectedFromDate(newDate);
      
    } else {
    
    }
  }
  
  function handleChangeToDate(event) {
    if (event){
      setToDateValue(event);
      let newDate = `${event.getDate()} ${months[event.getMonth()]}, ${event.getFullYear()}`;
      setSelectedToDate(newDate);
      
    } else {
    
    }
  }
  
  
  return(
     <div className="RentSettingsBlock">
       <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-16"><TextInView text={t("products.miniHeader17")}/></p>
        <div className={`selectBlock G-marginB-16 ${activeSelectBlock === 1 ? "activeSelectBlock" : ""}`}>
          <div onClick={()=>{
            activeSelectBlock === 1 ? setActiveSelectBlock(0) : setActiveSelectBlock(1)
          }} className="select G-flex-ACenter-JBetween no-select">
            <span className={`G-20-300-Inter G-black  ${selectedFromDate === t("products.from") ? "grayText" : ""}`}>{selectedFromDate} {selectedFromDate === t("products.from") ? "" : activeFromTime}</span>
            <img className="chevronDownImg" src={RentImages.chevronDown} alt=""/>
          </div>
          
          <div className="calendarCont" style={{display: `${activeSelectBlock === 1 ? "flex" : "none"}`}}>
            <div className="calendarBlock">
              <Calendar onChange={(event) => {
                handleChangeFromDate(event);
              }} locale={i18n.resolvedLanguage.toLowerCase()} value={fromDateValue}/>
            </div>
            <div className="timesBlock">
              {times.map((el, index)=>{
                return(
                   <button onClick={()=>{
                     setActiveFromTime(el)
                   }} className={`timeBtn G-16-300-Inter ${activeFromTime === el ? "activeTime" : ""}`} key={index}>{el}</button>
                )
              })}
            </div>
            
          </div>
          
        </div>
  
       <div className={`selectBlock G-marginB-16 ${activeSelectBlock === 2 ? "activeSelectBlock" : ""}`}>
         <div onClick={()=>{
           activeSelectBlock === 2 ? setActiveSelectBlock(0) : setActiveSelectBlock(2)
         }} className="select G-flex-ACenter-JBetween no-select">
           <span className={`G-20-300-Inter G-black  ${selectedToDate === t("products.to") ? "grayText" : ""}`}>{selectedToDate} {selectedToDate === t("products.to") ? "" : activeToTime}</span>
           <img className="chevronDownImg" src={RentImages.chevronDown} alt=""/>
         </div>
    
         <div className="calendarCont" style={{display: `${activeSelectBlock === 2 ? "flex" : "none"}`}}>
           <div className="calendarBlock">
             <Calendar onChange={(event) => {
               handleChangeToDate(event);
             }} locale={i18n.resolvedLanguage.toLowerCase()} value={toDateValue}/>
           </div>
           <div className="timesBlock">
             {times.map((el, index)=>{
               return(
                  <button onClick={()=>{
                    setActiveToTime(el)
                  }} className={`timeBtn G-16-300-Inter ${activeToTime === el ? "activeTime" : ""}`} key={index}>{el}</button>
               )
             })}
           </div>
    
         </div>
  
       </div>
  
  
  
       <div className="deliveryTpeBlock G-flex G-marginB-16">
         <button onClick={()=>{setDeliveryType("Without delivery")}} className={`deliveryType ${deliveryType === "Without delivery" ? "activeDelivery" : ""}`}><TextInView className="G-16-300-Inter G-black" text={t("products.delivery1")}/></button>
         <button onClick={()=>{setDeliveryType("To adress")}} className={`deliveryType ${deliveryType === "To adress" ? "activeDelivery" : ""}`}><TextInView className="G-16-300-Inter G-black" text={t("products.delivery2")}/></button>
         <button onClick={()=>{setDeliveryType("To airport")}} className={`deliveryType ${deliveryType === "To airport" ? "activeDelivery" : ""}`}><TextInView className="G-16-300-Inter G-black" text={t("products.delivery3")}/></button>
       </div>
       
       <p className="total G-24-400-Inter G-black G-marginB-16 no-select"><TextInView text={t("products.total")}/></p>
       <div className="totalBlock G-flex-ACenter-JBetween no-select">
         <p className="G-24-400-Inter G-black"><TextInView text={t("products.totalDays", {totalDays})}/></p>
         <p className="G-24-400-Inter G-black"><TextInView text={"BGN 1500"}/></p>
       </div>
       
     </div>
  )
}

export default RentSettingsBlock