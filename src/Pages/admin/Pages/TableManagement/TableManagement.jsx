import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import "./TableManagement.css";
import Barcode from "../../../../Components/Admin/BarCode/Barcode";

const TableManagement = () => {
  const [tables, setTables] = useState([]);
  const [selectedBarcode, setSelectedBarcode] = useState(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const token = localStorage.getItem("token");
  const qrRef = useRef();

  const fetchTables = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/getTableList`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) setTables(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }, [token]);

  const updateTableStatus = async (table) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/table-status`,
        {
          tableNo: table.tableNo,
          active: !table.active,
          barcode: table.barcode,
          sessionTime: new Date(),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchTables();
    } catch (err) {
      console.log(err.message);
    }
  };

  const editTable = async (table) => {
    const newNumber = prompt("Enter new table number:", table.tableNo);
    if (!newNumber) return;

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/table-status`,
        {
          tableNo: Number(newNumber),
          active: table.active,
          barcode: table.barcode,
          sessionTime: new Date(),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchTables();
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteTable = (tableNo) => {
    setTables((prev) => prev.filter((t) => t.tableNo !== tableNo));
  };

  const setAllInactive = async () => {
    try {
      await Promise.all(
        tables.map((table) =>
          axios.post(
            `${process.env.REACT_APP_API_URL}/table-status`,
            {
              tableNo: table.tableNo,
              active: false,
              barcode: table.barcode,
              sessionTime: new Date(),
            },
            { headers: { Authorization: `Bearer ${token}` } }
          )
        )
      );

      fetchTables();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

  return (
    <div className="table-page">
      <div className="headerTableTableManagement">
        <h1>Table Management</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="bulk-btn" onClick={setAllInactive}>
            Set All Inactive
          </button>

          <button
            className="bulk-btn"
            onClick={() => setOpenCreateModal(true)}
          >
            + Create Table
          </button>
        </div>
      </div>

      {/* ================= CREATE TABLE MODAL ================= */}
      {openCreateModal && (
        <div
          className="modal-overlay"
          onClick={() => setOpenCreateModal(false)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <Barcode
              onClose={() => setOpenCreateModal(false)}
              onSuccess={() => {
                fetchTables();
                setOpenCreateModal(false);
              }}
            />
          </div>
        </div>
      )}

      {/* ================= QR MODAL ================= */}
      {selectedBarcode && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedBarcode(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Table QR Code</h2>

            <div className="qr-wrapper" ref={qrRef}>
              <QRCodeCanvas
                value={`https://smartserve12.netlify.app/foodList/${selectedBarcode}`}
                size={220}
              />
            </div>

            <p className="barcode-text">{selectedBarcode}</p>

            <div className="modal-actions">
              <button
                onClick={() => {
                  const canvas =
                    qrRef.current.querySelector("canvas");
                  const url = canvas.toDataURL("image/png");

                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `qr-${selectedBarcode}.png`;
                  a.click();
                }}
              >
                Download
              </button>

              <button
                onClick={() => {
                  const canvas =
                    qrRef.current.querySelector("canvas");
                  const img = canvas.toDataURL("image/png");

                  const win = window.open("", "_blank");
                  win.document.write(`
                    <html>
                      <body style="display:flex;justify-content:center;align-items:center;height:100vh;">
                        <img src="${img}" />
                      </body>
                    </html>
                  `);
                  win.print();
                  win.close();
                }}
              >
                Print
              </button>

              <button
                className="close-btn"
                onClick={() => setSelectedBarcode(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= GRID ================= */}
      <div className="table-grid">
        {tables.map((table) => (
          <div className="table-card" key={table._id}>
            <div className="card-top">
              <h2>Table {table.tableNo}</h2>
              <span
                className={
                  table.active ? "status active" : "status inactive"
                }
              >
                {table.active ? "ACTIVE" : "INACTIVE"}
              </span>
            </div>

            <p className="barcode">{table.barcode}</p>

            <div className="btn-group">
              <button onClick={() => updateTableStatus(table)}>
                Toggle
              </button>

              <button onClick={() => editTable(table)}>Edit</button>

              <button
                onClick={() =>
                  deleteTable(table.tableNo)
                }
              >
                Delete
              </button>

              <button
                className="qr-btn"
                onClick={() =>
                  setSelectedBarcode(table.barcode)
                }
              >
                QR Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableManagement;