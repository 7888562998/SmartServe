import React, { useState } from "react";
import axios from "axios";
import "./UploadProducts.css";

const AddProductForm = () => {
  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("productTitle", productTitle);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("image", image);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/addProduct`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      alert(response.data.message);

      setProductTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage(null);
    } catch (error) {
      console.error(error);

      alert(error?.response?.data?.message || "Failed to upload product");
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">Add New Food Item</div>

      <form onSubmit={handleSubmit}>
        {/* Product Title */}
        <div className="input-group">
          <label>Product Title</label>
          <input
            type="text"
            placeholder="Veg Burger"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="input-group">
          <label>Description</label>
          <textarea
            placeholder="Short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="row">
          {/* Price */}
          <div className="input-group">
            <label>Price (₹)</label>
            <input
              type="number"
              placeholder="120"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div className="input-group">
            <label>Category</label>
            <input
              type="text"
              placeholder="Burger"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="input-group">
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="btn">
          + Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
