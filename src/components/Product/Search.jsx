import React, { useContext, useState } from "react";
import "../Product/product.css";
import { ProductContext } from "../../context/Alldata";
import { IoFilter } from "react-icons/io5";

const Search = () => {
  const {
    filterProducts,
    handleSearchChange,
    searchTerm,
    filter,
    handleFilterChange,
    handleFilterOpen
  } = useContext(ProductContext); //! State for the search input and filter option
  return (
    <div className="cc search_main">
      <div className="container s_p_f">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search all_filter_items"
        />
        <div className="total_items all_filter_items">
          Total <span>{filterProducts.length}</span> Products{" "}
        </div>
        <select
          name="FilterBy"
          value={filter}
          onChange={handleFilterChange}
          className="filter_products all_filter_items"
        >
          <option value="All">Filter Price</option>
          <option value="low_high">Price: Low to High</option>
          <option value="high_low">Price: High to Low</option>
        </select>

        <div className="filter_icon_main" onClick={handleFilterOpen}><IoFilter /></div>
      </div>
    </div>
  );
};

export default Search;
