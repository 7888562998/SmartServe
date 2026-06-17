import React, { useState } from "react";
import "./Pricing.css";

function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      monthly: 5,
      yearly: 50,
      description: "Perfect for small restaurants",
      features: [
        "QR Menu",
        "Customer Ordering",
        "50 Food Products",
        "Admin Dashboard",
        "Basic Support",
      ],
    },
    {
      name: "Medium",
      monthly: 15,
      yearly: 150,
      popular: true,
      description: "Best for growing restaurants",
      features: [
        "Everything in Basic",
        "Unlimited Products",
        "Online Payments",
        "Order Tracking",
        "Sales Reports",
        "Priority Support",
      ],
    },
    {
      name: "Professional",
      monthly: 30,
      yearly: 300,
      description: "For restaurant chains",
      features: [
        "Everything in Medium",
        "Multi Branch",
        "Custom Branding",
        "Advanced Analytics",
        "Staff Roles",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Simple Pricing</h2>

        <p className="pricing-subtitle">
          Choose the perfect plan for your restaurant
        </p>

        <div className="billing-toggle">
          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${
                plan.popular ? "popular" : ""
              }`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}

              <h3>{plan.name}</h3>

              <p className="description">
                {plan.description}
              </p>

              <div className="price">
                $
                {billing === "monthly"
                  ? plan.monthly
                  : plan.yearly}
                <span>
                  /{billing === "monthly"
                    ? "month"
                    : "year"}
                </span>
              </div>

              <ul>
                {plan.features.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>

              <button className="pricing-btn">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;