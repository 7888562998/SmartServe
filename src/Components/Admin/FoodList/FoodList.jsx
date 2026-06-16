import React, { memo } from "react";
import foods from "../../../Data/foods.json";
import "./FoodList.css";

const FoodCard = memo(({ item }) => {
  return (
    <div className="food-card">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        decoding="async"
      />

      <div className="food-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="row">
          <span>{item.quantity}</span>
          <span>Rs {item.price}</span>
        </div>
      </div>
    </div>
  );
});

const FoodList = () => {
  return (
    <div className="food-page">
      <div className="foodlist-container">
        <div className="food-grid">
          {foods.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodList;