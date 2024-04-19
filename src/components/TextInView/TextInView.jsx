import React from "react";
import {useInView} from "react-intersection-observer";

function TextInView ({text, className}){
  
  const {ref: myRef1, inView: event1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  return(
     <span ref={myRef1} className={`${event1 ? "G-isInView" : ""} ${className ? className : ""}`}>
       {text}
     </span>
  )
}

export default TextInView