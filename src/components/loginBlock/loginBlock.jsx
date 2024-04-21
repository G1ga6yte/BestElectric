import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import LoginStep1 from "./loginStep1";
import LoginStep2 from "./loginStep2";
import LoginStep3 from "./loginStep3";
import LoginStep4 from "./loginStep4";

function LoginBlock ({loginStep, setLoginStep}){
  const {t, i18n} = useTranslation()
  
  const [telNumber, setTelNumber] = useState("")
  const [inputs, setInputs] = useState(['', '', '', '', '', '']);
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  
  function handleTelNumber (e){
    setTelNumber("+" + e.target.value)
  }
  
  
  
  
  
  return(
       loginStep === 1 ? <LoginStep1 handleLoginStep={setLoginStep} telNumber={telNumber} handleTelNumber={handleTelNumber} />
          : loginStep === 2 ? <LoginStep2 telNumber={telNumber} inputs={inputs} setInputs={setInputs} handleLoginStep={setLoginStep}/>
             : loginStep === 3 ? <LoginStep3 handleLoginStep={setLoginStep} name={name} setName={setName} surname={surname} setSurname={setSurname} telNumber={telNumber} handleTelNumber={handleTelNumber}/>
                : loginStep === 4 ? <LoginStep4 telNumber={telNumber} inputs={inputs} setInputs={setInputs} handleLoginStep={setLoginStep}/> : <div/>
  )
}

export default LoginBlock