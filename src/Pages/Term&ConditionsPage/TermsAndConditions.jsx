import React from "react";
import "./Terms.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-box">

        <h1>Terms & Conditions</h1>
        <p className="updated">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to SmartServe. By using our platform, you agree to these Terms
          and Conditions. Please read them carefully before using our services.
        </p>

        <h2>2. Services</h2>
        <p>
          SmartServe provides a digital ordering system for restaurants,
          including QR-based ordering, menu display, and payment processing.
        </p>

        <h2>3. Payments</h2>
        <p>
          All payments made through SmartServe are processed via third-party
          payment gateways. We are not responsible for banking delays or gateway
          failures.
        </p>

        <h2>4. Restaurant Responsibility</h2>
        <p>
          Restaurants are responsible for order fulfillment, food quality,
          pricing, and customer service.
        </p>

        <h2>5. Commission & Payouts</h2>
        <p>
          SmartServe may charge a commission on each order. Payouts are
          processed according to settlement cycles defined by payment providers.
        </p>

        <h2>6. User Accounts</h2>
        <p>
          Users must provide accurate information during registration.
          Any misuse may result in account suspension.
        </p>

        <h2>7. Changes</h2>
        <p>
          We may update these terms at any time. Continued use of the platform
          means you accept the updated terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          For any questions, contact us at support@smartserve.com
        </p>

      </div>
    </div>
  );
};

export default TermsAndConditions;