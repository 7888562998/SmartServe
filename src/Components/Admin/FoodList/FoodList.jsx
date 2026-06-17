import React, { memo, useEffect, useState } from "react";
import "./FoodList.css";

const FoodCard = memo(({ item }) => {
  return (
    <div className="food-card">
      <img
        src={item.productImage?.url}
        alt={item.productTitle}
        loading="lazy"
        decoding="async"
      />

      <div className="food-info">
        <h3>{item.productTitle}</h3>
        <p>{item.description}</p>

        <div className="row">
          <span>{item.category}</span>
          <span>Rs {item.price}</span>
        </div>
      </div>
    </div>
  );
});

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/getProduct`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // ✅ token added here
            },
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        console.log("data", data.data);

        setFoods(data?.data || []);
      } catch (err) {
        console.error(err);
        setError("Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  if (loading) {
    return (
      <div className="food-page">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="food-page">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="food-page">
      <div className="foodlist-container">
        <div className="food-grid">
          {foods.length > 0 ? (
            foods.map((item) => <FoodCard key={item._id} item={item} />)
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodList;
