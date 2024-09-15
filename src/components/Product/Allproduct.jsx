import React, { useContext, useEffect } from "react";
import { CiShare1 } from "react-icons/ci";
import { ProductContext } from "../../context/Alldata";
import { useNavigate } from "react-router-dom";

const Allproduct = () => {
  const { filterProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleLinkClick = (productId) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/product/${productId}`);
  };
  return (
    <div
      className={`all_products_name_main ${
        filterProducts.length === 0 && "cc"
      }`}
    >
      {filterProducts &&
        filterProducts.map((cur) => {
          return (
            <div className="all_produvts cc gap-1" key={cur.id}>
              <div className="image_catagory cc">
                <img src={cur.images[0].img} alt="all filter" />
                <p className="cata_name">{cur.category}</p>
              </div>
              <div className="name_price fcb">
                <p className="p_name">{cur.name}</p>
                <p className="price">₹{cur.discount_price}</p>
              </div>
              <div className="overlay cc">
                <div
                  className="viewp cc"
                  onClick={() => {
                    handleLinkClick(cur.id);
                  }}
                >
                  <CiShare1 />
                </div>
                View Products
              </div>
            </div>
          );
        })}
      {filterProducts.length === 0 && (
        <div className="no_products">No Products Available</div>
      )}
    </div>
  );
};

export default Allproduct;
