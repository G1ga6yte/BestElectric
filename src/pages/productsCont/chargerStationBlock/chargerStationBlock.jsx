import React, {useState, useEffect, useRef} from "react";
import "./chargerStationBlock.scss"
import "../carOrderBlock/carOrderBlock.scss"
import {useTranslation} from "react-i18next";
import {Images} from "../../homeMain/homeRentCar/images/images";
import TextInView from "../../../components/TextInView/TextInView";
import SelectBlock from "../../../components/selectBlock/selectBlock";
import ProductsItem from "../../../components/productsItem/productsItem";
import settingsIcon from "../carOrderBlock/images/settings-04.svg"
import {Link} from "react-router-dom";

function ChargerStationBlock (){
  const {t, i18n} = useTranslation();
  const [sortBlockActive, setSortBlockActive] = useState(false)
  const [sortBlockVisible, setSortBlockVisible] = useState(false)
  const [itemsShowCount, setItemsShowCount] = useState(12)
  const [render, setRender] = useState(false)
  const chargerInfo = [
    {
      name: t("main.settingsName1"),
      icon: Images.targetIcon,
      value: "AC"
    },
    {
      name: t("main.settingsName2"),
      icon: Images.lightningIcon,
      value: "up to 22 kW"
    },
    {
      name: t("main.settingsName3"),
      icon: Images.chargerIcon,
      padding: 5,
      value: "Type 2"
    },
    {
      name: t("main.settingsName4"),
      icon: Images.plusIcon,
      value: "Wi-Fi, consumption monitoring"
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
    false, false, false, false, false, false, false, false, false
  ])
  
  const [sorted, setSorted] = useState(["", "", "", "", "", "", "", "", ""])
  
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
  
  function ArticleBlock ({header, prg, path}){
    return(
       <Link to={path} className="article">
         <div className="innerBlock">
           <p className="G-white G-20-300-Nexa"><TextInView text={header}/></p>
           <p className="prg G-16-300-Inter G-white"><TextInView text={prg}/></p>
           <img src={Images.arrowRightUp} alt=""/>
         </div>
       </Link>
    )
  }
  
  const divRef = useRef(null)
  
  useEffect(() => {
    if (divRef.current) {
      const divElement = divRef.current;
      const totalWidth = divElement.scrollWidth;
      const centerPosition = (totalWidth - window.innerWidth) /2;
      divElement.scrollLeft = centerPosition;
    }
  }, []);
  
  return(
     <div className="productsMainBlock">
       <div className="G-CContainer">
         <p className="header G-header-100 G-black no-select"><TextInView text={t("products.header3")}/></p>
         <p className="prg G-16-300-Inter G-black no-select"><TextInView text={t("products.underHeader2")}/></p>
       </div>
  
  
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
                        name={t(`products.selectName${index+8}`)}
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
  
  
       <div className="itemsSection">
         {Array.from({length: itemsShowCount}, (_, index)=>{
              if (index < 6){
                return(
                   <ProductsItem
                      img={Images.chargerImg}
                      name={"Webasto Pure"}
                      available={true}
                      discount={45}
                      price={"BGN 17000"}
                      carInfo={chargerInfo}
                      id={222222}
                   />
                )
              }
            }
         )}
       </div>
       
       <div style={{backgroundImage: `url("${Images.backgroundImg1}")`}} className="properChargingBlock">
         <p className="miniHeader"><TextInView text={t("products.header4")}/></p>
         <div ref={divRef} className="articlesCont">
           <div className="articlesBlock G-flex">
             {Array.from({length: 5}, (_, index)=>(
                <ArticleBlock header={t("main.artHeader1")} prg={t("main.artPrg1")} path={`/article/${index}`}/>
             ))}
           </div>
         </div>
       </div>
  
  
       <div className="itemsSection">
         {Array.from({length: itemsShowCount}, (_, index)=>{
              if (index >= 6){
                return(
                   <ProductsItem
                      img={Images.chargerImg}
                      name={"Webasto Pure"}
                      available={true}
                      discount={45}
                      price={"BGN 17000"}
                      carInfo={chargerInfo}
                      id={222222}
                   />
                )
              }
            }
         )}
       </div>
  
       <button onClick={handleShowMore} className="showMoreBtn G-black G-20-400-Nexa no-select"><TextInView text={t("products.btn2")}/></button>





     </div>
  )
}

export default ChargerStationBlock