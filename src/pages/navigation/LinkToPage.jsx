import React from "react";
import TextInView from "../../components/TextInView/TextInView";


function LinkToPage ({text}){
  return(
     <div className="linkToPage">
       <p className="text G-20-400-Nexa"><TextInView text={text}/></p>
       <div className="lineBlock">
         <div className="line"></div>
       </div>
     </div>
  )
}

export default LinkToPage