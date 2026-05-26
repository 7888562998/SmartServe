import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">

        {/* LOGO */}
        <a href="/" className="logo">

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
        </a>

        {/* DESKTOP NAV */}
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/restaurants">Restaurants</a>
          </li>

          <li>
            <a href="/offers">Offers</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          <a href="/order" className="order-btn">
            Order Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/restaurants">Restaurants</a>
        <a href="/offers">Offers</a>
        <a href="/about">About</a>

        <div className="mobile-buttons">
          <a href="/login" className="mobile-login">
            Login
          </a>

          <a href="/order" className="mobile-order">
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;