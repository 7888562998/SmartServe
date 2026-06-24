import React, { useState } from "react";
import "./Barcode.css";
import axios from "axios";

const Barcode = ({ onClose, onSuccess }) => {
  const [tableNo, setTableNo] = useState("");

  const generateCode = async () => {
    if (!tableNo) return alert("Enter table number");

    const code =
      "SS-" +
      tableNo.toUpperCase() +
      "-" +
      Math.random().toString(36).substring(2, 8).toUpperCase();

    return code;
  };

  const setTableStatus = async () => {
    try {
      const barcode = await generateCode();
      if (!barcode) return;

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

      if (onSuccess) onSuccess();
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
          placeholder="Enter Table No (e.g. 1, 2,...etc)"
          value={tableNo}
          onChange={(e) => setTableNo(e.target.value)}
        />

        <button onClick={setTableStatus}>Generate QR Code</button>
        <button style={{ marginTop: "10px" }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Barcode;