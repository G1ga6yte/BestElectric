import React, {useEffect, useState} from "react";
import "./cartCheckoutBlock.scss"
import {useTranslation} from "react-i18next";
import TextInView from "../../components/TextInView/TextInView";
import {Images} from "./images/images";
import PaymentBlock from "../../components/paymentBlock/paymentBlock";
import ProductsItem from "../../components/productsItem/productsItem";
import {Link} from "react-router-dom";

function CartCheckoutBlock (){
  const {t, i18n} = useTranslation();
  const [checkoutStep, setCheckoutStep] = useState(1)
  
  ////////////////// inputs Val /////////////////////
  
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [input3, setInput3] = useState("")
  const [input4, setInput4] = useState("")
  const [input5, setInput5] = useState("")
  const [input6, setInput6] = useState("")
  const [input7, setInput7] = useState("")
  const [input8, setInput8] = useState("")
  const [input9, setInput9] = useState("")
  const [input10, setInput10] = useState("")
  const [input11, setInput11] = useState("")
  
  
  const [saveAddress, setSaveAddress] = useState(true)
  const [paymentType, setPaymentType] = useState("card")
  
  const [itemsCount, setItemsCount] = useState(3)
  useEffect(()=>{
    if (window.innerWidth <993 && window.innerWidth > 665){
      setItemsCount(4)
    } else {
      setItemsCount(3)
    }
  }, [])
  const chargerInfo = [
    {
      name: t("main.settingsName1"),
      icon: Images.targetIcon,
      value: "AC"
    },
    {
      name: t("main.settingsName2"),
      icon: Images.lightningIcon,
      value: "up to 22 kW"
    },
    {
      name: t("main.settingsName3"),
      icon: Images.chargerIcon,
      value: "Type 2"
    },
    {
      name: t("main.settingsName4"),
      icon: Images.plusIcon,
      value: "Wi-Fi, consumption monitoring"
    }
  ]
  
  
  return(
     <div className="CartCheckoutBlock">
       {checkoutStep === 1 &&
          <div className="mainCont G-CContainer G-flex">
            <div className="leftBlock G-marginB-16 G-marginR-16">
              <div className="deliveryAddressBlock G-marginB-32">
                <p className="G-marginB-16 G-24-400-Inter G-black no-select"><TextInView text={t("cart.miniHeader1")}/></p>
                <input value={input1} onChange={(event)=>setInput1(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder1")} type="text"/>
  
                <div className="inputsLine G-flex-ACenter-JBetween">
                  <input value={input2} onChange={(event)=>setInput2(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder2")} type="text"/>
                  <input value={input3} onChange={(event)=>setInput3(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder3")} type="text"/>
                  <input value={input4} onChange={(event)=>setInput4(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder4")} type="text"/>
                  <input value={input5} onChange={(event)=>setInput5(event.target.value)} className="G-input input24 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder5")} type="text"/>
                </div>
  
                <input value={input6} onChange={(event)=>setInput6(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder6")} type="text"/>
  
                <div onClick={()=>setSaveAddress(prev=>!prev)} className="allCheck G-flex-ACenter G-14-400-Inter G-black no-select">
                  <div className={`checkbox ${saveAddress ? "checked" : ""}`}><img src={Images.checkIcon} alt=""/></div>
                  {t("cart.prg3")}
                </div>
              </div>
              
              <div className="recipientBlock G-marginB-32">
                <p className="G-marginB-16 G-24-400-Inter G-black no-select"><TextInView text={t("cart.miniHeader2")}/></p>
                <input value={input7} onChange={(event)=>setInput7(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={"+359"} type="number"/>
  
                <div className="inputsLine G-flex-ACenter-JBetween">
                  <input value={input8} onChange={(event)=>setInput8(event.target.value)} className="G-input input33 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder7")} type="text"/>
                  <input value={input9} onChange={(event)=>setInput9(event.target.value)} className="G-input input33 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder8")} type="text"/>
                  <input value={input10} onChange={(event)=>setInput10(event.target.value)} className="G-input input33 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder9")} type="text"/>
                </div>
  
                <input value={input11} onChange={(event)=>setInput11(event.target.value)} className="G-input input60 G-20-300-Inter G-marginB-16" placeholder={t("cart.placeholder10")} type="text"/>

              </div>
              
              <div className="paymentMethodBlock">
                <p className="G-marginB-16 G-24-400-Inter G-black no-select"><TextInView text={t("cart.miniHeader3")}/></p>
                <label className="G-marginB-16 G-flex-ACenter" htmlFor="card">
                  <input id="card" className="radioInput" type="radio" value="card" checked={paymentType === "card"} onChange={(event)=>{setPaymentType(event.target.value)}}/>
                  <TextInView className={"G-24-400-Inter no-select G-black"} text={t("cart.payment1")}/>
                </label>
                <label className="G-marginB-16 G-flex-ACenter" htmlFor="transfer">
                  <input id="transfer" className="radioInput" type="radio" value="transfer" checked={paymentType === "transfer"} onChange={(event)=>{setPaymentType(event.target.value)}}/>
                  <TextInView className={"G-24-400-Inter no-select G-black"} text={t("cart.payment2")}/>
                </label>
                <label className="G-marginB-56 G-flex-ACenter" htmlFor="cash">
                  <input id="cash" className="radioInput" type="radio" value="cash" checked={paymentType === "cash"} onChange={(event)=>{setPaymentType(event.target.value)}}/>
                  <TextInView className={"G-24-400-Inter no-select G-black"} text={t("cart.payment3")}/>
                </label>

                <PaymentBlock type={paymentType}/>

              </div>

            </div>
     
            <div className="rightBlock">
       
              <div className="mainBlock G-marginB-16">
                <p className="G-16-400-Inter G-black no-select G-marginB-12"><TextInView text={`${t("cart.prg1")} (2)`}/></p>
                <p className="grayText G-16-400-Inter no-select"><TextInView text={t("BGN 17000")}/></p>
                <div className="line"></div>
                
                
                <div className="G-flex-ACenter-JBetween G-marginB-24">
                  <p className="G-16-400-Inter G-black no-select"><TextInView text={t("cart.delivery")}/></p>
                  <p className="G-16-400-Inter G-black no-select"><TextInView text={"BGN 100"}/></p>
                </div>
                
                <p className="totalPrg G-marginB-12 G-16-400-Inter G-black no-select"><TextInView text={t("cart.total")}/></p>
                
                <p className="price G-marginB-24 G-24-400-Inter G-black no-select"><TextInView text={"BGN 17100"}/></p>
                
                <button onClick={()=>{
                  setCheckoutStep(2)
                  window.scrollTo(0, 0)
                }} className="placeOrderBtn G-greenBtn G-white G-20-400-Nexa no-select G-marginB-24"><TextInView text={t("cart.placeOrder")}/></button>
                
                <p className="termsPrg G-14-400-Inter">
                  <TextInView text={t("cart.policy1")}/>
                  <span className="blueText"><TextInView text={t("cart.policy2")}/></span>
                  <TextInView text={t("cart.policy3")}/>
                  <a target="_blank" href="/delivery&payment" className="blueText"><TextInView text={t("cart.policy4")}/></a>
                  <TextInView text={t("cart.policy5")}/>
                  <a target="_blank" href="/privacyPolicy" className="blueText"><TextInView text={t("cart.policy6")}/></a>
                </p>
                
              </div>
       
              <div className="contactBlock">
                <p className="G-marginB-16 G-20-400-Inter G-black no-select"><TextInView text={t("cart.prg2")}/></p>
                <a href={`tel:+359878767780`} className="G-flex-ACenter-JCenter G-16-400-Inter G-black no-select">
                  <img className="G-marginR-8" src={Images.phoneIcon} alt=""/>
                  <TextInView text={"+359 878 767780"}/>
                </a>
              </div>
     
            </div>
          </div>
       }
       {checkoutStep === 2 &&
          <div className="confirmedBlock G-flex-ACenter-JCenter G-flex-Column">
            <p className="miniHeader G-marginB-24 G-24-400-Inter G-black no-select"><TextInView text={t("cart.prg6")}/></p>
            <p className="underHeader G-16-400-Inter G-marginB-40 G-black no-select"><TextInView text={t("cart.prg7")}/></p>
            <Link to="/products" className="continueBtn G-greenBtn G-20-400-Nexa G-white no-select"><TextInView text={t("cart.btn1")}/></Link>
            
            <div className="interestingCont">
              <p className="G-24-400-Inter G-black no-select G-marginB-32"><TextInView text={t("cart.prg8")}/></p>
  
              <div className="itemsBlock G-flex">
                {Array.from({length: itemsCount}, (_, index)=>(
                   <ProductsItem
                      img={Images.chargerImg}
                      name={"Webasto Pure"}
                      available={true}
                      discount={45}
                      price={"BGN 17000"}
                      carInfo={chargerInfo}
                      id={222222}
                   />
                ))}
              </div>
            </div>
            
          </div>
       }
     </div>
  )
}

export default CartCheckoutBlock