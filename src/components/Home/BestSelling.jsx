import React, { useContext, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Heading from "../../ui/Heading";
import Card from "../../common/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/Alldata";

const BestSelling = () => {
  const navigate = useNavigate();
  const { filter_products } = useContext(ProductContext);
  const [sellingFilter, setSellingFilter] = useState([]); // Best seller products
  const handleLinkClick = () => {
   window.scrollTo(0, 0); // Scroll to top
   navigate(`/product`);
 };
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with custom duration
    const selling_products_filter = filter_products("best_seller", true);
    setSellingFilter(selling_products_filter.reverse().slice(0, 4));
  }, []);

  return (
    <div className="section_margin cc mt-5">
      <div className="container">
        <Heading heading={"This Products"} />
        <div className="fcb" data-aos="fade-up">
          <h2 className="headingsection">Best Selling Products</h2>
          <div className="addtocart_main cc">
            <p className="view_all" onClick={handleLinkClick}>
              View All
            </p>
          </div>
        </div>
        <div className="flashSale_card_main mt-2">
          {sellingFilter.map((cur) => (
            <div key={cur.id} data-aos="fade-up">
              <Card products={cur} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
