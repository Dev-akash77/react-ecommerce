import React, { useContext, useState } from "react";
import "../Product/product.css";
import { ProductContext } from "../../context/Alldata";

const Search = () => {
  const {
    filterProducts,
    handleSearchChange,
    searchTerm,
    filter,
    handleFilterChange,
  } = useContext(ProductContext); //! State for the search input and filter option

  return (
    <div className="cc search_main">
      <div className="container fcb">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search"
        />
        <div className="total_items">
          Total <span>{filterProducts.length}</span> Products{" "}
        </div>
        <select
          name="FilterBy"
          value={filter}
          onChange={handleFilterChange}
          className="filter_products"
        >
          <option value="All">Filter Price</option>
          <option value="low_high">Price: Low to High</option>
          <option value="high_low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
