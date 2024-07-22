import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inventoryStyle.css";

const Inventory = () => {
  return (
    <div className="inventory min-h-screen flex items-center justify-center bg-gray-100 mt-10">
      <form className="inventory-form bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="form-title text-center">Add Inventory Item</h2>

        <div className="form-group mb-2">
          <label className="form-label" htmlFor="productName">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="form-input"
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group mb-2">
          <label className="form-label" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="form-input"
            placeholder="Enter quantity"
          />
        </div>

        <div className="form-group mb-2">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="form-input"
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group mb-2">
          <label className="form-label" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-input"
            placeholder="Enter price"
          />
        </div>

        <div className="form-group mb-2">
          <label className="form-label" htmlFor="date">
            Date
          </label>
          <input type="date" id="date" className="form-input" />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Inventory;
