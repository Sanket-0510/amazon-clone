import React from "react";

import './product1.css';
import { useStateValue } from "./StateProvider";

const Product1 = ({title,id, image,price,rating}) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
<>

    <div className="sec1">
       <div>
        <h4>
         {title}
        
        </h4>
        </div>
        <div><span> <small>$</small><strong>{price}</strong>  </span> </div>
        <div className="ratin">
          {Array(rating)
           .fill()
           .map((_, i)=>(
            <p>⭐</p>
           ))}
           
        </div>
     <div className="book-button">
       
         <div><img src={image} alt="" /></div>
         <button onClick={addToBasket}>Add to Basket</button>
        
      </div>
   
   
      
</div>
</>
  );
};

export default Product1;
