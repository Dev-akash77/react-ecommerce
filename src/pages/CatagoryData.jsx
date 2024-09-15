import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/Alldata";
import Heading from "../ui/Heading";
import Card from "../common/Card";

const CatagoryData = () => {
  const { cg } = useParams();
  const { filter_products } = useContext(ProductContext);
  const [filterData, setFilterData] = useState([]); //! filter data

  useEffect(() => {
    let catagoryWiseData = filter_products("category", cg);
    setFilterData(catagoryWiseData);
  }, [cg]);
  return (
    <div className="pagestart cc">
      <div className="container mt-2">
        <p className="p_c_g">
          Home / Product / Category / <span>{cg}</span>
        </p>
        <div className="f mt-3">
          <Heading heading={`${cg}`} />
        </div>
        <div className="flashSale_card_main mb mt-5">
          {
            filterData.map((cur)=>{
              return <Card products={cur} key={cur.id}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default CatagoryData;
