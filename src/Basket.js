import React from "react";
import './Basket.css';
import { useStateValue } from "./StateProvider";
import Checkoutproduct from "./Checkoutproduct";
import reducer, { getBasketTotal } from "./reducer";





const Basket = () => {
  const [{basket}, dispatch]= useStateValue();
  return (
 
<div className="Basket">
  <div className="left">
    <div className="ad"><img src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="" /></div>
    <h1>YOUR SHOPPING BASKET</h1>
   
    {
        basket.map(item =>(
         <Checkoutproduct
         title= {item.title}
         image= {item.image}
         rating= {item.rating}
         />

        ))

        }
    
   
  </div>
  <div className="right">

    <h1>SUBTOTAL={getBasketTotal(basket)}</h1>
  </div>

     


  </div>);
};

export default Basket;
