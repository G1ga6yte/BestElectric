import React, {useState} from "react";
import "./footer.scss"
import {Link} from "react-router-dom";
import TextInView from "../../components/TextInView/TextInView";
import {Images} from "./images/images";
import {useTranslation} from "react-i18next";
import LinkToPage from "../navigation/LinkToPage";

function Footer (){
  const {t, i18n} = useTranslation()
  const [lngMenu, setLngMenu] = useState(false)
  
  const locales = {
    en: {title: "English"},
    bg: {title: "Bulgarian"},
  };
  
  return(
     <div className="Footer G-Container">
       
       <div className="footerCont">
          <div className="footerBlock G-flex">
  
            <div className="leftSide G-flex-Column">
              <Link to="/home" className="linkLogo G-marginB-16"><img src={Images.logo} alt=""/></Link>
              
              <p className="infoText G-marginB-16"><TextInView text={"1343 Sofia Bulgaria, general Mihail Savov 16, ground floor"}/></p>
              
              <div className="phones G-flex G-marginB-16">
                <a href={`tel:+359878767780`} className="infoText G-marginR-16"><TextInView text={"+359 878 767780"}/></a>
                <a href={`tel:+35924343215`} className="infoText"><TextInView text={"+359 2 4343215"}/></a>
              </div>
  
              <a href={`mailto:office@bestelectric.eu`} className="infoText G-marginB-16"><TextInView text={"office@bestelectric.eu"}/></a>
  
              <div className="socialBlock G-flex G-marginB-16">
                <a href="/" className="socialLink G-marginR-16"><img src={Images.facebookIcon} alt=""/></a>
                <a href="/" className="socialLink"><img src={Images.instagramIcon} alt=""/></a>
              </div>
  
              <div className="lngBlock G-marginB-16 no-select">
    
                <div onClick={()=>{setLngMenu(prev=>!prev)}} className="mainLng G-flex-ACenter G-black G-16-400-Inter G-isInView">
                  {Object.keys(locales).map((el, index) => {
                    if (i18n.resolvedLanguage === el) {
                      return <span key={index}>{el.toUpperCase()}</span>;
                    }
                  })}
                  <svg className="G-transition-05" style={{transform: `rotateX(${lngMenu ? "180deg" : "0deg"})`}} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M4.33325 6.5L8.33325 10.5L12.3333 6.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
    
                <div style={{display: `${lngMenu ? "flex" : "none"}`}} className="lngMenu">
                  {Object.keys(locales).map((locale) => {
                    return (
                       <button className="G-black G-16-300-Inter" type="submit"
                               onClick={() => {
                                 i18n.changeLanguage(locale);
                                 setLngMenu(false);
                               }} key={locale}>{locales[locale].title}</button>
                    );
                  })}
                </div>
  
              </div>
  
              <button className="getInTouchBtn G-flex-ACenter">
                <TextInView className="G-marginR-8" text={t("main.btn2")}/>
                <img src={Images.arrowRight} alt=""/>
              </button>

            </div>
            
            
            <div className="rightSide G-flex ">
              
              <div className="links G-flex-Column">
                <Link className="link G-marginB-32" to="/home">
                  <LinkToPage text={t("main.link1")}/>
                </Link>
                <Link className="link G-marginB-32" to="/products">
                  <LinkToPage text={t("main.link2")}/>
                </Link>
                <Link className="link G-marginB-32" to="/carRent">
                  <LinkToPage text={t("main.link3")}/>
                </Link>
                <Link className="link G-marginB-32" to="/services">
                  <LinkToPage text={t("main.link4")}/>
                </Link>
                <Link className="link" to="aboutUs">
                  <LinkToPage text={t("main.link5")}/>
                </Link>
              </div>
              
              <div className="loginBlock G-flex-ACenter">
                <button className="signInBtn G-24-400-Nexa G-black"><TextInView text={t("main.link11")}/></button>
                <button className="loginBtn G-24-400-Nexa G-Green-Text"><TextInView text={t("main.link7")}/></button>
              </div>
  
              <button className="getInTouchBtn G-flex-ACenter">
                <TextInView className="G-marginR-8" text={t("main.btn2")}/>
                <img src={Images.arrowRight} alt=""/>
              </button>
            
            </div>
            
            
            
          </div>
       </div>
       
       <div className="termsCont ">
          <div className="termsBlock G-flex-ACenter-JBetween">
            <Link className="termsLink" to="/delivery&payment"><TextInView text={"Delivery and payment"}/></Link>
            
            <div className="rightGroup G-flex-ACenter">
              <p className="termsLink copyrightLink G-marginR-32"><TextInView text={"Copyright © BestElectric . All Rights Reserved."}/></p>
              <Link className="termsLink G-marginR-32" to="/termsOfUse"><TextInView text={"Terms of Use"}/></Link>
              <Link className="termsLink" to="/privacyPolicy"><TextInView text={"Privacy Policy"}/></Link>
            </div>
          </div>
       </div>
     </div>
  )
}

export default Footer