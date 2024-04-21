import React, {useState} from "react";
import {useCartContext} from "../../CartContext";
import LoginBlock from "./loginBlock";
import "./loginBlock.scss"

function LoginDialog (){
  const {loginBlock, setLoginBlock} = useCartContext()
  const [loginStep, setLoginStep] = useState(1)
  
  
  return(
     loginBlock &&
     <div  className="LoginBlock">
       <div onClick={()=>{
         setLoginBlock(false)
         setLoginStep(1)
       }} className="backgroundBlock"></div>
       <LoginBlock loginStep={loginStep} setLoginStep={setLoginStep}/>
     </div>
  )
}

export default LoginDialog