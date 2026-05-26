import React, { useState } from "react";
import "./Barcode.css";
import { QRCodeCanvas } from "qrcode.react";

const Barcode = () => {
  const [tableNo, setTableNo] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const generateCode = () => {
    if (!tableNo) return alert("Enter table number");

    const code =
      "SS-" +
      tableNo.toUpperCase() +
      "-" +
      Math.random().toString(36).substring(2, 8).toUpperCase();

    setGeneratedCode(code);
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

        <button onClick={generateCode}>
          Generate QR Code
        </button>

        {generatedCode && (
          <div className="result">
            <p>Scan to Order</p>

            {/* QR CODE */}
            <QRCodeCanvas value={generatedCode} size={180} />

            <h2>{generatedCode}</h2>
            <small>Valid for current session only</small>
          </div>
        )}

      </div>

    </div>
  );
};

export default Barcode;