import React from "react";
import "./profileOrders.scss";
import {useTranslation} from "react-i18next";
import TextInView from "../../../components/TextInView/TextInView";
import {Images} from "./images/images";
import OrderBlock from "./orderBlock";

function ProfileOrders() {
  const {t, i18n} = useTranslation();
  
  const date1 = {
    id: 12321,
    status: [
      {
        name: "status1",
        date: "17/09/2024",
        estimateDays: null
      },
      {
        name: "status2",
        date: "18/09/2024",
        estimateDays: null
      },
      {
        name: "status3",
        date: null,
        estimateDays: "1"
      },
      {
        name: "status4",
        date: null,
        estimateDays: null
      }
    ],
    orderInfo: {
      pickUpDate: "14:40 17/09/2023 ",
      dropOffEstimate: "7",
      insurance: "Fragile insurance",
      pickUpLocation: "Hristo Botev Str. 14, Sofia",
      dropOffLocation: "Hristo Botev Str. 14, Sofia"
    },
    items: [
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      }
    ]
  }
  
  const date2 = {
    id: 12345,
    status: [
      {
        name: "status1",
        date: "17/09/2024",
        estimateDays: null
      },
      {
        name: "status2",
        date: "18/09/2024",
        estimateDays: null
      },
      {
        name: "status3",
        date: "18/09/2024",
        estimateDays: null
      },
      {
        name: "status4",
        date: "18/09/2024",
        estimateDays: null
      }
    ],
    orderInfo: {
      pickUpDate: "14:40 17/09/2023 ",
      dropOffEstimate: "7",
      insurance: "Fragile insurance",
      pickUpLocation: "Hristo Botev Str. 14, Sofia",
      dropOffLocation: "Hristo Botev Str. 14, Sofia"
    },
    items: [
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      },
      {
        name: "Webasto Pure",
        img: Images.chargerImg,
        count: 1,
        price: 17000
      }
    ]
  }
  
  
  return (
     <div className="ProfileOrders">
       <p className="miniHeader G-24-400-Inter G-black no-select G-marginB-32"><TextInView
          text={t("orders.miniHeader1")}/></p>
     
       <OrderBlock date={date1}/>
       <OrderBlock date={date2}/>


     </div>
  );
}

export default ProfileOrders;