import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

import "./OwnerLayout.css";

function OwnerLayout() {
  const dispatch = useDispatch();

  return (
    <div className="owner-container">

      {/* SIDEBAR */}
      <div className="owner-sidebar">

        {/* LOGO */}
        <div className="owner-logo">
          <a href="/" className="owner-logo-link">

            {/* SVG */}
            <svg
              width="52"
              height="52"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="owner-logo-svg"
            >
              <defs>
                <linearGradient id="ssGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF7A18" />
                  <stop offset="100%" stopColor="#FF3D54" />
                </linearGradient>
              </defs>

              <rect width="70" height="70" rx="18" fill="url(#ssGradient)" />
              <circle cx="35" cy="40" r="16" stroke="white" strokeWidth="4" fill="none" />

              <path d="M23 18V34" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <path d="M20 18V26" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M23 18V26" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M26 18V26" stroke="white" strokeWidth="2" strokeLinecap="round" />

              <ellipse cx="47" cy="23" rx="5" ry="6" fill="white" />
              <path d="M47 29V40" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>

            <h1 className="owner-logo-text">
              Smart<span>Serve</span>
            </h1>

          </a>
        </div>

        {/* MENU */}
        <NavLink to="/admin" end className="owner-link">
          Dashboard
        </NavLink>

        <NavLink to="/admin/uploadproducts" className="owner-link">
          Upload Products
        </NavLink>

        <NavLink to="/admin/TableManagement" className="owner-link">
          Table Management
        </NavLink>

        <NavLink to="/admin/users" className="owner-link">
          Users
        </NavLink>

        <NavLink to="/admin/settings" className="owner-link">
          Settings
        </NavLink>

        {/* LOGOUT */}
        <button
          className="owner-logout-btn"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>

        {/* FOOTER */}
        <div className="owner-footer">
          © SmartServe Admin
        </div>
      </div>

      {/* MAIN */}
      <div className="owner-main">

        <div className="owner-topbar">
          <h3>Owner Dashboard</h3>
        </div>

        <div className="owner-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default OwnerLayout;