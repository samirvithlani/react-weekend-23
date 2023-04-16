import React, { useContext } from "react";
import { AppContext } from "./context";

export const Cart = (props) => {
    var x = useContext(AppContext)
    console.log(x)
    console.log(props.cart?.length)
    
  return (
    <div>
      <h2>CART
        
        {props.cart?.length}    
      </h2>
    </div>
  );
};
