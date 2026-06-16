import React, { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    alert("Product Added!");
  };

  return (
    <div className="form-container">
      <div className="form-title">Add New Food Item</div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Product Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Veg Burger"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Short description..."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="input-group">
            <label>Price (₹)</label>
            <input
              type="number"
              name="price"
              placeholder="120"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Pizza, Burger..."
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Upload Image</label>
          <input type="file" onChange={handleImage} />
        </div>

        <button type="submit" className="btn">
          + Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;