import React, {useState} from "react";
import {Images} from "../../pages/productsCont/carRentProgress/image/images";
import TextInView from "../TextInView/TextInView";
import "./paymentBlock.scss"
import {useTranslation} from "react-i18next";

function PaymentBlock ({type}){
  const {t, i18n} = useTranslation();
  
  const [formattedValue, setFormattedValue] = useState("");
  const formatBankAccount = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    const formattedInput = input.replace(/(\d{4})/g, "$1 ").trim();
    setFormattedValue(formattedInput);
  };
  
  const [cvcValue, setCvcValue] = useState("");
  const handleCVCChange = (event) => {
    const cleanedValue = event.target.value.replace(/[^\d]/g, "");
    
    const limitedValue = cleanedValue.slice(0, 3);
    
    setCvcValue(limitedValue);
  };
  
  const [expiryValue, setExpiryValue] = useState("");
  const handleExpiryChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 2) {
      const month = Math.min(parseInt(input.slice(0, 2), 10), 12);
      const year = input.slice(2, 4);
      input = `${String(month).padStart(2, "0")}/${year}`;
    }
    setExpiryValue(input);
  };
  
  function CopyBtn ({value}){
    const [copied, setCopied] = useState(false)
    const copyToClipboard = () => {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true)
      setTimeout(()=>{
        setCopied(false)
      }, 1000)
    };
    
    return(
       <button className="copyBtn" onClick={copyToClipboard}><img src={Images.copyIcon} alt=""/>
        <span className={`copiedText ${copied ? "copiedTextAnim" : ""}`}>{t("cart.copied")}</span>
       </button>
    )
  }
  const [invoiceCheckbox, setInvoiceCheckbox] = useState(true)
  const [transferRadioType, setTransferRadioType] = useState("legal")
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [input3, setInput3] = useState("")
  const [input4, setInput4] = useState("")
  return(
     type === "card" &&
     <div className="cardPaymentBlock">
     
       <div className="inputsCont G-flex G-marginB-56">
         <div className="inputBlock">
           <span className="placeholder">{t("rent.placeholder2")}</span>
           <input
              type="text"
              className="inputForCard16Num"
              value={formattedValue}
              maxLength={19}
              placeholder="0123 4567 8910 1112"
              onChange={formatBankAccount}
              inputMode="numeric"
           />
         </div>
       
         <div className="inputBlock">
           <span className="placeholder">{t("rent.placeholder3")}</span>
           <input
              type="password"
              value={cvcValue}
              maxLength={3}
              pattern="\d{3}"
              placeholder="123"
              onChange={handleCVCChange}
              inputMode="numeric"
           />
         </div>
       
         <div className="inputBlock">
           <span className="placeholder">{t("rent.placeholder4")}</span>
           <input
              type="text"
              value={expiryValue}
              maxLength={5}
              placeholder="MM/YY"
              onChange={handleExpiryChange}
           />
         </div>
     
     
     
       </div>
     
       <div className="paymentPrgBlock G-flex">
         <img src={Images.shieldIcon} className="G-marginR-8" alt=""/>
         <p className="paymentPrg G-14-400-Inter G-black no-select"><TextInView text={t("rent.prg3")}/></p>
       </div>
   
     </div>
     ||
     type === "transfer" &&
     <div className="transferBlock">
       <p className="G-20-400-Inter G-black G-marginB-16 no-select"><TextInView text={t("cart.prg4")}/></p>
       
       <div className="transferTypesBlock G-marginB-16">
         <div className="G-flex-ACenter G-marginB-8 G-16-400-Inter G-black no-select"><TextInView text={t("cart.transferType1")}/> <span className="value">-------</span> <CopyBtn value={"-------"}/></div>
         <div className="G-flex-ACenter G-marginB-8 G-16-400-Inter G-black no-select"><TextInView text={t("cart.transferType2")}/> <span className="value">---------</span> <CopyBtn value={"---------"}/></div>
         <div className="G-flex-ACenter G-marginB-8 G-16-400-Inter G-black no-select"><TextInView text={t("cart.transferType3")}/> <span className="value">--------</span> <CopyBtn value={"--------"}/></div>
         <div className="G-flex-ACenter G-marginB-8 G-16-400-Inter G-black no-select"><TextInView text={t("cart.transferType4")}/> <span className="value">----------</span> <CopyBtn value={"----------"}/></div>
         <div className="G-flex-ACenter G-16-400-Inter G-black no-select"><TextInView text={t("cart.transferType5")}/> <span className="value">------</span> <CopyBtn value={"------"}/></div>
       </div>
  
  
       <div onClick={()=>setInvoiceCheckbox(prev=>!prev)} className="allCheck G-flex-ACenter G-14-400-Inter G-black no-select G-marginB-16">
         <div className={`checkbox ${invoiceCheckbox ? "checked" : ""}`}><img src={Images.checkIcon} alt=""/></div>
         {t("cart.prg3")}
       </div>
       
       <div className="radioBlock G-flex-ACenter">
         <label className="G-marginB-16 G-flex-ACenter G-marginR-16" htmlFor="legal">
           <input id="legal" className="radioInput" type="radio" value="legal" checked={transferRadioType === "legal"} onChange={(event)=>{setTransferRadioType(event.target.value)}}/>
           <TextInView className={"G-14-400-Inter no-select G-black"} text={t("cart.transferRadio1")}/>
         </label>
         <label className="G-marginB-16 G-flex-ACenter" htmlFor="individual">
           <input id="individual" className="radioInput" type="radio" value="individual" checked={transferRadioType === "individual"} onChange={(event)=>{setTransferRadioType(event.target.value)}}/>
           <TextInView className={"G-14-400-Inter no-select G-black"} text={t("cart.transferRadio2")}/>
         </label>
       </div>
  
       <input value={input1} onChange={(event)=>setInput1(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder11")} type="text"/>
       <input value={input2} onChange={(event)=>setInput2(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder12")} type="text"/>
       <input value={input3} onChange={(event)=>setInput3(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder13")} type="text"/>
       <input value={input4} onChange={(event)=>setInput4(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder14")} type="text"/>




     </div>
    
  )
}

export default PaymentBlock