import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>Welcome to SmartServe</h1>

          <p>
            SmartServe makes restaurant ordering simple, fast, and contactless.
            Customers can create orders directly from their table using a unique
            Order Code provided by the restaurant.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            {/* LEFT CONTENT */}
            <div className="about-text">
              <h2>How SmartServe Works</h2>

              <p>
                SmartServe is designed for restaurants that want a faster and
                smarter dining experience.
              </p>

              <div className="feature-card">
                <h3>1. Sit at Your Table</h3>
                <p>
                  Customers visit the restaurant and sit at their assigned
                  table.
                </p>
              </div>

              <div className="feature-card">
                <h3>2. Enter Your Order Code</h3>
                <p>
                  Each table has a unique Order Code. Customers use this code to
                  access the menu and place orders instantly.
                </p>
              </div>

              <div className="feature-card">
                <h3>3. Create Orders Easily</h3>
                <p>
                  Browse the menu, add items to cart, and send orders directly
                  to the kitchen without waiting for staff.
                </p>
              </div>

              <div className="feature-card">
                <h3>4. Faster Restaurant Service</h3>
                <p>
                  Restaurants receive orders instantly, reducing waiting time
                  and improving customer experience.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="about-images">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Restaurant Interior"
              />

              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                alt="Restaurant Table"
              />

              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
                alt="Restaurant Food"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ORDER CODE SECTION */}
      <section className="order-code-section">
        <div className="container">
          <div className="order-card">
            <h2>Create Order Using Order Code</h2>

            <p>
              To create an order, customers must already be inside the
              restaurant and seated at a table.
            </p>

            <div className="dummy-order-box">
              <span>Example Order Code</span>
              <h3>TABLE-204</h3>
            </div>

            <button>Create Order</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
