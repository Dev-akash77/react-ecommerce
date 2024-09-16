import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Alldata";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Total from "./Total";
const Cart = () => {
  const { incrDcr, cartItems, products, handleRemoveItem, cartIncr } =
    useContext(ProductContext); // All context data
  const [allCartItems, setAllCartItems] = useState([]);
  const navigate = useNavigate();
  const handleLinkClick = (productId) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/product/${productId}`);
  };
  useEffect(() => {
    let cartProducts = cartItems.map((cur) => {
      const product = products.find((prod) => prod.id == cur.id);
      if (product) {  
        return { ...product, quantity: cur.quantity,price:(cur.price * cur.quantity)};
      }
      return null;
    });
    
    setAllCartItems(cartProducts);
  }, [cartItems]);
   console.log(cartItems);

  return (
    <div className="pagestart cc">
      <div className="container">
        <p className="p_c_g mt-2">
          Home / <span>Cart</span>
        </p>
        {allCartItems.length > 0 ? (
          <div className="cart_main sectio_margin c gap-2">
            {allCartItems.map((cur) => {     
              return (
                <div className="cart_data_main fcb" key={cur.id}>
                  <div
                    className="cart_img_name gap-1"
                    onClick={() => handleLinkClick(cur.id)}
                  >
                    <img src={cur.images[0].img} alt={cur.name} />
                    {/* <p className="cart_products_name">{cur.name}</p> */}
                  </div>
                  <p className="cart_catagory">{cur.category}</p>
                  <p className="cart_price">₹{cur.price}</p>{" "}
                  {/* Total price based on quantity */}
                  <div className="idc cidc f">
                    <p
                      className={`dicrement cc cdec ${
                        incrDcr === "-" && "activeid"
                      }`}
                      onClick={() => cartIncr("-", cur.id)}
                    >
                      {/* Decrement cart quantity */}-
                    </p>
                    <p className="quantity cc">{cur.quantity}</p>
                    <p
                      className={`increment cc ${
                        incrDcr === "+" && "activeid"
                      }`}
                      onClick={() => cartIncr("+", cur.id)}
                    >
                      {/* Increment cart quantity */}+
                    </p>
                  </div>
                  <div
                    className="cart_remove fc"
                    onClick={() => handleRemoveItem(cur.id)}
                  >
                    <MdDelete className="remove_icn" /> Remove
                  </div>
                </div>
              );
            })}
            <div className="sectio_margin total_main">
              <Total data={allCartItems}/>
            </div>
          </div>
        ) : (
          <div className="no_products cc gap-4">
            <p className="no_product_text">No products here</p>
            <Link to="/product">
              <Button text={"Shop Now"} />
            </Link>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Cart;
