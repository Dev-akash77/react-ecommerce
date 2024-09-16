import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/Alldata";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRotate } from "react-icons/fa6";
import ProductsImages from "../common/ProductsImages";
import Heading from "../ui/Heading";
import Card from "../common/Card";
import { FaShoppingCart } from "react-icons/fa";
import Star from "../common/Star";

const ProductDetails = () => {
  const { products, quantity, increment, incrDcr, setQuantity, setIncrDcr,handleAddToCart } =
    useContext(ProductContext); //! here is  all Data
  const [singleProduct, setSingleProduct] = useState([]); //! here is single products
  const [relatedData, setRelatedData] = useState([]); //! related products data
  const { id } = useParams(); //! products id dynamic rute

  useEffect(() => {
    //! filter singel products data
    const filterProducts = products.filter((cur) => cur.id == id);
    setSingleProduct(...filterProducts);
    //! quantity one in single page
    setQuantity(1);
    //! remove incr and decr active when visit new page
    setIncrDcr("");
  }, [id]);

  //! add active class on increment and decriment

  useEffect(() => {
    //! filter related  products data
    const related_product = products
      .filter((cur) => cur.category == singleProduct.category && cur.id!==id)
      .slice(0, 4);
      
    setRelatedData(related_product);
  }, [singleProduct]);

  return (
    <main className="pagestart cc">
      <div className="container main_single">
        <p className="p_c_g">
          Product / {singleProduct.category} / <span>{singleProduct.name}</span>
        </p>

        <div className="images_details_main fcb gap-2">
          <div className="products_image">
            <ProductsImages
              images={singleProduct.images}
              name={singleProduct.name}
              bestseler={singleProduct.best_seller}
              newP={singleProduct.new_product}
            />
          </div>
          <div className="products_details">
            <h2 className="products_name spn">{singleProduct.name}</h2>
            <div className="avb raiting f gap-1">
              Ratings : 
              <div>
                <Star
                  rating={singleProduct.ratings}
                  reviews={singleProduct.reviews}
                />
              </div>
            </div>
            <div className="op">
              MRP :{" "}
              <span className="original_price">
                ₹{singleProduct.original_price}
              </span>
            </div>
            <div className="single_price_main f mt">
              <p className="price">₹{singleProduct.discount_price}</p>
              <p className="sd">
                (
                {(
                  ((singleProduct.original_price -
                    singleProduct.discount_price) /
                    singleProduct.original_price) *
                  100
                ).toFixed(0)}
                % off)
              </p>
            </div>
            <p className="avb mt">
              Available : <span>{singleProduct.stock}</span>
            </p>
            <p className="avb mt">
              ID : <span>{id}</span>
            </p>
            <p className="avb mt">
              Brand : <span>{singleProduct.brand}</span>
            </p>
            <p className="avb mt">
              Customar Review : <span>{singleProduct.reviews}</span>
            </p>
            <div className="description_main">
              <p>{singleProduct.description}</p>
            </div>
            <p className="shl"></p>
            <div className="idb f gap-3">
              <div className="idc pidc f">
                <p
                  className={`dicrement cc ${incrDcr == "-" && "activeid"}`}
                  onClick={() => {
                    increment("-");
                  }}
                >
                  -
                </p>
                <p className="quantity cc">{quantity}</p>
                <p
                  className={`increment cc ${incrDcr == "+" && "activeid"}`}
                  onClick={() => {
                    increment("+");
                  }}
                >
                  +
                </p>
              </div>
              <div className="bynow fc gap-1" onClick={()=>{handleAddToCart(id,quantity,singleProduct.discount_price)}}>
                <FaShoppingCart />
                Add To Cart
              </div>
            </div>
            <div className="delevary_main c">
              <div className="delevary f">
                <TbTruckDelivery />
                Free Delivery
              </div>
              <div className="delevary f">
                <FaRotate />
                Return Delivery
              </div>
            </div>
          </div>
        </div>

        <div className="related_items_main pagestart">
          <Heading heading={"Related Item"} />
          <div className="related_products flashSale_card_main">
            {relatedData.map((cur, index) => {
              return <Card products={cur} key={index} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
