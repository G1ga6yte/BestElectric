import React, {useEffect, useState} from "react";
import "./productItemMain.scss";
import {useParams} from "react-router";
import {Images} from "./images/images";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import SelectBlock from "../../../components/selectBlock/selectBlock";
import {Link} from "react-router-dom";


function ProductItemMain() {
  const {t, i18n} = useTranslation();
  const {id} = useParams();
  
  const data1 = {
    delivery   : "30-50",
    discount   : 45,
    available  : false,
    imgData    : [Images.img1, Images.img1, Images.img1, Images.img1, Images.img1, Images.img1, Images.img1,
                  Images.img1],
    overview   : [
      {name: t("products.overview1"), value: "15,000 km"},
      {name: t("products.overview2"), value: "SUV"},
      {name: t("products.overview3"), value: "Automatic"},
      {name: t("products.overview4"), value: "5"},
      {name: t("products.overview5"), value: "5"},
      {name: t("products.overview6"), value: "til 2025"},
      {name: t("products.overview7"), value: "Apr 2018"},
    ],
    question1  : {question: t("products.question1"), answer: t("products.answer1")},
    name       : "Renault ZOE R135",
    colors     : [["#F8F8FF", "#F1F3FF"]],
    description: t("products.desc1"),
    oldPrice   : 28000,
    price      : 15000,
    settings   : [
      {
        name : t("products.settings1"),
        icon : Images.batteryIcon,
        value: "52 kWh",
      },
      {
        name : t("products.settings2"),
        icon : Images.lightingIcon2,
        value: "135 hp",
      },
      {
        name : t("products.settings3"),
        icon : Images.speedIcon,
        value: "13.5",
      },
      {
        name : t("products.settings4"),
        icon : Images.batteryFullIcon,
        value: "400 km",
      },
      {
        name : t("products.settings5"),
        icon : Images.carX4,
        value: "Front",
      },
      {
        name : t("products.settings6"),
        icon : Images.powerIcon,
        value: "Electro",
      },
    ],
    questions : [
      {
        question : t("products.question5"),
        answer : t("products.answer5")
      },
      {
        question : t("products.question6"),
        answer : t("products.answer6")
      },
      {
        question : t("products.question7"),
        answer : t("products.answer7")
      },
      {
        question : t("products.question8"),
        answer : t("products.answer8")
      },
      {
        question : t("products.question9"),
        answer : t("products.answer9")
      }
    ]
  };
  const data2 = {
    delivery   : false,
    discount   : 45,
    available  : true,
    imgData    : [Images.img2, Images.img2, Images.img2, Images.img2, Images.img2, Images.img2, Images.img2,
                  Images.img2],
    overview   : [
      {name: t("products.overview8"), value: "1 phase, 3 phases"},
      {name: t("products.overview9"), value: "Plastic"},
      {name: t("products.overview10"), value: "Integrated"},
      {name: t("products.overview11"), value: "195x320x110mm"},
      {name: t("products.overview12"), value: "ABB"},
      {name: t("products.overview13"), value: "3.5 kg"},
      {name: t("products.overview14"), value: "IK10 (for operating temperature from - 35 to - 35 °C)"},
      {name: t("products.overview15"), value: "10 years"},
      {name: t("products.overview16"), value: "Yes"},
      {name: t("products.overview17"), value: "5 m"},
      {name: t("products.overview18"), value: "Yes"},
    
    ],
    question1  : {question: t("products.question10"), answer: t("products.answer10")},
    name       : "Webasto Pure",
    colors     : [
      ["#F8F8FF", "#F1F3FF"],
      ["#DDD9CF", "#AEA79A"],
      ["#B3B6BB", "#5C6165"],
      ["#84B1A3", "#406961"],
      ["#DBC8C8", "#937F80"],
      ["#74787F", "#3C4046"]
    ],
    description: t("products.desc2"),
    oldPrice   : 28000,
    price      : 15000,
    settings   : [
      {
        name : t("products.settings7"),
        icon : Images.targetIcon,
        value: "AC",
      },
      {
        name : t("products.settings8"),
        icon : Images.lightingIcon2,
        value: "up to 22 kW",
      },
      {
        name : t("products.settings9"),
        icon : Images.chargerIcon,
        value: "Type 2",
      },
      {
        name : t("products.settings10"),
        icon : Images.plus,
        value: "Wi-Fi, consumption monitoring",
      },
      {
        name : t("products.settings11"),
        icon : Images.batteryCharging2,
        value: "For parking lots",
      }
    ],
    questions : [
      {
        question : t("products.question11"),
        answer : t("products.answer11")
      },
      {
        question : t("products.question12"),
        answer : t("products.answer12")
      },
      {
        question : t("products.question13"),
        answer : t("products.answer13")
      },
      {
        question : t("products.question14"),
        answer : t("products.answer14")
      },
      {
        question : t("products.question15"),
        answer : t("products.answer15")
      }
    ]
  
  };
  
  const [activeDate, setActiveDate] = useState(data1);
  const [productType, setProductType] = useState("");
  useEffect(() => {
    if (id === "111111") {
      setProductType("car");
      setActiveDate(data1);
    } else if (id === "222222") {
      setProductType("charger");
      setActiveDate(data2);
    } else if (id === "333333") {
      setProductType("panel");
    } else {
      setProductType("rentCar");
    }
  }, []);
  
  
  ///////////////// Script after activeDate //////////////////
  
  const [activeImg, setActiveImg] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  
  const [activeQuestion, setActiveQuestion] = useState(2);
  const [delivery, setDelivery] = useState("");
  const [discount, setDiscount] = useState("");
  
  useEffect(() => {
    if (activeDate.imgData) {
      setActiveImg(activeDate.imgData[0]);
    }
    activeDate.delivery && setDelivery(activeDate.delivery);
    activeDate.discount && setDiscount(activeDate.discount);
    activeDate.colors && setActiveColor(activeDate.colors[0]);
    
  }, [activeDate]);
  
  const [render, setRender] = useState(false);
  const [selectStates, setSelectStates] = useState([false, false]);
  const [sorted, setSorted] = useState(["", ""]);
  
  
  function handleSortedSettings(newSort, index) {
    let arr = sorted;
    arr[index] = newSort;
    setSorted(arr);
    setRender(prev => !prev);
  }
  
  function handleSelectBlock(index) {
    let arr = selectStates;
    
    if (arr[index]) {
      arr[index] = false;
      setSelectStates(arr);
      
    } else {
      let ar = arr.map((el) => {
        return el = false;
      });
      console.log(ar);
      ar[index] = true;
      setSelectStates(ar);
    }
    
    setRender(prev => !prev);
  }
  
  const [powerSelect, setPowerSelect] = useState([false])
  const [powerOption, setPowerOption] = useState([""])
  
  function handlePowerOptionSettings(newSort, index) {
    let arr = powerOption;
    arr[index] = newSort;
    setPowerOption(arr);
    setRender(prev => !prev);
  }
  
  function handlePowerOptionBlock(index) {
    let arr = powerSelect;
    
    if (arr[index]) {
      arr[index] = false;
      setPowerSelect(arr);
      
    } else {
      let ar = arr.map((el) => {
        return el = false;
      });
      console.log(ar);
      ar[index] = true;
      setPowerSelect(ar);
    }
    
    setRender(prev => !prev);
  }
  
  
  return (
     <div className="ProductItemMain G-CContainer G-flex">
       <div className="leftBlock">
         
         <div style={{backgroundImage: `url("${activeImg}")`}} className="imgBlock">
           <div className="contentBlock G-flex-Column">
             {activeDate.available &&
                <p className="availablePrg"><TextInView className={"G-16-300-Inter G-black"} text={t("main.status1")}/>
                </p>}
             {activeDate.delivery &&
                <p className="deliveryPrg"><TextInView text={t("products.status1", {delivery})}/></p>}
             {activeDate.discount &&
                <p className="discountPrg"><TextInView text={t("products.status2", {discount})}/></p>}
             
             <div className="G-flew-grow"></div>
             <div className="buttonsBlock G-flex">
               <button className="changeImgBtn"><img src={Images.btnLeft} alt=""/></button>
               <button className="changeImgBtn"><img src={Images.btnRight} alt=""/></button>
             </div>
           </div>
         </div>
         <div className="imagesBlock G-flex">
           {activeDate.imgData.map((el, index) => {
             return (
                <div key={index} className={`image ${activeImg === el ? "activeImg" : ""}`}
                     style={{backgroundImage: `url("${el}")`}}></div>
             );
           })}
         </div>
         
         <div className="tabletShow">
           <p className="overName G-16-300-Inter G-black no-select G-marginB-8"><TextInView
              text={t("products.overName1")}/></p>
           <p className="name G-marginB-16"><TextInView text={activeDate.name}/></p>
           
           <div className="priceBlock G-marginB-16">
             <p className="oldPrice G-marginB-16"><TextInView text={`BGN ${activeDate.oldPrice}`}/></p>
             <p className="newPrice G-marginB-16"><TextInView text={`BGN ${activeDate.price}`}/></p>
             {productType === "car" &&
                <p className="deliveryTime G-marginB-16 G-16-300-Inter G-black"><TextInView
                   text={t("products.deliveryTime1")}/></p>
             }
             {productType === "charger" &&
                <SelectBlock
                   name={t("products.miniHeader12")}
                   states={powerSelect}
                   sorted={powerOption}
                   placeholder={"Placeholder"}
                   data={["Settings1", "Settings2", "Settings3", "Settings4", "Settings5", "Settings6", "Settings7",
                          "Settings8", "Settings9", "Settings10"]}
                   handleSelectBlock={handlePowerOptionBlock}
                   handleSortedSettings={handlePowerOptionSettings}
                   index={0}
                />
             }
             <p className="miniHeader G-black no-select G-marginB-16"><TextInView text={t("products.miniHeader9")}/></p>
             {activeColor &&
                <div className="colorsBlock G-marginB-16 ">
                  {activeDate.colors.map((el, index) => {
                    return (
                       <button key={index} onClick={() => {
                         setActiveColor(el);
                       }} className={`colorBtn ${activeColor === el ? "activeColor" : ""}`}
                               style={{background: `linear-gradient(${el[0]}, ${el[1]})`}}
                       >
                       </button>
                    );
                  })}
                </div>
             }
             
             <button className="addToCartBtn G-greenBtn G-20-400-Nexa G-white no-select"><TextInView
                text={t("products.btn5")}/></button>
           
           </div>
           
           <div className="descriptionBlock G-marginB-16">
             <p className="miniHeader"><TextInView text={t("products.miniHeader10")}/></p>
             <p className="prg G-20-300-Inter G-black no-select"><TextInView text={activeDate.description}/></p>
             <p className="readMoreBtn"><TextInView text={t("products.btn6")}/></p>
           </div>
           
           <div className="settingsBlock G-marginB-16">
             {activeDate.settings.map((el, index) => {
               return (
                  <div className="settingsLine G-flex-ACenter-JBetween">
                    <div className="G-flex-ACenter">
                      <img style={{padding: `${el.icon === Images.carX4 ? "0 5px" : "0"}`}} src={el.icon} alt=""/>
                      <TextInView className={"G-20-300-Inter G-black no-select"} text={el.name}/>
                    </div>
                    
                    <TextInView className="graySettings G-20-300-Inter no-select" text={el.value}/>
                  </div>
               );
             })}
           </div>
         </div>
         
         <div className="overviewBlock">
           <p className="miniHeader G-marginB-8"><TextInView text={t("products.miniHeader7")}/></p>
           
           {activeDate.overview.map((el, index) => {
             return (
                <div className="overviewLine G-flex-ACenter-JBetween G-marginB-8">
                  <TextInView className={"overviewName G-20-300-Inter G-black no-select"} text={el.name}/>
                  <TextInView className={"G-20-300-Inter no-select grayText"} text={el.value}/>
                </div>
             );
           })}
         </div>
         
         <div className="calculatorBlock">
           <p className="questionBlue"><TextInView text={activeDate.question1.question}/></p>
           <p className="answerPrg G-20-300-Inter no-select G-black G-marginB-32"><TextInView
              text={activeDate.question1.answer}/></p>
           
           {productType === "car" &&
              <div className="selectsCont G-flex G-marginB-32">
                
                <div className="selectBlock G-flex-Column">
                  <div className="miniHeader G-flex G-20-400-Inter G-black no-select G-marginB-16"><img
                     className="G-marginR-8" src={Images.homeIcon} alt=""/><TextInView
                     text={t("products.miniHeader5")}/></div>
                  <SelectBlock
                     name={""}
                     states={selectStates}
                     sorted={sorted}
                     placeholder={"Placeholder"}
                     data={["Settings1", "Settings2", "Settings3", "Settings4", "Settings5", "Settings6", "Settings7",
                            "Settings8", "Settings9", "Settings10"]}
                     handleSelectBlock={handleSelectBlock}
                     handleSortedSettings={handleSortedSettings}
                     index={0}
                  
                  />
                  
                  <div className="underSelectsBlock G-flex">
                    <div className="underSelectBlock">
                      <p className="overText G-16-400-Inter"><TextInView text={t("products.calc1")}/></p>
                      <p className="G-16-400-Inter"><TextInView text={`13 ${t("products.calc3")}`}/></p>
                    </div>
                    
                    <div className="underSelectBlock">
                      <p className="overText G-16-400-Inter"><TextInView text={t("products.calc1")}/></p>
                      <p className="G-16-400-Inter"><TextInView text={`1 ${t("products.calc3")}`}/></p>
                    </div>
                  </div>
                </div>
                
                <div className="selectBlock G-flex-Column">
                  <div className="miniHeader G-flex G-20-400-Inter G-black no-select G-marginB-16"><img
                     className="G-marginR-8" src={Images.lightingIcon} alt=""/><TextInView
                     text={t("products.miniHeader6")}/></div>
                  <SelectBlock
                     name={""}
                     states={selectStates}
                     sorted={sorted}
                     placeholder={"Placeholder"}
                     data={["Settings1", "Settings2", "Settings3", "Settings4", "Settings5", "Settings6", "Settings7",
                            "Settings8", "Settings9", "Settings10"]}
                     handleSelectBlock={handleSelectBlock}
                     handleSortedSettings={handleSortedSettings}
                     index={1}
                  
                  />
                  
                  <div className="underSelectsBlock G-flex">
                    <div className="underSelectBlock">
                      <p className="overText G-16-400-Inter"><TextInView text={t("products.calc1")}/></p>
                      <p className="G-16-400-Inter"><TextInView text={`2 ${t("products.calc3")}`}/></p>
                    </div>
                    
                    <div className="underSelectBlock">
                      <p className="overText G-16-400-Inter"><TextInView text={t("products.calc1")}/></p>
                      <p className="G-16-400-Inter"><TextInView text={`24 ${t("products.calc4")}`}/></p>
                    </div>
                  </div>
                </div>
              
              
              </div>
           }
  
           {productType === "charger" &&
              <div className="selectsCont G-flex G-marginB-32">
       
                <div className="selectBlock G-flex-Column">
                  <div className="miniHeader G-flex G-20-400-Inter G-black no-select G-marginB-16"><img
                     className="G-marginR-8" src={Images.settingsIcon} alt=""/><TextInView
                     text={t("products.miniHeader13")}/></div>
                  <SelectBlock
                     name={""}
                     states={selectStates}
                     sorted={sorted}
                     placeholder={"Placeholder"}
                     data={["Settings1", "Settings2", "Settings3", "Settings4", "Settings5", "Settings6", "Settings7",
                            "Settings8", "Settings9", "Settings10"]}
                     handleSelectBlock={handleSelectBlock}
                     handleSortedSettings={handleSortedSettings}
                     index={0}
         
                  />
         
                  <div className="underSelectsBlock G-flex">
                    <div className="underSelectBlock">
                      <p className="overText G-16-400-Inter"><TextInView text={t("products.calc1")}/></p>
                      <p className="G-16-400-Inter"><TextInView text={`13 ${t("products.calc3")}`}/></p>
                    </div>
           
                    <div className="underSelectBlock">
                      <p className="overText G-16-400-Inter"><TextInView text={t("products.calc1")}/></p>
                      <p className="G-16-400-Inter"><TextInView text={`1 ${t("products.calc3")}`}/></p>
                    </div>
                  </div>
                </div>
       
                <div className="selectBlock G-flex-Column">
                  <div className="miniHeader G-flex G-20-400-Inter G-black no-select G-marginB-16"><img
                     className="G-marginR-8" src={Images.lightingIcon} alt=""/><TextInView
                     text={t("products.miniHeader14")}/></div>
                  <SelectBlock
                     name={""}
                     states={selectStates}
                     sorted={sorted}
                     placeholder={"Placeholder"}
                     data={["Settings1", "Settings2", "Settings3", "Settings4", "Settings5", "Settings6", "Settings7",
                            "Settings8", "Settings9", "Settings10"]}
                     handleSelectBlock={handleSelectBlock}
                     handleSortedSettings={handleSortedSettings}
                     index={1}
         
                  />
                  
                </div>
     
     
              </div>
           }
           
           <div className={`questionBlock G-marginB-32 ${activeQuestion === 1 ? "activeQuestion" : ""}`}>
             <div onClick={() => {
               if (activeQuestion === 1) {
                 setActiveQuestion(0);
               } else {
                 setActiveQuestion(1);
               }
             }} className="questionPrg G-flex-ACenter">
               <img style={{transform: `rotate(${activeQuestion === 1 ? 45 : 0}deg)`}} className="G-marginR-8"
                    src={Images.plus} alt=""/>
               <TextInView className="G-20-400-Inter G-black no-select" text={t("products.question2")}/>
             </div>
             
             
             {activeQuestion === 1 &&
                <div className="answersBlock">
                  <ul>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer21")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer22")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer23")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer24")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer25")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer26")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer27")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer28")}/></li>
                  </ul>
                </div>
             }
           
           </div>
           
           <div className={`questionBlock G-marginB-32 ${activeQuestion === 2 ? "activeQuestion" : ""}`}>
             <div onClick={() => {
               if (activeQuestion === 2) {
                 setActiveQuestion(0);
               } else {
                 setActiveQuestion(2);
               }
             }} className="questionPrg G-flex-ACenter">
               <img style={{transform: `rotate(${activeQuestion === 2 ? 45 : 0}deg)`}} className="G-marginR-8"
                    src={Images.plus} alt=""/>
               <TextInView className="G-20-400-Inter G-black no-select" text={t("products.question3")}/>
             </div>
             
             
             {activeQuestion === 2 &&
                <div className="answersBlock">
                  <ul>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer21")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer22")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer23")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer24")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer25")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer26")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer27")}/></li>
                    <li><TextInView className="G-20-300-Inter G-black no-select" text={t("products.answer28")}/></li>
                  </ul>
                </div>
             }
           
           </div>
           
           <Link to="/" className="buyChargingStation G-flex-ACenter-JBetween">
             <TextInView className={"G-20-400-Inter G-black no-select"} text={t("products.question4")}/>
             <img src={Images.arrowRight} alt=""/>
           </Link>
         
         
         </div>
         
         <div className="questionsCont G-marginB-16">
           
           <p className="miniHeader G-marginB-32"><TextInView text={t("products.miniHeader8")}/></p>
           
           
  
           {activeDate.questions.map((el, index)=>{
             return(
                <div className={`questionBlock G-marginB-32 ${activeQuestion === (index + 3) ? "activeQuestion" : ""}`}>
                  <div onClick={() => {
                    if (activeQuestion === (index + 3)) {
                      setActiveQuestion(0);
                    } else {
                      setActiveQuestion((index + 3));
                    }
                  }} className="questionPrg G-flex-ACenter">
                    <img style={{transform: `rotate(${activeQuestion === (index + 3) ? 45 : 0}deg)`}}
                         className="G-marginR-8" src={Images.plus} alt=""/>
                    <TextInView className="G-20-400-Inter G-black no-select" text={el.question}/>
                  </div>
                  {activeQuestion === (index + 3) &&
                     <div className="answersBlock">
                       <p className="G-20-300-Inter G-black no-select">
                         <TextInView text={el.answer}/>
                       </p>
                     </div>
                  }
                  
                </div>

             )
           })}
         
         </div>
         
         <div className="tabletShow">
           <div className="shareBlock G-marginB-16">
             <p className="miniHeader"><TextInView text={t("products.miniHeader11")}/></p>
             <div className="G-flex-ACenter">
               <a href="https://www.facebook.com/"><img src={Images.social1} alt=""/></a>
               <a href="https://twitter.com/?lang=en"><img src={Images.social2} alt=""/></a>
               <a href="https://www.instagram.com/"><img src={Images.social3} alt=""/></a>
             </div>
           </div>
         </div>
       
       
       </div>
       
       <div className="rightBlock">
         <p className="overName G-16-300-Inter G-black no-select G-marginB-8"><TextInView
            text={t("products.overName1")}/></p>
         <p className="name G-marginB-16"><TextInView text={activeDate.name}/></p>
         
         <div className="priceBlock G-marginB-16">
           <p className="oldPrice G-marginB-16"><TextInView text={`BGN ${activeDate.oldPrice}`}/></p>
           <p className="newPrice G-marginB-16"><TextInView text={`BGN ${activeDate.price}`}/></p>
           {productType === "car" &&
              <p className="deliveryTime G-marginB-16 G-16-300-Inter G-black"><TextInView
                 text={t("products.deliveryTime1")}/></p>
           }
           {productType === "charger" &&
            <SelectBlock
               name={t("products.miniHeader12")}
               states={powerSelect}
               sorted={powerOption}
               placeholder={"Placeholder"}
               data={["Settings1", "Settings2", "Settings3", "Settings4", "Settings5", "Settings6", "Settings7",
                      "Settings8", "Settings9", "Settings10"]}
               handleSelectBlock={handlePowerOptionBlock}
               handleSortedSettings={handlePowerOptionSettings}
               index={0}
            />
           }
           <p className="miniHeader G-black no-select G-marginB-16"><TextInView text={t("products.miniHeader9")}/></p>
           {activeColor &&
              <div className="colorsBlock G-marginB-16 ">
                {activeDate.colors.map((el, index) => {
                  return (
                     <button key={index} onClick={() => {
                       setActiveColor(el);
                     }} className={`colorBtn ${activeColor === el ? "activeColor" : ""}`}
                      style={{background: `linear-gradient(${el[0]}, ${el[1]})`}}
                     >
                     </button>
                  );
                })}
              </div>
           }
           
           <button className="addToCartBtn G-greenBtn G-20-400-Nexa G-white no-select"><TextInView
              text={t("products.btn5")}/></button>
         
         </div>
         
         <div className="descriptionBlock G-marginB-16">
           <p className="miniHeader"><TextInView text={t("products.miniHeader10")}/></p>
           <p className="prg G-20-300-Inter G-black no-select"><TextInView text={activeDate.description}/></p>
           <p className="readMoreBtn"><TextInView text={t("products.btn6")}/></p>
         </div>
         
         <div className="settingsBlock G-marginB-16">
           {activeDate.settings.map((el, index) => {
             return (
                <div className="settingsLine G-flex-ACenter-JBetween">
                  <div className="namePrg G-flex-ACenter">
                    <img style={{padding: `${el.icon === Images.carX4 ? "0 5px" : "0"}`}} src={el.icon} alt=""/>
                    <TextInView className={"G-20-300-Inter G-black no-select"} text={el.name}/>
                  </div>
                  
                  <TextInView className="graySettings G-20-300-Inter no-select" text={el.value}/>
                </div>
             );
           })}
         </div>
         
         <div className="shareBlock G-marginB-16">
           <p className="miniHeader"><TextInView text={t("products.miniHeader11")}/></p>
           <div className="G-flex-ACenter">
             <a href="https://www.facebook.com/"><img src={Images.social1} alt=""/></a>
             <a href="https://twitter.com/?lang=en"><img src={Images.social2} alt=""/></a>
             <a href="https://www.instagram.com/"><img src={Images.social3} alt=""/></a>
           </div>
         </div>
       
       
       </div>
     </div>
  );
}

export default ProductItemMain;