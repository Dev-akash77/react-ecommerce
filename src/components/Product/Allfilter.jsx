import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/Alldata";
import Button from "../../ui/Button";
const Allfilter = () => {
  const { allCatagory, allCatagoryNames, handleActiveCatagory, allBrands,handleBrandChange,brandName,handleClear} =
    useContext(ProductContext);

  return (
    <div className="kk">
      <div className="catagory_main_prorduct">
        <h4>Catagory</h4>
        <ul className="catagaory_data c">
          {allCatagory.map((cur, id) => {
            return (
              <li
                key={id}
                className={`catagory_name ${
                  allCatagoryNames == cur && "underline"
                }`}
                onClick={() => {
                  handleActiveCatagory(cur);
                }}
              >
                {cur}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="catagory_main_prorduct">
        <h4 className="mt-1">Brand</h4>
        <select
          name="FilterBy"
          value={brandName}
          onChange={handleBrandChange}
          className="filter_products filter_brands"
        >
          {allBrands.map((cur, id) => {
            return (
              <option value={cur} key={id}>
                {cur}
              </option>
            );
          })}
        </select>
      </div>
      <div className="clear_filtern mt-3" onClick={handleClear}>
        <Button text={"CLEAR FILTER"}/>
      </div>
    </div>
  );
};

export default Allfilter;
