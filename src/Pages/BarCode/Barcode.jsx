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
        `${process.env.REACT_APP_API_URL}/api/v1/setTableStatus`,
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
      <h1>SmartServe Table QR Generator</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Enter Table No (e.g. T1, T2)"
          value={tableNo}
          onChange={(e) => setTableNo(e.target.value)}
        />

        <button onClick={setTableStatus}>Generate QR Code</button>

        {generatedCode && (
          <div className="result">
            <p>Scan to Order</p>

            {/* QR CODE WITH REDIRECT LINK */}
            <QRCodeCanvas
              value={`${BASE_URL}/foodList?barcode=${generatedCode}`}
              size={180}
            />

            <h2>{generatedCode}</h2>
            <small>Valid for current session only</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Barcode;