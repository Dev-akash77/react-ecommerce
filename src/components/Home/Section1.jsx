import React, { useContext, useState } from "react";
import Heading from "../../ui/Heading";
import Card from "../../common/Card";
import { ProductContext } from "../../context/Alldata";
import {  useNavigate } from "react-router-dom";

const Section1 = () => {
 const {products}= useContext(ProductContext);
 const navigate= useNavigate()
 const handleLinkClick = () => {
  window.scrollTo(0, 0); // Scroll to top
  navigate(`/product`);
};
 let bestselerproducts = products.filter((cur)=>cur.best_seller==true).slice(0,4);
  return (
    <section className="cc sectio_margin">
      <div className="container">
        <Heading heading={"Today’s"} />
        <div className="heading_carasoul fcb" data-aos="fade-up">
          <h2 className="headingsection">Flash Sales</h2>
          <div className="addtocart_main cc">
          <p className="view_all" onClick={handleLinkClick}>View All Products</p>
        </div>
        </div>
        <div className="flashSale_card_main gap-2">
      
          {
            bestselerproducts.map((cur)=>{
              return <Card key={cur.id} products={cur} aos={"fade-up"}/>
            })
          }
        </div>
        <p className="shl mt-5"></p>
      </div>
    </section>
  );
};

export default Section1;
