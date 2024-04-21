import React, {useEffect, useState} from "react";
import TextInView from "../../components/TextInView/TextInView";
import {useTranslation} from "react-i18next";
import "./navigation.scss"
import {Link, useLocation} from "react-router-dom";
import {Images} from "./images/images";
import LinkToPage from "./LinkToPage";
import {useCartContext} from "../../CartContext";


function Navigation () {
  const {t, i18n} = useTranslation()
  const [lngMenu, setLngMenu] = useState(false)
  const [navTheme, setNavTheme] = useState("home")
  const [tabletMenu, setTabletMenu] = useState(false)
  const [inHeight, setInHeight] = useState(0)
  const {loginBlock, setLoginBlock} = useCartContext()
  
  const locales = {
    en: {title: "English"},
    bg: {title: "Bulgarian"},
  };
  
  const location = useLocation()
  useEffect(()=>{
    if (location.pathname === "/home"){
      setNavTheme("home")
    } else {
      setNavTheme("else")
    }
  }, [location])
  
  useEffect(()=>{
    setInHeight(window.innerHeight)
  },[])
  
  
  
  function TabletMenuBlock ({state}){
    const [productsMenu, setProductsMenu] = useState(false)
  
    return(
       state && <div style={{minHeight: `${inHeight}px`}} className="tabletMenuBlock">
          <div className="closeBtnCont G-flex">
            <button onClick={()=>{setTabletMenu(false)}}><img src={Images.closeX} alt=""/></button>
          </div>
         
         <div className="linksRow G-flex-Column G-flex-ACenter">
           <Link onClick={()=>setTabletMenu(false)} className="link G-marginR-32" to="/home">
             <LinkToPage text={t("main.link1")}/>
           </Link>
           
           <div className="link productLink">
             <div onClick={()=> setProductsMenu(prev=>!prev)} className="G-flex-ACenter">
               <LinkToPage text={t("main.link2")}/>
               <img className="G-transition-03" src={Images.chevronDown} style={{transform: `rotateX(${productsMenu ? "0" : "180deg"})`}} alt=""/>
             </div>
           
             <div style={{height: `${productsMenu ? "100px" : "0"}`}} className="productsBlock">
               <div className="productsInsideBlock">
                 <Link onClick={()=>setTabletMenu(false)} className="productsLink" to="/"><TextInView className={`G-20-400-Nexa`} text={t("main.link8")}/></Link>
                 <Link onClick={()=>setTabletMenu(false)} className="productsLink" to="/"><TextInView className={`G-20-400-Nexa`} text={t("main.link9")}/></Link>
                 <Link onClick={()=>setTabletMenu(false)} className="productsLink" to="/"><TextInView className={`G-20-400-Nexa`} text={t("main.link10")}/></Link>
               </div>
             </div>
           
           </div>
           
           <Link onClick={()=>setTabletMenu(false)} className="link G-marginR-32" to="/carRent">
             <LinkToPage text={t("main.link3")}/>
           </Link>
           <Link onClick={()=>setTabletMenu(false)} className="link G-marginR-32" to="/services">
             <LinkToPage text={t("main.link4")}/>
           </Link>
           <Link onClick={()=>setTabletMenu(false)} className="link G-marginR-32" to="aboutUs">
             <LinkToPage text={t("main.link5")}/>
           </Link>
         </div>
         
         <div className="UnderRow G-flex-Column G-flex-ACenter">
           <button onClick={()=>setLoginBlock(true)} className="loginBtn G-marginB-24"><TextInView className={`G-20-400-Nexa`} text={t("main.link7")}/></button>
  
           <Link onClick={()=>setTabletMenu(false)} to="/" className="settingsCont G-flex-ACenter G-marginB-24">
             <svg className="G-marginR-8" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
               <path d="M12.8335 15C14.4904 15 15.8335 13.6569 15.8335 12C15.8335 10.3431 14.4904 9 12.8335 9C11.1766 9 9.8335 10.3431 9.8335 12C9.8335 13.6569 11.1766 15 12.8335 15Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M19.5608 14.7273C19.4398 15.0015 19.4037 15.3056 19.4571 15.6005C19.5106 15.8954 19.6512 16.1676 19.8608 16.3818L19.9153 16.4364C20.0844 16.6052 20.2185 16.8057 20.31 17.0265C20.4015 17.2472 20.4486 17.4838 20.4486 17.7227C20.4486 17.9617 20.4015 18.1983 20.31 18.419C20.2185 18.6397 20.0844 18.8402 19.9153 19.0091C19.7465 19.1781 19.5459 19.3122 19.3252 19.4037C19.1045 19.4952 18.8679 19.5423 18.629 19.5423C18.39 19.5423 18.1534 19.4952 17.9327 19.4037C17.712 19.3122 17.5114 19.1781 17.3426 19.0091L17.288 18.9545C17.0738 18.745 16.8017 18.6044 16.5068 18.5509C16.2119 18.4974 15.9077 18.5335 15.6335 18.6545C15.3646 18.7698 15.1353 18.9611 14.9738 19.205C14.8123 19.4489 14.7256 19.7347 14.7244 20.0273V20.1818C14.7244 20.664 14.5328 21.1265 14.1919 21.4675C13.8509 21.8084 13.3884 22 12.9062 22C12.424 22 11.9616 21.8084 11.6206 21.4675C11.2796 21.1265 11.088 20.664 11.088 20.1818V20.1C11.081 19.7991 10.9836 19.5073 10.8085 19.2625C10.6334 19.0176 10.3887 18.8312 10.1062 18.7273C9.83203 18.6063 9.52787 18.5702 9.23296 18.6236C8.93806 18.6771 8.66593 18.8177 8.45168 19.0273L8.39713 19.0818C8.22827 19.2509 8.02775 19.385 7.80702 19.4765C7.5863 19.568 7.34971 19.6151 7.11077 19.6151C6.87183 19.6151 6.63524 19.568 6.41451 19.4765C6.19379 19.385 5.99327 19.2509 5.82441 19.0818C5.65536 18.913 5.52125 18.7124 5.42975 18.4917C5.33825 18.271 5.29116 18.0344 5.29116 17.7955C5.29116 17.5565 5.33825 17.3199 5.42975 17.0992C5.52125 16.8785 5.65536 16.678 5.82441 16.5091L5.87895 16.4545C6.08853 16.2403 6.22912 15.9682 6.28259 15.6733C6.33606 15.3784 6.29996 15.0742 6.17895 14.8C6.06371 14.5311 5.87236 14.3018 5.62846 14.1403C5.38456 13.9788 5.09876 13.8921 4.80622 13.8909H4.65168C4.16947 13.8909 3.707 13.6994 3.36603 13.3584C3.02505 13.0174 2.8335 12.5549 2.8335 12.0727C2.8335 11.5905 3.02505 11.1281 3.36603 10.7871C3.707 10.4461 4.16947 10.2545 4.65168 10.2545H4.7335C5.0344 10.2475 5.32623 10.1501 5.57104 9.97501C5.81585 9.79991 6.00233 9.55521 6.10622 9.27273C6.22724 8.99853 6.26334 8.69437 6.20986 8.39947C6.15639 8.10456 6.0158 7.83244 5.80622 7.61818L5.75168 7.56364C5.58263 7.39478 5.44852 7.19425 5.35702 6.97353C5.26553 6.7528 5.21843 6.51621 5.21843 6.27727C5.21843 6.03834 5.26553 5.80174 5.35702 5.58102C5.44852 5.36029 5.58263 5.15977 5.75168 4.99091C5.92054 4.82186 6.12106 4.68775 6.34179 4.59626C6.56251 4.50476 6.7991 4.45766 7.03804 4.45766C7.27698 4.45766 7.51357 4.50476 7.7343 4.59626C7.95502 4.68775 8.15555 4.82186 8.32441 4.99091L8.37895 5.04545C8.5932 5.25503 8.86533 5.39562 9.16023 5.4491C9.45514 5.50257 9.7593 5.46647 10.0335 5.34545H10.1062C10.3751 5.23022 10.6044 5.03887 10.7659 4.79497C10.9275 4.55107 11.0141 4.26526 11.0153 3.97273V3.81818C11.0153 3.33597 11.2069 2.87351 11.5478 2.53253C11.8888 2.19156 12.3513 2 12.8335 2C13.3157 2 13.7782 2.19156 14.1191 2.53253C14.4601 2.87351 14.6517 3.33597 14.6517 3.81818V3.9C14.6528 4.19253 14.7395 4.47834 14.901 4.72224C15.0626 4.96614 15.2919 5.15749 15.5608 5.27273C15.835 5.39374 16.1391 5.42984 16.434 5.37637C16.7289 5.3229 17.0011 5.18231 17.2153 4.97273L17.2699 4.91818C17.4387 4.74913 17.6392 4.61503 17.86 4.52353C18.0807 4.43203 18.3173 4.38493 18.5562 4.38493C18.7952 4.38493 19.0318 4.43203 19.2525 4.52353C19.4732 4.61503 19.6737 4.74913 19.8426 4.91818C20.0116 5.08704 20.1457 5.28757 20.2372 5.50829C20.3287 5.72901 20.3758 5.96561 20.3758 6.20455C20.3758 6.44348 20.3287 6.68008 20.2372 6.9008C20.1457 7.12152 20.0116 7.32205 19.8426 7.49091L19.788 7.54545C19.5785 7.75971 19.4379 8.03183 19.3844 8.32674C19.3309 8.62164 19.367 8.9258 19.488 9.2V9.27273C19.6033 9.54161 19.7946 9.77093 20.0385 9.93245C20.2824 10.094 20.5682 10.1807 20.8608 10.1818H21.0153C21.4975 10.1818 21.96 10.3734 22.301 10.7144C22.6419 11.0553 22.8335 11.5178 22.8335 12C22.8335 12.4822 22.6419 12.9447 22.301 13.2856C21.96 13.6266 21.4975 13.8182 21.0153 13.8182H20.9335C20.641 13.8193 20.3552 13.906 20.1113 14.0676C19.8674 14.2291 19.676 14.4584 19.5608 14.7273Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <TextInView className={"G-16-400-Inter"} text={`${t("main.prg1")}`}/>
           </Link>
  
           <a href={`tel:+359878767780`} className="phoneLink G-flex-ACenter G-marginB-24">
             <img src={Images.phone} className="G-marginR-16" alt=""/>
             <TextInView className={"G-20-400-Nexa G-black"} text={"+359 878 767780"}/>
           </a>
  
           <a href={`tel:+35924343215`} className="phoneLink G-flex-ACenter G-marginB-24">
             <img src={Images.phone} className="G-marginR-16" alt=""/>
             <TextInView className={"G-20-400-Nexa G-black"} text={"+359 2 4343215"}/>
           </a>
  
           <button className="orderCarBtn G-flex-ACenter G-marginB-24">
             <svg className="G-marginR-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M2.50002 9H21.5M2.5 15H21.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
             <TextInView className={`G-20-400-Nexa`} text={t("main.link6")}/>
           </button>
           
         </div>
         
         
       </div>
    )
  }
  
  return(
     <div className={`Navigation G-Container ${navTheme === "home" ? "homeTheme" : "lightTheme"}`}>
       <TabletMenuBlock state={tabletMenu}/>
       
       <div className="topBlock ">
         <div className="topBlockCont G-flex-ACenter-JBetween">
      
           <Link to="/bookingService" className="settingsCont G-flex-ACenter">
             <svg className="G-marginR-8" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
               <path d="M12.8335 15C14.4904 15 15.8335 13.6569 15.8335 12C15.8335 10.3431 14.4904 9 12.8335 9C11.1766 9 9.8335 10.3431 9.8335 12C9.8335 13.6569 11.1766 15 12.8335 15Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M19.5608 14.7273C19.4398 15.0015 19.4037 15.3056 19.4571 15.6005C19.5106 15.8954 19.6512 16.1676 19.8608 16.3818L19.9153 16.4364C20.0844 16.6052 20.2185 16.8057 20.31 17.0265C20.4015 17.2472 20.4486 17.4838 20.4486 17.7227C20.4486 17.9617 20.4015 18.1983 20.31 18.419C20.2185 18.6397 20.0844 18.8402 19.9153 19.0091C19.7465 19.1781 19.5459 19.3122 19.3252 19.4037C19.1045 19.4952 18.8679 19.5423 18.629 19.5423C18.39 19.5423 18.1534 19.4952 17.9327 19.4037C17.712 19.3122 17.5114 19.1781 17.3426 19.0091L17.288 18.9545C17.0738 18.745 16.8017 18.6044 16.5068 18.5509C16.2119 18.4974 15.9077 18.5335 15.6335 18.6545C15.3646 18.7698 15.1353 18.9611 14.9738 19.205C14.8123 19.4489 14.7256 19.7347 14.7244 20.0273V20.1818C14.7244 20.664 14.5328 21.1265 14.1919 21.4675C13.8509 21.8084 13.3884 22 12.9062 22C12.424 22 11.9616 21.8084 11.6206 21.4675C11.2796 21.1265 11.088 20.664 11.088 20.1818V20.1C11.081 19.7991 10.9836 19.5073 10.8085 19.2625C10.6334 19.0176 10.3887 18.8312 10.1062 18.7273C9.83203 18.6063 9.52787 18.5702 9.23296 18.6236C8.93806 18.6771 8.66593 18.8177 8.45168 19.0273L8.39713 19.0818C8.22827 19.2509 8.02775 19.385 7.80702 19.4765C7.5863 19.568 7.34971 19.6151 7.11077 19.6151C6.87183 19.6151 6.63524 19.568 6.41451 19.4765C6.19379 19.385 5.99327 19.2509 5.82441 19.0818C5.65536 18.913 5.52125 18.7124 5.42975 18.4917C5.33825 18.271 5.29116 18.0344 5.29116 17.7955C5.29116 17.5565 5.33825 17.3199 5.42975 17.0992C5.52125 16.8785 5.65536 16.678 5.82441 16.5091L5.87895 16.4545C6.08853 16.2403 6.22912 15.9682 6.28259 15.6733C6.33606 15.3784 6.29996 15.0742 6.17895 14.8C6.06371 14.5311 5.87236 14.3018 5.62846 14.1403C5.38456 13.9788 5.09876 13.8921 4.80622 13.8909H4.65168C4.16947 13.8909 3.707 13.6994 3.36603 13.3584C3.02505 13.0174 2.8335 12.5549 2.8335 12.0727C2.8335 11.5905 3.02505 11.1281 3.36603 10.7871C3.707 10.4461 4.16947 10.2545 4.65168 10.2545H4.7335C5.0344 10.2475 5.32623 10.1501 5.57104 9.97501C5.81585 9.79991 6.00233 9.55521 6.10622 9.27273C6.22724 8.99853 6.26334 8.69437 6.20986 8.39947C6.15639 8.10456 6.0158 7.83244 5.80622 7.61818L5.75168 7.56364C5.58263 7.39478 5.44852 7.19425 5.35702 6.97353C5.26553 6.7528 5.21843 6.51621 5.21843 6.27727C5.21843 6.03834 5.26553 5.80174 5.35702 5.58102C5.44852 5.36029 5.58263 5.15977 5.75168 4.99091C5.92054 4.82186 6.12106 4.68775 6.34179 4.59626C6.56251 4.50476 6.7991 4.45766 7.03804 4.45766C7.27698 4.45766 7.51357 4.50476 7.7343 4.59626C7.95502 4.68775 8.15555 4.82186 8.32441 4.99091L8.37895 5.04545C8.5932 5.25503 8.86533 5.39562 9.16023 5.4491C9.45514 5.50257 9.7593 5.46647 10.0335 5.34545H10.1062C10.3751 5.23022 10.6044 5.03887 10.7659 4.79497C10.9275 4.55107 11.0141 4.26526 11.0153 3.97273V3.81818C11.0153 3.33597 11.2069 2.87351 11.5478 2.53253C11.8888 2.19156 12.3513 2 12.8335 2C13.3157 2 13.7782 2.19156 14.1191 2.53253C14.4601 2.87351 14.6517 3.33597 14.6517 3.81818V3.9C14.6528 4.19253 14.7395 4.47834 14.901 4.72224C15.0626 4.96614 15.2919 5.15749 15.5608 5.27273C15.835 5.39374 16.1391 5.42984 16.434 5.37637C16.7289 5.3229 17.0011 5.18231 17.2153 4.97273L17.2699 4.91818C17.4387 4.74913 17.6392 4.61503 17.86 4.52353C18.0807 4.43203 18.3173 4.38493 18.5562 4.38493C18.7952 4.38493 19.0318 4.43203 19.2525 4.52353C19.4732 4.61503 19.6737 4.74913 19.8426 4.91818C20.0116 5.08704 20.1457 5.28757 20.2372 5.50829C20.3287 5.72901 20.3758 5.96561 20.3758 6.20455C20.3758 6.44348 20.3287 6.68008 20.2372 6.9008C20.1457 7.12152 20.0116 7.32205 19.8426 7.49091L19.788 7.54545C19.5785 7.75971 19.4379 8.03183 19.3844 8.32674C19.3309 8.62164 19.367 8.9258 19.488 9.2V9.27273C19.6033 9.54161 19.7946 9.77093 20.0385 9.93245C20.2824 10.094 20.5682 10.1807 20.8608 10.1818H21.0153C21.4975 10.1818 21.96 10.3734 22.301 10.7144C22.6419 11.0553 22.8335 11.5178 22.8335 12C22.8335 12.4822 22.6419 12.9447 22.301 13.2856C21.96 13.6266 21.4975 13.8182 21.0153 13.8182H20.9335C20.641 13.8193 20.3552 13.906 20.1113 14.0676C19.8674 14.2291 19.676 14.4584 19.5608 14.7273Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <TextInView className={"G-16-400-Inter G-white"} text={`${t("main.prg1")}`}/>
           </Link>
      
           <div className="rightGroupBlock G-flex-ACenter">
             <a className="G-16-300-Inter G-white G-marginR-32 G-isInView" href={`tel:+359878767780`}>+359 878 767780</a>
             <a className="G-16-300-Inter G-white G-marginR-32 G-isInView" href={`tel:+35924343215`}>+359 2 4343215</a>
             <p className="G-16-300-Inter G-white G-marginR-32 G-isInView addressPrg">1343 Sofia Bulgaria, general Mihail Savov 16, ground floor</p>
             <div className="lngBlock">
          
               <div onClick={()=>{setLngMenu(prev=>!prev)}} className="mainLng G-flex-ACenter G-white G-16-300-Inter G-isInView">
                 {Object.keys(locales).map((el, index) => {
                   if (i18n.resolvedLanguage === el) {
                     return <span key={index}>{el.toUpperCase()}</span>;
                   }
                 })}
                 <svg className="G-transition-05" style={{transform: `rotateX(${lngMenu ? "180deg" : "0deg"})`}} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                   <path d="M4.33325 6.5L8.33325 10.5L12.3333 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
          
               <div style={{display: `${lngMenu ? "flex" : "none"}`}} className="lngMenu">
                 {Object.keys(locales).map((locale) => {
                   return (
                      <button className="G-white G-16-300-Inter" type="submit"
                              onClick={() => {
                                i18n.changeLanguage(locale);
                                setLngMenu(false);
                              }} key={locale}>{locales[locale].title}</button>
                   );
                 })}
               </div>
        
             </div>
           </div>
    
         </div>
       </div>
       
       <div className="navBlockCont G-flex-ACenter-JBetween">
         <div className="G-flex-ACenter">
           <button onClick={()=>{
             setTabletMenu(true)
           }} className="tabletMenuBtn">
             <svg className=" G-marginR-8" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
               <path d="M5 20H35M5 10H35M5 30H35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </button>
           <Link to="/home" className="homeIconLink">
             {navTheme === "home" ? <img src={Images.whiteHomeIcon} alt=""/> : <img src={Images.lightHomeIcon} alt=""/>}
           </Link>
         </div>
         
         
         <div className="G-flex-ACenter linksBlock">
           <Link className="link G-marginR-32" to="/home">
             <LinkToPage text={t("main.link1")}/>
           </Link>
           <Link className="link G-marginR-32" to="/products">
             <LinkToPage text={t("main.link2")}/>
           </Link>
           <Link className="link G-marginR-32" to="/carRent">
             <LinkToPage text={t("main.link3")}/>
           </Link>
           <Link className="link G-marginR-32" to="/services">
             <LinkToPage text={t("main.link4")}/>
           </Link>
           <Link className="link G-marginR-32" to="aboutUs">
             <LinkToPage text={t("main.link5")}/>
           </Link>
  
           <svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
           
         </div>
         
         
         <div className="G-flex-ACenter">
           <button className="orderCarBtn G-flex-ACenter">
             <svg className="G-marginR-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M2.50002 9H21.5M2.5 15H21.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
             <TextInView className={`G-20-300-Nexa`} text={t("main.link6")}/>
           </button>
           
           <button onClick={()=>{setLoginBlock(true)}} className="loginBtn"><TextInView className={`G-20-400-Nexa`} text={t("main.link7")}/></button>
           
           <button className="cartBtn">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <div className="noteDote"></div>
           </button>
         </div>
         
         
       </div>
       
       
       
     </div>
  )
}

export default Navigation