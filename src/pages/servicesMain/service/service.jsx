import React, {useEffect, useState} from "react";
import "./service.scss"
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import TextInView from "../../../components/TextInView/TextInView";

import solarPanels from "./solarPanels.png"
import chargers from "./chargers.png"
function Service (){
  const {t, i18n} = useTranslation()
  const { id } = useParams()
  
  const data = [
    {
      name: "solarPanels",
      img: solarPanels,
      header: t("service.header1"),
      underHeader: t("service.underHeader1"),
      prg1: t("service.prg11"),
      prg2: t("service.prg12"),
      miniHeader1: t("service.miniHeader11"),
      miniHeader2: t("service.miniHeader12"),
      miniHeader3: t("service.miniHeader13"),
      dotted1: [
        t("service.dotted11"), t("service.dotted12"), t("service.dotted13")
      ],
      dotted2: [
        t("service.dotted14"), t("service.dotted15"), t("service.dotted16")
      ],
      dotted3: [
        t("service.dotted17"), t("service.dotted18"), t("service.dotted19")
      ]
    },
    {
      name: "chargers",
      img:chargers,
      header: t("service.header2"),
      underHeader: t("service.underHeader2"),
      prg1: t("service.prg21"),
      prg2: t("service.prg22"),
      prg3:  t("service.prg23"),
      miniHeader1: t("service.miniHeader21"),
      miniHeader2: t("service.miniHeader22"),
      miniHeader3: t("service.miniHeader23"),
      dotted1: [
        t("service.dotted21"), t("service.dotted22"), t("service.dotted23"), t("service.dotted24")
      ],
      dotted2: [
        t("service.dotted25"), t("service.dotted26"), t("service.dotted27")
      ],
      dotted3: [
        t("service.dotted28"), t("service.dotted29"), t("service.dotted30")
      ]
    }
  ]
  
  const [activeDate, setActiveDate] = useState(data[0])
  
  
  
  
  
  useEffect(()=>{
    data.forEach((el)=>{
      if (el.name === id){
         return setActiveDate(el)
      }
    })
  }, [])
  
  return(
     <div className="Service G-CContainer">
        <p className="header G-header-100 G-black no-select"><TextInView text={activeDate.header}/></p>
       <p className="underHeader G-marginB-56 G-black G-28-300-Nexa no-select"><TextInView text={activeDate.underHeader}/></p>
  
       <img src={activeDate.img} alt=""/>
       
       <p className="prg G-20-300-Inter G-black no-select G-marginB-32"><TextInView text={activeDate.prg1}/></p>
       
       <p className="miniHeader G-20-300-Inter G-black no-select"><TextInView text={activeDate.miniHeader1}/></p>
       <ul>
         {activeDate.dotted1.map((el, index)=>{
           return <li key={index} className="G-20-300-Inter G-black no-select"><TextInView text={el}/></li>
         })}
       </ul>
  
       <p className="miniHeader G-20-300-Inter G-black no-select"><TextInView text={activeDate.miniHeader2}/></p>
       <ul>
         {activeDate.dotted2.map((el, index)=>{
           return <li key={index} className="G-20-300-Inter G-black no-select"><TextInView text={el}/></li>
         })}
       </ul>
  
       {activeDate.prg3 && <p className="prg G-black G-20-300-Inter no-select"><TextInView text={activeDate.prg3}/></p>}
       <p className="miniHeader G-20-300-Inter G-black no-select"><TextInView text={activeDate.miniHeader3}/></p>
       <ul>
         {activeDate.dotted3.map((el, index)=>{
           return <li key={index} className="G-20-300-Inter G-black no-select"><TextInView text={el}/></li>
         })}
       </ul>
       
       
       <p className="prg G-20-300-Inter G-black no-select"><TextInView text={activeDate.prg2}/></p>
  
  
       <div className="consultationBlock G-flex-ACenter-JCenter G-flex-Column">
         <p className="miniHeader G-black no-select"><TextInView text={t("services.prg1")}/></p>
    
         <button className="G-greenBtn G-white G-20-300-Nexa no-select"><TextInView text={t("services.btn1")}/></button>
  
       </div>
       
     </div>
  )
}

export default Service