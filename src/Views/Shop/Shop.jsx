import React, { useState } from "react";
import { Products } from "../../products";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on the search term
  const filteredProducts = Products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shopTitle">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="searchBar"
      />

      <h1>Best Sellers</h1>

      <div className="products">
        {searchTerm !== ""
          ? filteredProducts.map((product) => (
              <Product data={product} key={product.id} />
            ))
          : Products.map((product) => (
              <Product data={product} key={product.id} />
            ))}
      </div>
    </div>
  );
};

export default Shop;
