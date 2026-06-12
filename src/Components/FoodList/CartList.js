import React, { useMemo, useState } from "react";
import "./CartList.css";
import axios from "axios";

const CartList = ({
  cart,
  increaseQty,
  decreaseQty,
  removeFromCart,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalAmount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const handlePayment = async (type) => {
    if (type === "NOW") {
      // Open payment gateway
      const { data: order } = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/create-order`, {
        amount: totalAmount, // ₹500
      });

      const options = {
        key: "rzp_test_T0grmrPqww7N3B", // public key only
        amount: order.amount,
        currency: order.currency,
        name: "My App",
        description: "Test Payment",
        order_id: order.id,

        method: {
          upi: true,   // enables Google Pay indirectly
          card: true,
          netbanking: true
        },

        handler: async function (response) {
          const verifyRes = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/v1/verify-payment`,
            {
              razorpay_order_id: order.id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );
          console.log("response", response)
          alert(verifyRes.data.message);
        },

        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // Save order as unpaid

    }
  };


  return (
    <>
      {/* Toggle Button */}
      <button
        className={`cart-toggle-btn ${!isOpen ? "cart-toggle-btn-closed" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "❯" : "❮"}
      </button>

      <div className="cart-header">
        <h3>Cart ({cart.length})</h3>
      </div>
      <div className={`cart-drawer ${isOpen ? "open" : "closed"}`}>
        <div className="cart-header">
          <h3>Cart ({cart.length})</h3>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <div className="item-top">
                    <div>
                      <h4>{item.name}</h4>
                      <p>Rs {item.price}</p>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className="cart-total">
              <h3>Total: Rs {totalAmount}</h3>
            </div>

            <div className="payment-buttons">
              <button
                className="pay-now-btn"
                onClick={() => handlePayment("NOW")}
              >
                Pay Now
              </button>

              <button
                className="pay-later-btn"
                onClick={() => handlePayment("LATER")}
              >
                Pay Later
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartList;