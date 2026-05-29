import React, { useState } from "react";
import "./LoginModal.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
       `${process.env.REACT_APP_API_URL}/api/v1/login`,
        formData
      );

      // SAVE TOKEN
      localStorage.setItem("token", response.data.token);

      // SAVE REDUX
      dispatch(
        loginSuccess({
          token: response.data.token,
        })
      );

      console.log(response.data);

      closeModal();

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={closeModal}>
          ✖
        </button>

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;