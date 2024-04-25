import React, {useState} from "react";
import "./selectBlock.scss"
import TextInView from "../TextInView/TextInView";
import arrowDown from "./chevron-down.svg"

function SelectBlock ({name, sorted, handleSelectBlock, handleSortedSettings, placeholder, data, states, index}){
  const [render, setRender] = useState(false)
  
  return(
     <div className="SelectBlock G-marginB-24">
       <p className="selectName"><TextInView text={name}/></p>
       
       <div className="select">
         <div onClick={()=>{
           handleSelectBlock(index)
           setRender(prev=>!prev)
         }} className="selectedBlock G-flex-ACenter-JBetween">
           <p className={`selectedItem ${sorted[index] === "" ? "placeholderItem" : "activeItem"}`}>{sorted[index] === "" ? placeholder : sorted[index]}</p>
           <img style={{transform: `rotateX(${states[index] ? 180 : 0}deg)`}} src={arrowDown} alt=""/>
         </div>
         
         <div style={{display: `${states[index] ? "block" : "none"}`}} className="optionBlock">
           {data.map((el, i)=>{
             return(
              <p onClick={()=>{
                handleSortedSettings(el, index)
                handleSelectBlock(index)
                setRender(prev=>!prev)
              }} className="optionItem G-14-400-Inter G-black no-select" key={i}>{el}</p>
             )
           })}
         </div>
       </div>
       
     </div>
  )
}

export default SelectBlock