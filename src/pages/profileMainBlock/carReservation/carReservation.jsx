import React, {useEffect, useState} from "react";
import "./carReservation.scss"
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import {Link} from "react-router-dom";
import {Images} from "./images/images.js";



function CarReservation (){
  const {t, i18n} = useTranslation();
  
  const [licenseNumber, setLicenseNumber] = useState("")
  const [licenseFaceImg, setLicenseFaceImg] = useState(null)
  const [licenseBackImg, setLicenseBackImg] = useState(null)
  const [licenseDate, setLicenseDate] = useState(null)
  const [licenseStep, setLicenseStep] = useState(false)
  
  
  
  useEffect(()=>{
    if (licenseDate){
      setLicenseStep(true)
    }
  }, [])
  
  function handleAddLicense (){
    if (licenseFaceImg && licenseBackImg && licenseNumber.length > 5){
      setLicenseDate({
        faceImg: licenseFaceImg,
        backImg: licenseBackImg,
        licenseNumber: licenseNumber
      })
      setLicenseStep(true)
    }
  }
  
  function handleLicenseFaceImg (e){
    let imgFile = e.target.files[0];
    if (imgFile) {
      let imgBlob = new Blob([imgFile], { type: imgFile.type });
      setLicenseFaceImg(URL.createObjectURL(imgBlob));
    }
  }
  
  function handleLicenseBackImg (e){
    let imgFile = e.target.files[0];
    if (imgFile) {
      let imgBlob = new Blob([imgFile], { type: imgFile.type });
      setLicenseBackImg(URL.createObjectURL(imgBlob));
    }
  }
  
  return(
     <div className="CarReservation">
       <p className="miniHeader G-marginB-32 G-24-400-Inter G-black no-select"><TextInView text={t("profile.miniHeader5")}/></p>
       {!licenseStep &&
          <div className="documentsBlock">
     
            <div className="headerBlock G-marginB-32">
              <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-8"><TextInView text={t("rent.miniHeader1")}/></p>
              <p className="underHeader G-16-300-Inter G-black no-select"><TextInView text={t("rent.underHeader11")}/> <Link to="/privacyPolicy"><TextInView text={t("rent.privacy")}/></Link> <TextInView text={t("rent.underHeader12")}/></p>
            </div>
     
            <input className="input G-marginB-32 G-20-300-Inter" value={licenseNumber} onChange={(event)=>setLicenseNumber(event.target.value)} placeholder={t("rent.placeholder1")}  type="number"/>
     
            <div className="photosCont G-flex G-marginB-32">
              <label htmlFor="faceImg" className="photoBlock G-marginR-16">
                <div style={{backgroundImage: `url("${Images.faceImg}")`}} className="placeholderImg"></div>
                <input id="faceImg" type="file" accept="image/*" onChange={handleLicenseFaceImg}/>
                {licenseFaceImg &&
                   <div className="image" style={{backgroundImage: `url("${licenseFaceImg}")`}}></div>
                }
              </label>
       
              <label htmlFor="backImg" className="photoBlock">
                <div style={{backgroundImage: `url("${Images.backImg}")`}} className="placeholderImg"></div>
                <input id="backImg" type="file" accept="image/*" onChange={handleLicenseBackImg}/>
                {licenseBackImg &&
                   <div className="image" style={{backgroundImage: `url("${licenseBackImg}")`}}></div>
                }
              </label>
            </div>
     
            <button onClick={handleAddLicense} className="submitBtn G-greenBtn G-white G-20-400-Nexa no-select G-marginB-32"><TextInView text={t("rent.btn1")}/></button>
   
          </div>
       }
  
       {licenseStep && licenseDate &&
          <div className="licenseBlock G-flex">
            <div className="infoBlock">
              <p className="name G-24-400-Inter no-select G-black G-marginB-8"><TextInView text={"Name Surname"}/></p>
              <p className="number G-16-300-Inter no-select G-black G-marginB-8"><TextInView text={licenseDate.licenseNumber}/></p>
              <div className="G-flex">
                <div className="image G-marginR-8" style={{backgroundImage: `url("${licenseDate.faceImg}")`}}></div>
                <div className="image" style={{backgroundImage: `url("${licenseDate.backImg}")`}}></div>

              </div>
            </div>

            <div className="G-flex-ACenter">
              <button onClick={()=>{
                setLicenseStep(false)
                setLicenseFaceImg(licenseDate.faceImg)
                setLicenseBackImg(licenseDate.backImg)
                setLicenseNumber(licenseDate.licenseNumber)
              }} className="actionBtn G-marginR-8"><img src={Images.editIcon} alt=""/></button>
              <button onClick={()=>{
                setLicenseStep(false)
                setLicenseDate(null)
                setLicenseFaceImg(null)
                setLicenseBackImg(null)
                setLicenseNumber("")
              }} className="actionBtn"><img src={Images.deleteIcon} alt=""/></button>
            </div>
          </div>
       }
       
       
     </div>
  )
}

export default CarReservation