import React from "react";
import { ProductData } from "../pages/ProductData";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product-container">
      <ul className="product-list">
        {ProductData.map((item, index) => (
          <li key={index} className="product-item">
            <p className="product-list">{item.description}</p>
            <img src={item.imgUrl} alt={item.title} className="product-image" />
            <span className="product-title">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
