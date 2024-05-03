import React, {useState} from "react";
import "./profileServices.scss";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import {Images} from "./images/images";

function ProfileServices() {
  const {t, i18n} = useTranslation();
  
  const date = [
    {
      id     : 21341,
      date   : "10.04.2024",
      status : "New",
      number : "+359 123 1231212",
      message: "I've checked the monitoring app and haven't noticed any error messages. I've also tried cleaning the panels myself to remove any dust or debris, but that hasn't made a difference.",
    },
    {
      id     : 21342,
      date   : "10.04.2024",
      status : "In progress",
      number : "+359 123 1231212",
      message: "I've checked the monitoring app and haven't noticed any error messages. I've also tried cleaning the panels myself to remove any dust or debris, but that hasn't made a difference.",
    },
    {
      id     : 21343,
      date   : "10.04.2024",
      status : "Pending",
      number : "+359 123 1231212",
      message: "I've checked the monitoring app and haven't noticed any error messages. I've also tried cleaning the panels myself to remove any dust or debris, but that hasn't made a difference.",
    },
    {
      id          : 21344,
      date        : "10.04.2024",
      status      : "Completed",
      number      : "+359 123 1231212",
      message     : "I've checked the monitoring app and haven't noticed any error messages. I've also tried cleaning the panels myself to remove any dust or debris, but that hasn't made a difference.",
      completePrg1: "We're happy to report that our technician has successfully [explain the repair, e.g., replaced the faulty connection, repaired the inverter component].  Your system is now back up and running at optimal efficiency.",
      completePrg2: "We recommend monitoring your production over the next few days to ensure everything is functioning as expected.  In the meantime, if you have any questions or require further assistance, please don't hesitate to contact us.",
    },
    {
      id        : 21345,
      date      : "10.04.2024",
      status    : "Canceled",
      number    : "+359 123 1231212",
      message   : "I've checked the monitoring app and haven't noticed any error messages. I've also tried cleaning the panels myself to remove any dust or debris, but that hasn't made a difference.",
      cancelDate: {
        header: "Unfortunately, after careful examination of the problem, we are forced to refuse you repair for the following reasons:",
        dotted: [
          "The warranty on your system has expired.",
        ],
      },
    },
  ];
  
  const [newApplication, setNewApplication] = useState(false)
  const [inputVal1, setInputVal1] = useState("") // New Application Number Input Value
  const [inputVal2, setInputVal2] = useState("") // New Application TextArea Input Value
  
  
  return (
     <div className="ProfileServices">
  
       {newApplication &&
        <div className="applicationDialogCont">
          <div onClick={()=>{setNewApplication(false)}} className="backgroundBlock"></div>
        
          <div className="dialogBlock">
            
            <div className="closeBtnBlock G-marginB-16 G-flex">
              <button onClick={()=>{setNewApplication(false)}} className="closeBtn"><img src={Images.xCloseIcon} alt=""/></button>
            </div>
  
            <p className="header G-20-400-Nexa G-marginB-16 G-black no-select"><TextInView text={t("invoice.miniHeader3")}/></p>
  
            <input className="G-input G-20-300-Inter G-marginB-16" value={inputVal1} onChange={(event)=>setInputVal1(event.target.value)} type="number" placeholder={"+359"}/>
  
            <textarea className="G-input G-marginB-16 G-20-300-Inter" value={inputVal2} onChange={(event)=>setInputVal2(event.target.value)} name="applicationMessage" cols="30" rows="10" placeholder={"I've checked the monitoring app and haven't noticed any error messages. I've also tried cleaning the panels myself to remove any dust or debris, but that hasn't made a difference."}></textarea>
            
            <button className="sendBtn G-greenBtn G-white G-20-400-Nexa"><TextInView text={t("invoice.btn3")}/></button>
            
          </div>
          
        </div>
       }
       
       
       <div className="headerBlock G-marginB-24 G-flex-ACenter-JBetween">
         <p className="miniHeader G-24-400-Inter G-black no-select"><TextInView text={t("invoice.miniHeader2")}/></p>
         <button onClick={()=>setNewApplication(true)} className="G-greenBtn G-white G-20-300-Nexa no-select G-flex-ACenter">
           <img src={Images.plusIcon} className="G-marginR-8" alt=""/>
           <TextInView text={t("invoice.btn1")}/>
         </button>
       </div>
       
       
       {date.map((el, index) => {
         return (
            <div key={index} className="applicationBlock G-marginB-16">
              
              <div className="G-flex-ACenter-JBetween G-flex-wrap">
                <div className="G-flex-ACenter G-marginB-16 G-marginR-32">
                  <TextInView className={"grayText G-16-400-Inter no-select G-marginR-16"}
                              text={t("invoice.application")}/>
                  <TextInView className={"G-16-400-Inter no-select G-black"} text={`#${el.id}`}/>
                </div>
                
                <div className="G-flex-ACenter G-marginB-16">
                  <TextInView text={el.date} className={"G-16-400-Inter no-select G-black G-marginR-16"}/>
                  <p className={`status ${el.status === "In progress" ? "InProgress" : el.status}`}>
                    <TextInView
                       className={"G-14-400-Inter G-white no-select"}
                       text={
                          el.status === "New" && t("invoice.status4") ||
                          el.status === "In progress" && t("invoice.status5") ||
                          el.status === "Pending" && t("invoice.status6") ||
                          el.status === "Completed" && t("invoice.status7") ||
                          el.status === "Canceled" && t("invoice.status8")
                       }
                    />
                  </p>
                </div>
              
              </div>
              
              <p className="telNumber G-16-300-Inter G-marginB-16 no-select G-black">
                <TextInView text={el.number}/>
              </p>
              
              <p className="messagePrg G-16-300-Inter G-marginB-16 no-select G-black">
                <TextInView text={el.message}/>
              </p>
  
              {el.completePrg1 &&
                <div className="completeMessage G-marginB-16">
                  {el.completePrg1 && <p className="G-16-300-Inter no-select G-black"><TextInView text={el.completePrg1}/></p>}
                  {el.completePrg2 && <p className="G-16-300-Inter no-select G-black"><TextInView text={el.completePrg2}/></p>}
                  {el.completePrg3 && <p className="G-16-300-Inter no-select G-black"><TextInView text={el.completePrg3}/></p>}
                </div>
              }
  
              {el.cancelDate &&
                <div className="canceledMessageBlock">
                  <p className="G-16-300-Inter no-select G-black"><TextInView text={el.cancelDate.header}/></p>
                  <ul>
                    {el.cancelDate.dotted.map((el, index)=>{
                      return(
                         <li key={index}><TextInView className={"G-16-400-Inter G-black no-select"} text={el}/></li>
                      )
                    })}
                    
                  </ul>
                </div>
              }
  
              {el.status === "New" &&
                <button className="CancelBtn"><TextInView className={"G-20-400-Nexa G-black no-select"} text={t("invoice.btn2")}/></button>
              }
              
            </div>
         );
       })}
     
     
     </div>
  );
}

export default ProfileServices;