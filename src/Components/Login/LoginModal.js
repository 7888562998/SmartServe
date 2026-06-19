import React, { useState } from "react";
import "./LoginModal.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // login mode: owner | staff
  const [mode, setMode] = useState("owner");

  // staff flow step: login | otp
  const [step, setStep] = useState("login");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [otp, setOtp] = useState("");

  // INPUT HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 👑 OWNER LOGIN
  const handleOwnerLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        formData
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loginType", "Owner");

      dispatch(
        loginSuccess({
          token: response.data.token,
          user: response.data.user,
        })
      );

      closeModal();
      navigate("/admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Invalid Email or Password");
    }
  };

  // 👷 STAFF SEND OTP
  const handleStaffLogin = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/staff/send-otp`,
        { email: formData.email }
      );

      alert("OTP sent to email");
      setStep("otp");
    } catch (error) {
      console.log(error);
      alert("Error sending OTP");
    }
  };

  // 👷 STAFF VERIFY OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/staff/verify-otp`,
        {
          email: formData.email,
          otp,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loginType", "staff");
      window.location.reload();
      dispatch(
        loginSuccess({
          token: res.data.token,
          user: res.data.user,
        })
      );

      alert("Login successful");

      closeModal();
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Invalid OTP");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        <button className="close-btn" onClick={closeModal}>
          ✖
        </button>

        <h2>
          {mode === "owner"
            ? "Owner Login"
            : step === "login"
              ? "Staff Login"
              : "Enter OTP"}
        </h2>

        {/* FORM */}
        <form
          onSubmit={
            mode === "owner"
              ? handleOwnerLogin
              : step === "otp"
                ? handleVerifyOtp
                : (e) => e.preventDefault()
          }
        >
          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={mode === "staff" && step === "otp"}
          />

          {/* PASSWORD (OWNER ONLY) */}
          {mode === "owner" && (
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          )}

          {/* OTP INPUT */}
          {mode === "staff" && step === "otp" && (
            <input
              type="text"
              maxLength="6"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          )}

          {/* BUTTONS */}
          {mode === "owner" ? (
            <button type="submit" className="login-submit">
              Login as Owner
            </button>
          ) : step === "login" ? (
            <button
              type="button"
              className="login-submit"
              onClick={handleStaffLogin}
            >
              Send OTP to Staff Email
            </button>
          ) : (
            <button type="submit" className="login-submit">
              Verify OTP & Login
            </button>
          )}
        </form>

        {/* TOGGLE MODE */}
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          {mode === "owner" ? (
            <p
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => {
                setMode("staff");
                setStep("login");
              }}
            >
              Login as Staff
            </p>
          ) : (
            <p
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => {
                setMode("owner");
                setStep("login");
                setOtp("");
              }}
            >
              Login as Owner
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;