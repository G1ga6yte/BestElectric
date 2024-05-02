import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import "./profileMain.scss"
import CarReservationBlock from "./carReservationBlock/carReservationBlock";
import RecentOrderBlock from "./recentOrderBlock/recentOrderBlock";
import {Images} from "./images/images";

function ProfileMain (){
  const {t, i18n} = useTranslation();
  
  const orderDeliveredDate = {
    items : [
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      }
    ],
    total : function (){
      let total = 0
      this.items.map((el)=>{
        total = total+el.price
      })
      return total
    },
    status: "Delivered"
  }
  
  const orderInProcessDate = {
    items : [
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      }
    ],
    total : function (){
      let total = 0
      this.items.map((el)=>{
        total = total+el.price
      })
      return total
    },
    status: "In process"
  }
  
  const orderCancelledDate = {
    items : [
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      }
    ],
    total : function (){
      let total = 0
      this.items.map((el)=>{
        total = total+el.price
      })
      return total
    },
    status: "Cancelled"
  }
  
  const [inputVal1, setInputVal1] = useState("") // Name
  const [inputVal2, setInputVal2] = useState("") // Surname
  const [inputVal3, setInputVal3] = useState("") // Email
  const [inputVal4, setInputVal4] = useState("") // currentPass
  const [inputVal5, setInputVal5] = useState("") // newPass
  const [inputVal6, setInputVal6] = useState("") // newPass2
  
  
  return(
     <div className="ProfileMain">
       <div className="G-flex-ACenter-JBetween G-marginB-32">
         <p className="miniHeader G-24-400-Inter G-black no-select"><TextInView text={t("profile.miniHeader1")}/></p>
         <p className="textUnderlined G-16-400-Inter G-black no-select"><TextInView text={t("profile.archive")}/></p>
       </div>
       
        <CarReservationBlock/>
       
       <div className="G-flex-ACenter-JBetween G-marginB-32">
         <p className="miniHeader G-24-400-Inter G-black no-select"><TextInView text={t("profile.miniHeader2")}/></p>
         <p className="textUnderlined G-16-400-Inter G-black no-select"><TextInView text={t("profile.allOrders")}/></p>
       </div>
       
       <div className="ordersCont G-marginB-40">
           <div className="ordersBlock G-flex">
             <RecentOrderBlock date={orderDeliveredDate}/>
             <RecentOrderBlock date={orderInProcessDate}/>
             <RecentOrderBlock date={orderCancelledDate}/>
             <RecentOrderBlock date={orderDeliveredDate}/>
             <RecentOrderBlock date={orderDeliveredDate}/>
    
    
    
           </div>
         </div>
       
       <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-32"><TextInView text={t("profile.miniHeader3")}/></p>
       
       <div className="inputsCont G-marginB-40">
         <div className="G-flex">
           <input className="G-input G-marginR-16 G-marginB-16" type="text" value={inputVal1} onChange={(event)=>setInputVal1(event.target.value)} placeholder={t("profile.placeholder1")} />
           <input className="G-input G-marginR-16 G-marginB-16" type="text" value={inputVal2} onChange={(event)=>setInputVal2(event.target.value)} placeholder={t("profile.placeholder2")} />
         </div>
         <input className="G-input G-marginR-16 G-marginB-16" type="email" value={inputVal3} onChange={(event)=>setInputVal3(event.target.value)} placeholder={t("profile.placeholder3")} />
       </div>
       
       <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-32"><TextInView text={t("profile.miniHeader4")}/></p>
  
       <div className="inputsCont G-marginB-40">
         <input className="G-input G-marginR-16 G-marginB-16" type="password" value={inputVal4} onChange={(event)=>setInputVal4(event.target.value)} placeholder={t("profile.placeholder4")} />
         <div className="G-flex">
           <input className="G-input G-marginR-16 G-marginB-16" type="password" value={inputVal5} onChange={(event)=>setInputVal5(event.target.value)} placeholder={t("profile.placeholder5")} />
           <input className="G-input G-marginR-16 G-marginB-16" type="password" value={inputVal6} onChange={(event)=>setInputVal6(event.target.value)} placeholder={t("profile.placeholder6")} />
         </div>
       </div>



     </div>
  )
}

export default ProfileMain