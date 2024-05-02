import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import {Images} from "./images/images";
import "./profileInvoices.scss";

function ProfileInvoices() {
  const {t, i18n} = useTranslation();
  
  const [invoicesDate, setInvoicesDate] = useState([
    {
      id        : 10011,
      issuedDate: "Mar 08, 2024",
      dueDate   : "Mar 23, 2024",
      items     : [
        {
          name : "Webasto Pure",
          count: 1,
        },
        {
          name : "Webasto Pure",
          count: 1,
        },
      ],
      totalPrice: 1500,
      status    : "Confirmed",
    },
    {
      id        : 10033,
      issuedDate: "Mar 06, 2024",
      dueDate   : "Mar 21, 2024",
      items     : [
        {
          name : "Webasto Pure",
          count: 1,
        },
        {
          name : "Webasto Pure",
          count: 1,
        },
      ],
      totalPrice: 1500,
      status    : "Overdue",
    },
    {
      id        : 10022,
      issuedDate: "Mar 07, 2024",
      dueDate   : "Mar 27, 2024",
      items     : [
        {
          name : "Webasto Pure",
          count: 1,
        },
        {
          name : "Webasto Pure",
          count: 1,
        },
      ],
      totalPrice: 1500,
      status    : "Pending",
    },
  ]);
  
  const [sortOrder, setSortOrder] = useState("asc");
  
  const handleSort = () => {
    const sortedData = [...invoicesDate].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    
    setInvoicesDate(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  
  return (
     <div className="ProfileInvoices">
       <p className="miniHeader G-marginB-32 G-24-400-Inter G-black no-select"><TextInView
          text={t("invoice.miniHeader1")}/></p>
       
       <div className="invoicesCont G-flex ">
         
         
         <table className="headerCont">
           <thead>
           <tr>
             <th>
               <button className="sectionHeaderBtn G-flex-ACenter">
                 <TextInView className={"G-14-400-Inter G-black no-select GMarginR4"}
                             text={t("invoice.sectionHeader1")}/>
                 <div className="G-flex-ACenter G-flex-Column">
                   <img src={Images.arrowUp} alt=""/>
                   <img src={Images.arrowDown} alt=""/>
                 </div>
               </button>
             </th>
             
             <th>
               <button className="sectionHeaderBtn G-flex-ACenter">
                 <TextInView className={"G-14-400-Inter G-black no-select GMarginR4"}
                             text={t("invoice.sectionHeader2")}/>
                 <div className="G-flex-ACenter G-flex-Column">
                   <img src={Images.arrowUp} alt=""/>
                   <img src={Images.arrowDown} alt=""/>
                 </div>
               </button>
             </th>
             
             <th>
               <button className="sectionHeaderBtn G-flex-ACenter">
                 <TextInView className={"G-14-400-Inter G-black no-select GMarginR4"} text={"#"}/>
                 <div className="G-flex-ACenter G-flex-Column">
                   <img src={Images.arrowUp} alt=""/>
                   <img src={Images.arrowDown} alt=""/>
                 </div>
               </button>
             </th>
             
             <th>
               <button className="sectionHeaderBtn G-flex-ACenter">
                 <TextInView className={"G-14-400-Inter G-black no-select"} text={t("invoice.sectionHeader3")}/>
               </button>
             </th>
             
             <th>
               <button className="sectionHeaderBtn G-flex-ACenter">
                 <TextInView className={"G-14-400-Inter G-black no-select"} text={t("invoice.sectionHeader4")}/>
               </button>
             </th>
             
             <th>
               <button className="sectionHeaderBtn G-flex-ACenter">
                 <TextInView className={"G-14-400-Inter G-black no-select"} text={t("invoice.sectionHeader5")}/>
               </button>
             </th>
           </tr>
           </thead>
           
           <tbody>
           {invoicesDate.map((el, index) => {
             let x = ""
             el.items.map((el)=>{
               return x = x+ `${el.count}x ${el.name} `
             })
             return (
                <tr key={index}>
                  <td><TextInView text={el.issuedDate} className="G-14-300-Inter G-black no-select"/></td>
                  <td><TextInView text={el.dueDate} className="G-14-300-Inter G-black no-select"/></td>
                  <td><TextInView text={el.id} className="G-14-300-Inter G-black no-select"/></td>
                  <td><TextInView text={x} className={"itemsPrg G-14-300-Inter G-black no-select"}/></td>
                  <td><TextInView text={`BGN ${el.totalPrice}`} className="G-14-300-Inter G-black no-select"/></td>
                  {el.status === "Confirmed" &&
                    <td className="status1 G-flex-ACenter">
                      <img src={Images.checkIcon} className="GMarginR4" alt=""/>
                      <TextInView text={t("invoice.status1")}/>
                    </td>
                  }
  
                  {el.status === "Overdue" &&
                     <td className="status2 G-flex-ACenter">
                       <TextInView text={t("invoice.status2")}/>
                     </td>
                  }
  
                  {el.status === "Pending" &&
                     <td className="status3 G-flex-ACenter">
                       <TextInView text={t("invoice.status3")}/>
                     </td>
                  }
                </tr>
             );
           })}
           </tbody>
         
         
         </table>
         
         <div className="itemsCont G-flex G-flex-wrap">
           {invoicesDate.map((el, index)=>{
             let x = ""
             el.items.map((el)=>{
               return x = x+ `${el.count}x ${el.name} `
             })
             return(
                <div className="itemBlock" key={index}>
                    <button className="sectionHeaderBtn G-flex-ACenter">
                      <TextInView className={"G-14-400-Inter G-black no-select GMarginR4"}
                                  text={t("invoice.sectionHeader1")}/>
                      <div className="G-flex-ACenter G-flex-Column">
                        <img src={Images.arrowUp} alt=""/>
                        <img src={Images.arrowDown} alt=""/>
                      </div>
                    </button>
  
                  <TextInView text={el.issuedDate} className="G-14-300-Inter G-black no-select G-marginB-16"/>
                  
                  
                    <button className="sectionHeaderBtn G-flex-ACenter">
                      <TextInView className={"G-14-400-Inter G-black no-select GMarginR4"}
                                  text={t("invoice.sectionHeader2")}/>
                      <div className="G-flex-ACenter G-flex-Column">
                        <img src={Images.arrowUp} alt=""/>
                        <img src={Images.arrowDown} alt=""/>
                      </div>
                    </button>
                  <TextInView text={el.dueDate} className="G-14-300-Inter G-black no-select G-marginB-16"/>
  
                  <button className="sectionHeaderBtn G-flex-ACenter">
                      <TextInView className={"G-14-400-Inter G-black no-select GMarginR4"} text={"#"}/>
                      <div className="G-flex-ACenter G-flex-Column">
                        <img src={Images.arrowUp} alt=""/>
                        <img src={Images.arrowDown} alt=""/>
                      </div>
                    </button>
                  <TextInView text={el.id} className="G-14-300-Inter G-black no-select G-marginB-16"/>
  
                  <button className="sectionHeaderBtn G-flex-ACenter">
                      <TextInView className={"G-14-400-Inter G-black no-select"} text={t("invoice.sectionHeader3")}/>
                    </button>
                  <TextInView text={x} className={"itemsPrg G-14-300-Inter G-black no-select G-marginB-16"}/>
  
                  <button className="sectionHeaderBtn G-flex-ACenter">
                      <TextInView className={"G-14-400-Inter G-black no-select"} text={t("invoice.sectionHeader4")}/>
                    </button>
                  <TextInView text={`BGN ${el.totalPrice}`} className="G-14-300-Inter G-black no-select G-marginB-16"/>
  
                  <button className="sectionHeaderBtn G-flex-ACenter">
                      <TextInView className={"G-14-400-Inter G-black no-select"} text={t("invoice.sectionHeader5")}/>
                    </button>
  
                  {el.status === "Confirmed" &&
                     <div className="status1 G-flex-ACenter">
                       <img src={Images.checkIcon} className="GMarginR4" alt=""/>
                       <TextInView text={t("invoice.status1")}/>
                     </div>
                  }
  
                  {el.status === "Overdue" &&
                       <TextInView className={"status2 G-flex-ACenter"} text={t("invoice.status2")}/>
                  }
  
                  {el.status === "Pending" &&
                       <TextInView className={"status3 G-flex-ACenter"} text={t("invoice.status3")}/>
                  }
                </div>
             )
           })}
         </div>
       
       
       </div>
     </div>
  );
}

export default ProfileInvoices;