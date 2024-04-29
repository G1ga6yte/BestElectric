import React, {useState} from "react";
import "./cartBlock.scss";
import {useTranslation} from "react-i18next";
import TextInView from "../../components/TextInView/TextInView";
import {Images} from "./images/images";
import {Link} from "react-router-dom";

function CartBlock() {
  const {t, i18n} = useTranslation();
  const [render, setRender] = useState(false);
  
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false }
  ]);
  
  const toggleCheckbox = (id) => {
    const newCheckboxes = checkboxes.map(checkbox =>
       checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
    
    const allChecked = newCheckboxes.every(checkbox => checkbox.checked);
    const allUnchecked = newCheckboxes.every(checkbox => !checkbox.checked);
    
    // If all checkboxes are checked, check main checkbox
    if (allChecked) {
      setCheckboxes(newCheckboxes);
    }
    // If all checkboxes are unchecked, uncheck main checkbox
    else if (allUnchecked) {
      setCheckboxes(newCheckboxes);
    }
    // Otherwise, update checkboxes normally
    else {
      setCheckboxes(newCheckboxes);
    }
  };
  
  const toggleAllCheckboxes = () => {
    const allChecked = checkboxes.every(checkbox => checkbox.checked);
    setCheckboxes(
       checkboxes.map(checkbox => ({
         ...checkbox,
         checked: !allChecked
       }))
    );
  };
  
  return (
     <div className="CartBlock G-flex G-CContainer">
       
       <div className="leftBlock">
         <div className="itemBlock G-flex G-marginB-8">
           <div onClick={()=>toggleAllCheckboxes()} className="allCheck G-flex-ACenter G-14-400-Inter G-black no-select">
             <div className={`checkbox ${checkboxes.every(checkbox => checkbox.checked) ? "checked" : ""}`}><img src={Images.checkIcon} alt=""/></div>
             {t("cart.all")}
           </div>
         </div>
         
         {checkboxes.map(checkbox => {
           return (
              <div key={checkbox.id} className="itemBlock G-flex G-marginB-8">
                <div onClick={() => toggleCheckbox(checkbox.id)} className={`checkbox itemCheckbox ${checkbox.checked ? "checked" : ""}`}><img
                   src={Images.checkIcon} alt=""/></div>
                
                <div className="imgBlock" style={{backgroundImage: `url("${Images.itemImg}")`}}></div>
  
                <div className="itemNameBlock">
                  <p className="G-20-400-Inter G-black no-select G-marginB-8"><TextInView text={"Webasto Pure"}/></p>
                  <p className="G-16-400-Inter G-black no-select"><TextInView text={`1 x BGN 17000`}/></p>
                </div>
                
                <div className="G-flew-grow"></div>
  
                <div className="buttonsBlock3 G-flex-ACenter">
                  <button className="addBtn countBtn"><img src={Images.plusIcon} alt=""/></button>
                  <span className="count G-24-400-Inter G-black no-select">1</span>
                  <button className="minusBtn countBtn"><img src={Images.minusIcon} alt=""/></button>
                </div>
  
                <button className="deleteBtn"><img src={Images.deleteIcon} alt=""/></button>


              </div>
           );
         })}
       
       </div>
       
       <div className="rightBlock">
         <p className="marginB12 G-16-400-Inter G-black no-select"><TextInView text={`${t("cart.prg1")} (2)`}/></p>
         <p className="grayText G-16-400-Inter no-select"><TextInView text={"BGN 17000 "}/></p>
         <div className="line"></div>
         <p className="marginB12 G-16-400-Inter no-select G-black"><TextInView text={t("cart.total")}/></p>
         <p className="price G-marginB-24 G-24-400-Inter no-select G-black"><TextInView text={"BGN 17000"}/></p>
         
         <Link to="/cart/checkout" className="G-greenBtn G-flex-ACenter-JCenter">
           <TextInView className={"G-20-400-Nexa G-white no-select G-marginR-16"} text={t("cart.checkout")}/>
           <img src={Images.arrowRight} alt=""/>
         </Link>
       </div>
     
     </div>
  );
}

export default CartBlock;