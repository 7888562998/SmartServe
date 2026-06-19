import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-box">
          <h2 className="logo">SmartServe</h2>
          <p className="text">
            SmartServe makes restaurant ordering simple, fast, and contactless.
          </p>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/restaurants">Restaurants</a>
          <a href="/offers">Offers</a>
          <a href="/pricing">Pricing</a>
        </div>

        {/* Support */}
        <div className="footer-box">
          <h3>Support</h3>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/TermsAndConditions">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 India</p>
          <p>📧 support@smartserve.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SmartServe. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;