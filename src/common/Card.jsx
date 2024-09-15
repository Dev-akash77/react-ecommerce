import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Star from "./Star";

const Card = ({ products,aos }) => {
  const navigate = useNavigate();

  const handleLinkClick = (productId) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/product/${productId}`);
  };

  return (
    <div className="card_main" data-aos={aos}>
      <div className="image_sale_view_main">
        <div className="btn_show_products_main fcb">
          <div className="products_discount">
            -{((products.original_price - products.discount_price) / products.original_price * 100).toFixed(0)}% off
          </div>
          <div className="show_products_main cc">
            <FaRegEye className="eye" onClick={() => handleLinkClick(products.id)} />
          </div>
        </div>
        <div className="pim cc">
          <img
            src={products.images[0].img}
            alt={products.name}
            onClick={() => handleLinkClick(products.id)}
            className="cc"
          />
        </div>
      </div>
      <h3 className="products_name" onClick={() => handleLinkClick(products.id)}>{products.name}</h3>
      <p className="card_description" onClick={() => handleLinkClick(products.id)}>{products.description}</p>
      <div className="price_main f gap-1">
        <p className="price">₹{products.discount_price}</p>
        <p className="original_price">₹{products.original_price}</p>
      </div>
      <div className="rating f">
       <Star rating={products.ratings} reviews={products.reviews}/>
      </div>
      {/* <div className="addtocart fc">Add to Cart</div> */}
    </div>
  );
};

export default Card;
