import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Alldata";

const Total = ({ data }) => {
    const [allprice, setAllprice] = useState(null);
    const [sheppingPrice, setSheppingPrice] = useState(null);
    const [sheppingFee, setSheppingFee] = useState(50)
   useEffect(()=>{
    const productPrice = data.map((cur)=>{ //! add all price in single price
      return cur.price;
    });
    const totalProductPrice= productPrice.reduce((accum,cur)=>{ //! total price
        return accum+cur
    },0)
    const sheppingProductPrice= productPrice.reduce((accum,cur)=>{ //! shepping fee 
        return accum+cur
    },sheppingFee)
    setSheppingPrice(sheppingProductPrice)
    setAllprice(totalProductPrice);
   },[data]);
   console.log(allprice);
   
  return (
    <div className="total_main_section">
      <h3>Cart Total</h3>
      <div className="all_total_main c gap-3 mt-2">
        <div className="total_data c gap-1">
          <div className="total_data_price fcb">
            Subtotal: <p className="tp">₹{allprice}</p>
          </div>
          <hr />
        </div>

        <div className="total_data c gap-1">
          <div className="total_data_price fcb">
            Shipping: <p className="tp">₹{sheppingFee}</p>
          </div>
          <hr />
        </div>

        <div className="total_data c gap-1">
          <div className="total_data_price fcb">
            Total: <p className="tp">₹{sheppingPrice}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Total;
