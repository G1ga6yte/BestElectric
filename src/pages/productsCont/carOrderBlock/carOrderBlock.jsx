import React, {useState} from "react";
import "./carOrderBlock.scss"
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";

import settingsIcon from "./images/settings-04.svg"
import img1 from "./images/orderImg.png"
import carImg1 from "./images/image 16.png"
import ProductsItem from "../../../components/productsItem/productsItem";
import {Images} from "../../homeMain/homeRentCar/images/images";
import SelectBlock from "../../../components/selectBlock/selectBlock";
import {RentImages} from "../rentCarBlock/images/images";




function CarOrderBlock (){
  const {t, i18n} = useTranslation();
  const [sortBlockActive, setSortBlockActive] = useState(false)
  const [sortBlockVisible, setSortBlockVisible] = useState(false)
  const [itemsShowCount, setItemsShowCount] = useState(12)
  const [render, setRender] = useState(false)
  const carInfo = [
    {
      name: t("main.desc1"),
      icon: Images.speedIcon,
      value: "13.5"
    },
    {
      name: t("main.desc2"),
      icon: Images.batteryIcon,
      value: "400"
    },
    {
      name: t("main.desc3"),
      icon: Images.car4Icon,
      padding: 5,
      value: t("main.front")
    },
    {
      name: t("main.desc4"),
      icon: Images.powerIcon,
      value: t("main.electro")
    }
  ]
  
  function handleCloseSortBlock(){
    setSortBlockActive(false)
    setTimeout(()=>{
      setSortBlockVisible(false)
    }, 1000)
  }
  
  function handleShowMore(){
    setItemsShowCount(prev=>prev+6)
  }
  
  const [selectStates, setSelectStates] = useState([
     false, false, false, false, false, false, false
  ])
  
  const [sorted, setSorted] = useState(["", "", "", "", "", "", ""])
  
  function handleSortedSettings (newSort, index){
    let arr = sorted
    arr[index] = newSort
    setSorted(arr)
    setRender(prev=>!prev)
  }
  
  function handleSelectBlock (index){
    let arr = selectStates
    
    if (arr[index]){
      arr[index] = false
      setSelectStates(arr)
  
    } else {
      let ar = arr.map((el)=>{
        return el = false
      })
      console.log(ar);
      ar[index] = true
      setSelectStates(ar)
    }
    
    setRender(prev=>!prev)
  }
  
  //////////////// Calculator Block ////////////////////////
  const [calculateBlock, setCalculateBlock] = useState(false)
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  
  return(
     <div className="productsMainBlock">
        <div className="G-CContainer">
          <p className="header G-header-100 G-black no-select"><TextInView text={t("products.header2")}/></p>
          <p className="prg G-16-300-Inter G-black no-select"><TextInView text={t("products.prg2")}/></p>
        </div>
  
       {calculateBlock &&
          <div className="calculateCont">
            <div onClick={()=>setCalculateBlock(false)} className="backgroundBlock"></div>
       
            <div className="calculateBlock G-flex-ACenter-JCenter G-flex-Column">
              <div className="G-flex closeBtnBlock G-marginB-16">
                <button onClick={()=>setCalculateBlock(false)} className="closeBtn"><img src={RentImages.xClose} alt=""/></button>
              </div>
         
              <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-16"><TextInView text={t("products.miniHeader20")}/></p>
              <p className="underHeader G-20-400-Inter G-marginB-16"><TextInView text={t("products.underHeader5")}/></p>
         
              <input className="calcInput G-marginB-16 G-20-300-Inter" placeholder={t("products.placeholder1")} value={name} onChange={(event)=>setName(event.target.value)} type="text"/>
              <input className="calcInput G-marginB-16 G-20-300-Inter" placeholder={"+359"} value={tel} onChange={(event)=>setTel(event.target.value)} type="number"/>
         
              <p className="underInputPrg G-16-300-Inter no-select G-marginB-16"><TextInView text={t("products.prg5")}/></p>
              <button className="sendCodeBtn G-greenBtn G-20-400-Nexa G-white no-select"><TextInView text={t("products.btn11")}/></button>
            </div>
          </div>
       }
       
       <button onClick={()=>{
         setSortBlockActive(true)
         setSortBlockVisible(true)
       }} className={`sortBtn G-flex-ACenter-JCenter G-marginB-16 ${sortBlockActive ? "activeBtn" : ""}`}><img src={settingsIcon} className="G-marginR-8" alt=""/><TextInView className={"G-20-300-Inter G-black no-select"} text={t("products.sort")}/></button>
       {sortBlockVisible &&
          <div style={{opacity: sortBlockActive ? 1 : 0}} className="SortCont">
            <div onClick={()=>{handleCloseSortBlock()}} className="backgroundBlock"></div>
            
            <div className={`sortBlock G-flex-Column ${sortBlockActive ? "sortBlockAnim" : "sortBlockAnim2"}`}>
              <div className="G-flex-ACenter G-marginB-32">
                <button onClick={()=>handleCloseSortBlock()} className="closeBtn"><img src={Images.arrowLeft} alt=""/></button>
                <TextInView className={"prg24 G-black no-select"} text={t("products.sort")}/>
              </div>
              
              
  
              <div className={`selectsCont`}>
                {selectStates.map((el, index)=>{
                  return(
                     <SelectBlock
                        name={t(`products.selectName${index+1}`)}
                        handleSelectBlock={handleSelectBlock}
                        handleSortedSettings={handleSortedSettings}
                        index={index}
                        states={selectStates}
                        sorted={sorted}
                        placeholder={"Your placeholder"}
                        data={["Settings1", "Settings2", "Settings3", "Settings4", "Settings5", "Settings6", "Settings7", "Settings8", "Settings9", "Settings10"]}
                     />
                  )
                })}
              </div>
              
              <div className="btnBlock">
                <button onClick={()=>{
                  setSortBlockActive(false)
                }} className="acceptBtn G-greenBtn G-20-400-Nexa G-white"><TextInView text={t("products.btn4")}/></button>
              </div>
            </div>
            
          </div>
       }
  
       {/*<div className="itemsSection">*/}
       {/*  {Array.from({length: itemsShowCount}, (_, index)=>{*/}
       {/*    if (index < 6){*/}
       {/*      return(*/}
       {/*         <ProductsItem*/}
       {/*            img={carImg1}*/}
       {/*            name={"Renault ZOE R135"}*/}
       {/*            available={true}*/}
       {/*            discount={45}*/}
       {/*            bestseller={true}*/}
       {/*            price={"BGN 17000"}*/}
       {/*            carInfo={carInfo}*/}
       {/*            id={111111}*/}
       {/*         />*/}
       {/*      )*/}
       {/*    }*/}
       {/*     }*/}
       {/*  )}*/}
       {/*</div>*/}
       
       
  
       <div style={{backgroundImage: `url("${img1}")`}} className="rentCarBlock G-flex-ACenter-JCenter G-flex-Column no-select">
         <p className="miniHeader G-white G-marginB-16"><TextInView text={t("products.miniHeader16")}/></p>
         <p className="underHeader G-28-300-Nexa G-white"><TextInView text={t("products.prg4")}/></p>
    
         <div className="detailsCont G-flex">
           <div className="detailsBlock">
             <p className="detailName G-24-400-Nexa G-white no-select G-marginB-16"><TextInView text={t("products.detailName1")}/></p>
             <p className="detailPrg G-16-300-Inter G-white no-select"><TextInView text={t("products.detailPrg1")}/></p>
           </div>
      
           <div className="detailsBlock">
             <p className="detailName G-24-400-Nexa G-white no-select G-marginB-16"><TextInView text={t("products.detailName2")}/></p>
             <p className="detailPrg G-16-300-Inter G-white no-select"><TextInView text={t("products.detailPrg2")}/></p>
           </div>
      
           <div className="detailsBlock">
             <p className="detailName G-24-400-Nexa G-white no-select G-marginB-16"><TextInView text={t("products.detailName3")}/></p>
             <p className="detailPrg G-16-300-Inter G-white no-select"><TextInView text={t("products.detailPrg3")}/></p>
           </div>
         </div>
    
         <div className="buttonsBlock2 G-flex-ACenter-JCenter">
           <button onClick={()=>{
             setCalculateBlock(true)
           }} className="calculateBtn G-greenBtn G-white G-20-400-Nexa no-select"><TextInView text={t("products.btn7")}/></button>
           <button className="viewPricesBtn G-greenBtn G-black G-20-400-Nexa no-select"><TextInView text={t("products.btn8")}/></button>
         </div>
  
       </div>
       
       {/*<div className="itemsSection">*/}
       {/*  {Array.from({length: itemsShowCount}, (_, index)=>{*/}
       {/*    if (index >= 6){*/}
       {/*      return(*/}
       {/*         <ProductsItem*/}
       {/*            img={carImg1}*/}
       {/*            name={"Renault ZOE R135"}*/}
       {/*            available={true}*/}
       {/*            discount={45}*/}
       {/*            bestseller={true}*/}
       {/*            price={"BGN 17000"}*/}
       {/*            carInfo={carInfo}*/}
       {/*            id={111111}*/}
       {/*         />*/}
       {/*      )*/}
       {/*    }*/}
       {/*     }*/}
       {/*  )}*/}
       {/*</div>*/}
       
       {/*<button onClick={handleShowMore} className="showMoreBtn G-black G-20-400-Nexa no-select"><TextInView text={t("products.btn2")}/></button>*/}
       
     </div>
  )
}

export default CarOrderBlock