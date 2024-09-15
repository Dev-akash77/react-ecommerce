import React, { useContext, useEffect, useState } from "react";
import Heading from "../../ui/Heading";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/Alldata";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Card from "../../common/Card";
const OurProducts = () => {
  const [ourProducts, setOurProducts] = useState([]); //! our products data
  const { products } = useContext(ProductContext);
  const navigate= useNavigate() 
  const handleLinkClick = () => {
   window.scrollTo(0, 0); // Scroll to top
   navigate(`/product`);
  }
  useEffect(() => {
    //! price short data
    const shortProducts = products.map((cur) => {
      return cur.discount_price;
    });
    const sortPrice = shortProducts.sort((a, b) => a - b).slice(0, 12); //! sort price
    let filterProducts = products.filter((curElem) => {
      //! here is sorting data
      return sortPrice.some(
        (curProducts) => curProducts === curElem.discount_price
      );
    });
    setOurProducts(filterProducts);
    AOS.init({ duration: 1500 }); // Initialize AOS with custom duration
  }, []);

  return (
    <div className="sectio_margin cc">
      <div className="container">
        <Heading heading={"Our Products"} />
        <div className="fcb">
          <h2 className="headingsection">Explore Our Products</h2>
          <div className="addtocart_main cc">
            <p className="view_all" onClick={handleLinkClick}>
              View All
            </p>
          </div>
        </div>
        <div className="flashSale_card_main mt-2">
          {ourProducts.map((cur) => {
            return <Card products={cur} key={cur.id} aos={"zoom-in-up"}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
