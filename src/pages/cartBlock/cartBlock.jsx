import React, {useState} from "react";
import "./cartBlock.scss";
import {useTranslation} from "react-i18next";
import TextInView from "../../components/TextInView/TextInView";
import {Images} from "./images/images";
import {Link} from "react-router-dom";
import {useCartContext} from "../../CartContext";

function CartBlock() {
  const {t, i18n} = useTranslation();
  const {addToCart, cart, deleteFromCart, increaseCount, decreaseCount, toggleCheckbox, toggleAllCheckboxes} = useCartContext()
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false }
  ]);
  
  let totalPrice = 0
  let totalCount = 0
  cart.map((el)=>{
    
    if (el.checked){
      totalPrice = totalPrice + (el.count * el.price)
      totalCount = totalCount + el.count
    }
    
  })
  
  
  return (
     <div className="CartBlock G-flex G-CContainer">
       
       <div className="leftBlock">
         <div className="itemBlock G-flex G-marginB-8">
           <div onClick={()=>toggleAllCheckboxes()} className="allCheck G-flex-ACenter G-14-400-Inter G-black no-select">
             <div className={`checkbox ${cart.every(item => item.checked) ? "checked" : ""}`}><img src={Images.checkIcon} alt=""/></div>
             {t("cart.all")}
           </div>
         </div>
  
         {cart.map((el, index)=>{
           return(
              <div key={index} className="itemBlock G-flex G-marginB-8">
                <div onClick={() => toggleCheckbox(index)} className={`checkbox itemCheckbox ${el.checked ? "checked" : ""}`}><img
                   src={Images.checkIcon} alt=""/></div>
     
                <div className="imgBlock" style={{backgroundImage: `url("${el.img}")`}}></div>
     
                <div className="itemNameBlock">
                  <p className="G-20-400-Inter G-black no-select G-marginB-8"><TextInView text={el.name}/></p>
                  <p className="G-16-400-Inter G-black no-select"><TextInView text={`${el.count}x BGN ${el.price}`}/></p>
                </div>
     
                <div className="G-flew-grow"></div>
     
                <div className="buttonsBlock3 G-flex-ACenter">
                  <button onClick={()=>increaseCount(index)} className="addBtn countBtn"><img src={Images.plusIcon} alt=""/></button>
                  <span className="count G-24-400-Inter G-black no-select">{el.count}</span>
                  <button onClick={()=>decreaseCount(index)} className="minusBtn countBtn"><img src={Images.minusIcon} alt=""/></button>
                </div>
     
                <button onClick={()=>deleteFromCart(index)} className="deleteBtn"><img src={Images.deleteIcon} alt=""/></button>
   
   
              </div>
           )
         })}
         
       
       </div>
       
       <div className="rightBlock">
         <p className="marginB12 G-16-400-Inter G-black no-select"><TextInView text={`${t("cart.prg1")} (${totalCount})`}/></p>
         <p className="grayText G-16-400-Inter no-select"><TextInView text={`BGN ${totalPrice}`}/></p>
         <div className="line"></div>
         <p className="marginB12 G-16-400-Inter no-select G-black"><TextInView text={t("cart.total")}/></p>
         <p className="price G-marginB-24 G-24-400-Inter no-select G-black"><TextInView text={`BGN ${totalPrice}`}/></p>
         
         <Link to="/cart/checkout" className="G-greenBtn G-flex-ACenter-JCenter">
           <TextInView className={"G-20-400-Nexa G-white no-select G-marginR-16"} text={t("cart.checkout")}/>
           <img src={Images.arrowRight} alt=""/>
         </Link>
       </div>
     
     </div>
  );
}

export default CartBlock;