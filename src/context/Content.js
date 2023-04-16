import React, { useState } from "react";
import { Cart } from "./Cart";
import { AppContext } from "./context";
import { Products } from "./Products";

export const Content = () => {
  var [products, setproducts] = useState([]);
  var [cartData, setcartData] = useState([]);
  var x = 100;
  const getProducts = (products) => {
    console.log(products);
    setproducts(products);
  };
  const addToCart = (id) => {
    products = products.filter((p) => {
      return p.id === id;
    });
    setcartData([...cartData, products[0]]);
  };
  return (
    <div>
      <AppContext.Provider value={x}>
        <Cart cart ={cartData} />
        <Products getProducts={getProducts} addToCart={addToCart} />
      </AppContext.Provider>
    </div>
  );
};
