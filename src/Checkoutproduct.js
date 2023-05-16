import React from "react";
import './heckoutProduct.css';
import { StateProvider } from "./StateProvider";
import reducer from "./reducer";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({id,image,price,rating,title}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeProduct = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
           item :
           { id:id,
             title:title,
             image:image,
             price:price,
             rating:rating,
            },
           
        
        
        });
    };
  return<div>
    <div className="basket-product">
     <div className="basket-image">  <img src={image} alt="" />
     </div>
   <div className="info"><div><h3>{title}</h3></div>
   <div>{price}</div>
   <div>{Array(rating).fill().map(()=>( <p>star</p> ))}</div>
   <button onClick={removeProduct}>Remove From Basket</button></div>
    
 
 </div>
 </div>;
};

export default CheckoutProduct;
