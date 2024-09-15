import React, { useContext, useEffect, useState } from "react";
import Catagory from "../../common/Catagory";
import Heading from "../../ui/Heading";
import { ProductContext } from "../../context/Alldata";

const AllCatagory = () => {
    const { products } = useContext(ProductContext);
    const [filterCatagoey, setFilterCatagoey] = useState([])
    useEffect(() => {
      let allCatagory = products.map((cur)=>cur.category);
      let catagory_data= [...new Set(allCatagory)].slice(0,7)
      setFilterCatagoey(catagory_data);     
    }, [products]);
    
  return (
    <section className="cc sectio_margin">
      <div className="container">
        <Heading heading={"Catagory"} />
        <h2 className="headingsection mt-2">Browse By Catagory</h2>
        <div className="catagory_main_section mt-3">
         {
            filterCatagoey.map((cur,id)=>{
                return  <Catagory catagory={cur} key={id} aos={"flip-down"}/>
            })
         }
        </div>
        <p className="shl catagory_margin"></p>
      </div>
    </section>
  );
};

export default AllCatagory;
