import React, {useState} from "react";
import "./bookingServiceBlock.scss"
import TextInView from "../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";
import {useCartContext} from "../../CartContext";
import LoginBlock from "../../components/loginBlock/loginBlock";

function BookingServiceBlock (){
  const {t, i18n} = useTranslation();
  const {authentication, loginStep, setLoginStep} = useCartContext()
  const [errorMessage, setErrorMessage] = useState(true)
  
  return(
     <div className="BookingServiceBlock G-CContainer">
       {errorMessage ?
          <div className="errorMessage G-flex-ACenter-JCenter G-flex-Column">
            <p className="boldPrg G-24-400-Nexa G-black no-select G-marginB-24"><TextInView text={t("booking.prg2")}/></p>
            <p className="prg lightText"><TextInView text={t("booking.prg3")}/></p>
            <div className="numbersBlock G-flex-ACenter-JCenter">
              <p><TextInView text={"+359 878 767780"}/></p>
              <p><TextInView text={"+359 2 4343215"}/></p>
            </div>
          </div>
          :
          <div>
            <p className="header G-black no-select"><TextInView text={t("booking.header")}/></p>
            <p className="prg G-20-300-Inter G-black no-select"><TextInView text={t("booking.prg1")}/></p>
  
            {authentication ?
               <div className="inputsBlock">
                 <input placeholder="+359" className="numberInput" type="number"/>
                 <textarea placeholder={t("booking.placeholder")} name="messageArea" id="messageArea" cols="30" rows="10"></textarea>
                 <button className="sendBtn G-greenBtn G-white G-20-400-Nexa no-select"><TextInView text={t("booking.btn1")}/></button>
               </div> : <LoginBlock loginStep={loginStep} setLoginStep={setLoginStep}/>}
          </div>
       }
     </div>
  )
}

export default BookingServiceBlock