import React, {useRef} from "react";
import arrowLeft from "./images/arrow-narrow-left.svg";
import TextInView from "../TextInView/TextInView";
import {useTranslation} from "react-i18next";

function LoginStep4 ({inputs, setInputs, telNumber, handleLoginStep}){
  const {t, i18n} = useTranslation()
  
  const inputRefs = useRef([]);
  
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    
    // If a digit is entered, focus on the next input field
    if (value !== '' && index < inputs.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (value === '' && index > 0) {
      // If the user deletes a digit, focus on the previous input field
      inputRefs.current[index - 1].focus();
    }
    
    setInputs(newInputs);
  };
  
  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && inputs[index] === '') {
      // If backspace is pressed and the current input is empty, focus on the previous input
      inputRefs.current[index - 1].focus();
    }
  };
  
  
  
  return(
     <div className="loginDialog G-flex-ACenter-JBetween G-flex-Column">
       <button onClick={()=>{
         handleLoginStep(3)
       }} className="backBtn">
         <img src={arrowLeft} alt=""/>
       </button>
     
       <p className="header G-black no-select"><TextInView text={t("login.signup")}/></p>
       <p className="prg G-20-300-Inter G-black"><TextInView className={"G-marginR-8"} text={t("login.prg2")}/>{telNumber}</p>
       <p className="digitPrg"><TextInView text={t("login.prg3")}/></p>
     
       <div className="G-flex digitInputCont">
         {inputs.map((value, index) => (
            <input
               key={index}
               ref={(el) => (inputRefs.current[index] = el)}
               type="text"
               maxLength="1"
               value={value}
               onChange={(e) => handleChange(index, e.target.value)}
               onKeyDown={(e) => handleKeyDown(index, e)}
            />
         ))}
       </div>
     
     
       <p className="termsPrg">
         <TextInView text={t("login.termsPrg2")}/>
         <a href="/termsOfUse" target="_blank"><TextInView text={t("login.termsPrg11")}/></a>,
         <a href="/privacyPolicy" target="_blank"><TextInView text={t("login.termsPrg12")}/></a> <TextInView text={t("login.termsPrg14")}/>
         <a href="/dataProcessingAgreement"><TextInView text={t("login.termsPrg13")}/></a>
       </p>
     </div>
  )
}

export default LoginStep4