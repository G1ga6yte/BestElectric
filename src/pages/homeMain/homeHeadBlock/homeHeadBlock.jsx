import React, {useEffect, useRef} from "react";
import "./homeHeadBlock.scss"
import HomeMainVideo from "./homeMainVideo/homeMainVideo";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import {Images} from "./images/images";
import {Link} from "react-router-dom";


function HomeHeadBlock () {
  const {t, i18n} = useTranslation()
  
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
     <div className="HomeHeadBlock">
        <HomeMainVideo/>
       
       
       
        <div className="overBlock">
          <div></div>
          <p className="header G-header-72 G-white"><TextInView text={t("main.header")}/></p>
          <p className="underHeader G-underHeader-40 G-white"><TextInView text={t("main.underHeader")}/></p>
          <Link to="/services" className="G-greenBtn G-margin-Center">
            <TextInView text={t("main.btn1")} className={`G-20-300-Nexa G-white`}/>
            <img src={Images.arrowRight} alt=""/>
          </Link>
          
          <div ref={divRef} className="articlesCont">
            <div className="articlesBlock G-flex">
              {Array.from({length: 5}, (_, index)=>(
                <ArticleBlock header={t("main.artHeader1")} prg={t("main.artPrg1")} path={`/article/${index}`}/>
              ))}
            </div>
          </div>
          
          <div></div>
          
        </div>
     </div>
  )
}

export default HomeHeadBlock