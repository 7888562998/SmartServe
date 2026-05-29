import React from "react";
import { useParams } from "react-router-dom";
import foods from "../../Data/foods.json";
import "./FoodList.css";

const FoodList = () => {
  const { barcode } = useParams();

  return (
    <div className="food-page">
      <h2>   <a href="/" className="logo">
        {/* SVG LOGO */}
        <svg
          width="52"
          height="52"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <defs>
            <linearGradient id="ssGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF7A18" />
              <stop offset="100%" stopColor="#FF3D54" />
            </linearGradient>
          </defs>

          <rect width="70" height="70" rx="18" fill="url(#ssGradient)" />

          <circle
            cx="35"
            cy="40"
            r="16"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />

          <path
            d="M23 18V34"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M20 18V26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M23 18V26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M26 18V26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <ellipse cx="47" cy="23" rx="5" ry="6" fill="white" />

          <path
            d="M47 29V40"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="logo-text">
          Smart<span>Serve</span>
        </h1>
      </a> Menu</h2>
      <p>Table: {barcode}</p>

      <div className="food-grid">
        {foods.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />

            <div className="food-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <div className="row">
                <span>{item.quantity}</span>
                <span>Rs {item.price}</span>
              </div>

              <button className="add-btn">+ Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;