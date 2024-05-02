import React, {useState} from "react";
import "./carRentProgress.scss"
import {useCartContext} from "../../../CartContext";
import {useTranslation} from "react-i18next";
import LoginBlock from "../../../components/loginBlock/loginBlock";
import TextInView from "../../../components/TextInView/TextInView";
import {Link} from "react-router-dom";
import {Images} from "./image/images";
import PaymentBlock from "../../../components/paymentBlock/paymentBlock";

function CarRentProgress (){
  const {t, i18n} = useTranslation();
  const {authentication, loginStep, setLoginStep} = useCartContext()
  const [rentStep, setRentStep] = useState(1)
  
  ////////////step1 //////////////////////
  const [licenseNumber, setLicenseNumber] = useState("")
  const [licenseFaceImg, setLicenseFaceImg] = useState(null)
  const [licenseBackImg, setLicenseBackImg] = useState(null)
  
  function handleLicenseFaceImg (e){
    let imgFile = e.target.files[0];
    if (imgFile) {
      let imgBlob = new Blob([imgFile], { type: imgFile.type });
      setLicenseFaceImg(URL.createObjectURL(imgBlob));
    }
  }
  
  function handleLicenseBackImg (e){
    let imgFile = e.target.files[0];
    if (imgFile) {
      let imgBlob = new Blob([imgFile], { type: imgFile.type });
      setLicenseBackImg(URL.createObjectURL(imgBlob));
    }
  }
  
  const [paymentType, setPaymentType] = useState("card")
  
  
  
  return(
     <div className="CarRentProgress G-CContainer">
       {authentication ?
        <div className="rentCarSteps">
          {rentStep === 1 &&
             <div className="documentsBlock">
               
               <div className="headerBlock G-marginB-32">
                 <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-8"><TextInView text={t("rent.miniHeader1")}/></p>
                 <p className="underHeader G-16-300-Inter G-black no-select"><TextInView text={t("rent.underHeader11")}/> <Link to="/privacyPolicy"><TextInView text={t("rent.privacy")}/></Link> <TextInView text={t("rent.underHeader12")}/></p>
               </div>
  
               <input className="input G-marginB-32 G-20-300-Inter" value={licenseNumber} onChange={(event)=>setLicenseNumber(event.target.value)} placeholder={t("rent.placeholder1")}  type="number"/>
               
               <div className="photosCont G-flex G-marginB-32">
                <label htmlFor="faceImg" className="photoBlock G-marginR-16">
                  <div style={{backgroundImage: `url("${Images.faceImg}")`}} className="placeholderImg"></div>
                  <input id="faceImg" type="file" accept="image/*" onChange={handleLicenseFaceImg}/>
                  {licenseFaceImg &&
                    <div className="image" style={{backgroundImage: `url("${licenseFaceImg}")`}}></div>
                  }
                </label>
  
                 <label htmlFor="backImg" className="photoBlock">
                   <div style={{backgroundImage: `url("${Images.backImg}")`}} className="placeholderImg"></div>
                   <input id="backImg" type="file" accept="image/*" onChange={handleLicenseBackImg}/>
                   {licenseBackImg &&
                      <div className="image" style={{backgroundImage: `url("${licenseBackImg}")`}}></div>
                   }
                 </label>
               </div>
  
               <button onClick={()=>setRentStep(2)} className="submitBtn G-greenBtn G-white G-20-400-Nexa no-select G-marginB-32"><TextInView text={t("rent.btn1")}/></button>
               
             </div>
          }
          {(rentStep === 2 || rentStep === 3) &&
            <div className="reservationBlock">
              <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-40"><TextInView text={t("rent.miniHeader2")}/></p>
              
              <div className="locationsCont G-flex G-marginB-40">
                <div className="locationBlock">
                  <p className="G-16-300-Inter G-black no-select G-marginB-8"><TextInView text={`${t("rent.pickUpLocation")} - Sofia Airport area`}/></p>
                  <div className="G-flex G-marginB-8">
                    <img src={Images.calendarIcon} className="G-marginR-8" alt=""/>
                    <p className="G-16-400-Inter G-black no-select G-marginR-8"><TextInView text={"22.05.2024"}/></p>
                    <img src={Images.clockIcon} className="G-marginR-8" alt=""/>
                    <p className="G-16-400-Inter G-black no-select"><TextInView text={"12:00"}/></p>
                  </div>
                  <div className="mapBlock" style={{backgroundImage: `url("${Images.mapImg}")`}}></div>
                </div>
  
                <div className="locationBlock">
                  <p className="G-16-300-Inter G-black no-select G-marginB-8"><TextInView text={`${t("rent.dropOff")} - Sofia Airport`}/></p>
                  <div className="G-flex G-marginB-8">
                    <img src={Images.calendarIcon} className="G-marginR-8" alt=""/>
                    <p className="G-16-400-Inter G-black no-select G-marginR-8"><TextInView text={"23.05.2024"}/></p>
                    <img src={Images.clockIcon} className="G-marginR-8" alt=""/>
                    <p className="G-16-400-Inter G-black no-select"><TextInView text={"12:00"}/></p>
                  </div>
                  <div className="mapBlock" style={{backgroundImage: `url("${Images.mapImg}")`}}></div>
                </div>
              </div>
              
              <div className="pricesCont G-marginB-40">
                <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-24"><TextInView text={t("rent.miniHeader3")}/></p>
                <p className="daysPrg G-24-400-Inter G-black no-select G-marginB-56"><TextInView text={`2 ${t("rent.days")}`}/></p>
                
                <div className="G-flex-ACenter-JBetween G-marginB-56">
                  <p className="priceType G-16-400-Inter G-black no-select"><TextInView text={t("rent.priceType1")}/></p>
                  <p className="price G-24-400-Inter G-black no-select"><TextInView text={"BGN 1716"}/></p>
                </div>
  
                <div className="G-flex-ACenter-JBetween G-marginB-56">
                  <p className="priceType G-16-400-Inter G-black no-select"><TextInView text={t("rent.priceType2")}/></p>
                  <p className="price G-24-400-Inter G-black no-select"><TextInView text={"BGN 600"}/></p>
                </div>
  
                <div className="G-flex-ACenter-JBetween G-marginB-56">
                  <p className="priceType G-16-400-Inter G-black no-select"><TextInView text={t("rent.priceType3")}/></p>
                  <p className="price G-24-400-Inter G-black no-select"><TextInView text={"BGN 340"}/></p>
                </div>
  
                <div className="totalPriceBlock G-flex-ACenter-JBetween">
                  <p className="priceType G-16-400-Inter G-black no-select"><TextInView text={t("rent.priceType4")}/></p>
                  <p className="price G-24-400-Inter G-black no-select"><TextInView text={"BGN 2656"}/></p>
                </div>
              </div>
  
              {rentStep === 3 &&
                 <div className="PaymentType G-marginB-40">
                   <label className="G-marginB-16 G-flex-ACenter" htmlFor="card">
                     <input id="card" className="radioInput" type="radio" value="card" checked={paymentType === "card"} onChange={(event)=>{setPaymentType(event.target.value)}}/>
                     <TextInView className={"G-24-400-Inter no-select G-black"} text={t("rent.payment1")}/>
                   </label>
                   <label className="G-marginB-56 G-flex-ACenter" htmlFor="cash">
                     <input id="cash" className="radioInput" type="radio" value="cash" checked={paymentType === "cash"} onChange={(event)=>{setPaymentType(event.target.value)}}/>
                     <TextInView className={"G-24-400-Inter no-select G-black"} text={t("rent.payment2")}/>
                   </label>
     
                   <PaymentBlock type={paymentType}/>
   
                 </div>
              }
              
              <button onClick={()=>{
                if (rentStep === 3){
                  window.scrollTo(0, 0);
                }
                setRentStep(prev=>prev+1)
              }} className="reservationBtn G-greenBtn G-20-400-Nexa G-white no-select"><TextInView text={t("rent.btn2")}/></button>
              
            </div>
          }
          {rentStep === 4 &&
            <div className="endBlock G-flex-ACenter-JCenter">
              <p className="G-marginB-24 G-24-400-Inter G-black no-select"><TextInView text={t("rent.prg4")}/></p>
              <p className="G-marginB-40 G-16-400-Inter G-black no-select"><TextInView text={t("rent.prg5")}/></p>
              <Link to="/products" className="continueBtn G-greenBtn G-white G-20-400-Nexa no-select"><TextInView text={t("rent.btn3")}/></Link>
            </div>
          }
        </div>
          :
          <LoginBlock loginStep={loginStep} setLoginStep={setLoginStep}/>
       }
     </div>
  )
}

export default CarRentProgress