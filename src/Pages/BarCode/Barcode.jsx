import React, { useState } from "react";
import "./Barcode.css";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";

const Barcode = () => {
  const [tableNo, setTableNo] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const BASE_URL = "https://smartserve12.netlify.app";

  const generateCode = async () => {
    if (!tableNo) return alert("Enter table number");

    const code =
      "SS-" +
      tableNo.toUpperCase() +
      "-" +
      Math.random().toString(36).substring(2, 8).toUpperCase();

    setGeneratedCode(code);
    return code;
  };

  const setTableStatus = async () => {
    try {
      const barcode = await generateCode();

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/setTableStatus`,
        {
          tableNo: tableNo,
          active: true,
          barcode: barcode,
          sessionTime: new Date(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Success", response.data);
    } catch (error) {
      console.log("Error", error.response?.data || error.message);
    }
  };

  return (
    <div className="barcode-page">
      <div className="card">

        <h1>SmartServe QR Generator</h1>
        <p className="subtitle">Generate table QR for ordering system</p>

        <input
          type="text"
          placeholder="Enter Table No (e.g. T1, T2)"
          value={tableNo}
          onChange={(e) => setTableNo(e.target.value)}
        />

        <button onClick={setTableStatus}>
          Generate QR Code
        </button>

        {generatedCode && (
          <div className="result">

            <p className="scan-text">Scan to Order</p>

            <div className="qr-box">
              <QRCodeCanvas
                value={`${BASE_URL}/foodList/${generatedCode}`}
                size={180}
              />
            </div>

            <h2 className="code">{generatedCode}</h2>

            <a
              className="order-link"
              href={`${BASE_URL}/foodList/${generatedCode}`}
            >
              Start your order →
            </a>

            <small>Valid for current session only</small>
          </div>
        )}

      </div>
    </div>
  );
};

export default Barcode;