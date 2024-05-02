import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import "./profileAddresses.scss"
import TextInView from "../../../components/TextInView/TextInView";
import {Images} from "./images/images";

function ProfileAddresses (){
  const {t, i18n} = useTranslation();
  const [inputsCont, setInputsCont] = useState("home")
  const [addressType, setAddressType] = useState("legal")
  
  const [addressesDate, setAddressesDate] = useState([
     {
       name: "Name",
       surname: "Surname",
       address: "Hristo Botev Str. 14, Sofia, Bulgaria"
     }
  ])
  
  const [paymentCheckbox, setPaymentCheckbox] = useState(true)
  const [deliveryCheckbox, setDeliveryCheckbox] = useState(true)
  
  const [paymentsDate, setPaymentsDate] = useState([
    {
      name: "Name",
      surname: "Surname",
      cardImg: Images.cardImg,
      number: "0000000000000000",
      defaultChecked: true
    },
    {
      name: "Name",
      surname: "Surname",
      cardImg: Images.cardImg,
      number: "0000000000000000",
      defaultChecked: false
    }
  ])
  
  const handleCheckboxClick = (index) => {
    const updatedPaymentsDate = paymentsDate.map((item, i) => {
      if (i === index) {
        return { ...item, defaultChecked: !item.defaultChecked };
      } else {
        return { ...item, defaultChecked: false };
      }
    });
    
    setPaymentsDate(updatedPaymentsDate);
  };
  
  const formatCardNumber = (number) => {
    const firstFour = number.substring(0, 4);
    const lastFour = number.substring(number.length - 4);
    const maskedPortion = '*'.repeat(number.length - 8);
    return `${firstFour} ${maskedPortion} ${lastFour}`;
  };
  
  const [input1, setInput1] = useState("") // number
  const [input2, setInput2] = useState("") // email
  const [input3, setInput3] = useState("") // name
  const [input4, setInput4] = useState("") // surname
  const [input5, setInput5] = useState("") // additional phone number
  const [input6, setInput6] = useState("") // city, street, house number
  const [input7, setInput7] = useState("") // postal code
  const [input8, setInput8] = useState("") // entrance
  const [input9, setInput9] = useState("") // floor
  const [input10, setInput10] = useState("") // apartment
  const [input11, setInput11] = useState("") // intercom
  const [input12, setInput12] = useState("") // comment
  const [input13, setInput13] = useState("") // company name
  const [input14, setInput14] = useState("") // EIC
  const [input15, setInput15] = useState("") // DDS no
  const [input16, setInput16] = useState("") // Mall
  
  
  return(
     <div className="ProfileAddresses">
       {inputsCont === "home" &&
        <div>
          <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-32"><TextInView text={t("address.miniHeader1")}/></p>

          <div className="addressesCont G-flex G-flex-Column G-marginB-40">
            {addressesDate.map((el, index)=>{
              return(
                 <div key={index} className="addressBlock G-flex-ACenter-JBetween G-marginB-24">
                    <div className="G-flex G-flex-Column G-justify-between">
                      <TextInView className="G-14-300-Inter marginB40Tablet" text={t("address.prg1")}/>
                      <div className="G-flex-Column marginB16Tablet">
                        <TextInView text={`${el.name} ${el.surname}`} className={"G-14-400-Inter G-black no-select G-marginB-8"}/>
                        <TextInView text={el.address} className={"G-14-400-Inter G-black no-select"}/>
                      </div>
                    </div>
                   
                   <div className="checkboxBlock G-flex G-flex-Column G-align-center G-justify-between">
                     <TextInView className={"G-14-300-Inter"} text={t("address.prg2")}/>
                     <div onClick={()=>setPaymentCheckbox(prev=>!prev)} className="allCheck G-flex-ACenter G-14-400-Inter G-black no-select">
                       <div className={`checkbox ${paymentCheckbox ? "checked" : ""}`}><img src={Images.checkIcon} alt=""/></div>
                     </div>
                   </div>
  
                   <div className="checkboxBlock G-flex G-flex-Column G-align-center G-justify-between">
                     <TextInView className={"G-14-300-Inter"} text={t("address.prg3")}/>
                     <div onClick={()=>setDeliveryCheckbox(prev=>!prev)} className="allCheck G-flex-ACenter G-14-400-Inter G-black no-select">
                       <div className={`checkbox ${deliveryCheckbox ? "checked" : ""}`}><img src={Images.checkIcon} alt=""/></div>
                     </div>
                   </div>
                   
                   <div className="G-flex G-justify-between">
                     <button onClick={()=>{setInputsCont("edit")}} className="actionBtn"><img src={Images.editIcon} alt=""/></button>
                     <button className="actionBtn"><img src={Images.deleteIcon} alt=""/></button>
                   </div>
                 </div>
              )
            })}
            
            <button onClick={()=>{setInputsCont("add")}} className="addNewBtn"><TextInView className="G-20-400-Nexa G-black no-select" text={t("address.btn1")}/></button>
          </div>
          
          <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-32"><TextInView text={t("address.miniHeader2")}/></p>

          <div className="cardsCont G-flex G-marginB-16">
            {paymentsDate.map((el, index)=>{
              return(
                 <div key={index} className="cardBlock G-flex G-marginR-16">
                   <div className="cardImg G-marginR-8">VISA</div>
                   <div>
                     <div className="G-flex G-marginB-8">
                       <TextInView text={`${el.name} ${el.surname}`} className={"G-14-400-Inter G-black no-select G-marginR-16"}/>
                       <button className="actionBtn"><img src={Images.deleteIcon} alt=""/></button>
                     </div>
                     
                     <div className="G-flex-ACenter">
                       <div onClick={()=>handleCheckboxClick(index)} className="allCheck G-flex-ACenter G-14-400-Inter G-black no-select G-marginR-8">
                         <div className={`checkbox ${el.defaultChecked ? "checked" : ""}`}><img src={Images.checkIcon} alt=""/></div>
                       </div>
                       <TextInView className={"G-14-400-Inter G-black no-select"} text={formatCardNumber(el.number)}/>
                       
                     </div>
                     
                   </div>
                 </div>
              )
            })}
          </div>
          
          <div className="addressesCont buttonCont">
            <button className="addNewBtn "><TextInView className="G-20-400-Nexa G-black no-select" text={t("address.btn2")}/></button>
          </div>
          
        </div>
       }
  
       {(inputsCont === "edit" || inputsCont === "add") &&
          <div className="InputsCont">
            {
              inputsCont === "edit" ?
                 <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-16"><TextInView text={t("address.miniHeader3")}/></p>
                 :
                 <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-16"><TextInView text={t("address.miniHeader7")}/></p>
            }
            
            <div className="inputsBlock G-flex G-marginB-32">
              <label className="G-marginB-16 G-flex-ACenter G-marginR-16" htmlFor="legal">
                <input id="legal" className="radioInput" type="radio" value="legal" checked={addressType === "legal"} onChange={(event)=>{setAddressType(event.target.value)}}/>
                <TextInView className={"G-24-400-Inter no-select G-black"} text={t("address.address1")}/>
              </label>
              <label className="G-marginB-16 G-flex-ACenter" htmlFor="individual">
                <input id="individual" className="radioInput" type="radio" value="individual" checked={addressType === "individual"} onChange={(event)=>{setAddressType(event.target.value)}}/>
                <TextInView className={"G-24-400-Inter no-select G-black"} text={t("address.address2")}/>
              </label>
            </div>
            
            <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-16"><TextInView text={t("address.miniHeader4")}/></p>
            
            <div className="G-marginB-16">
              <input value={input1} onChange={(event)=>setInput1(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder="+359" type="number"/>
              <div className="G-flex-ACenter-JBetween G-flex-wrap">
                <input value={input2} onChange={(event)=>setInput2(event.target.value)} className="G-input input33 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder2")} type="text"/>
                <input value={input3} onChange={(event)=>setInput3(event.target.value)} className="G-input input33 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder3")} type="text"/>
                <input value={input4} onChange={(event)=>setInput4(event.target.value)} className="G-input input33 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder4")} type="text"/>
              </div>
              <input value={input5} onChange={(event)=>setInput5(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder5")} type="text"/>
            </div>
            
            <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-16"><TextInView text={t("address.miniHeader5")}/></p>
  
            <div className="G-marginB-16">
              <div className="G-flex-ACenter-JBetween G-flex-wrap">
                <input value={input6} onChange={(event)=>setInput6(event.target.value)} className="G-input input49 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder6")} type="text"/>
                <input value={input7} onChange={(event)=>setInput7(event.target.value)} className="G-input input49 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder7")} type="text"/>
              </div>
              <div className="G-flex-ACenter-JBetween G-flex-wrap">
                <input value={input8} onChange={(event)=>setInput8(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder8")} type="text"/>
                <input value={input9} onChange={(event)=>setInput9(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder9")} type="text"/>
                <input value={input10} onChange={(event)=>setInput10(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder10")} type="text"/>
                <input value={input11} onChange={(event)=>setInput11(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder11")} type="text"/>

              </div>
              <input value={input12} onChange={(event)=>setInput12(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder12")} type="text"/>
            </div>
  
            {
              addressType === "legal" &&
               <div>
                 <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-16"><TextInView text={t("address.miniHeader6")}/></p>
                 
                 <div className="G-marginB-16 G-flex-wrap">
                   <input value={input13} onChange={(event)=>setInput13(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder13")} type="text"/>
                   <input value={input14} onChange={(event)=>setInput14(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder14")} type="text"/>
                   <input value={input15} onChange={(event)=>setInput15(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder15")} type="text"/>
                   <input value={input16} onChange={(event)=>setInput16(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("address.placeholder16")} type="text"/>

                 </div>
                 
               </div>
            }
            
            <button onClick={()=>{setInputsCont("home")}} className="G-greenBtn G-white G-20-400-Nexa G-marginB-56"><TextInView text={t("address.btn3")}/></button>
            


          </div>
       }
     </div>
  )
}

export default ProfileAddresses