import React from "react";
import {Outlet} from "react-router";

function ProductsCont (){
  return(
     <div className="ProductsCont">
        <Outlet/>
     </div>
  )
}

export default ProductsCont