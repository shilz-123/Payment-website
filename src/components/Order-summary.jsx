import React from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { BsHandbag, BsCreditCardFill } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import icon from "../Images/icon1.png";
import icon1 from "../Images/icon2.png";
import icon2 from "../Images/icon3.png";
import icon3 from "../Images/icon4.png";

function OrderSummary({
  calculateTotalPrice,
  handleUpdatedQuantity,
  cart,
  setCart,
}) {
  const orderData = JSON.parse(localStorage.getItem("orderData"));
  const totalPrice = calculateTotalPrice();
  const invoiceNumber = generateInvoiceNumber();

  const handleContinueShopping = () => {
    setCart([]);
  };

  return (
    <div style={{ backgroundColor: "#f1f2f4", minHeight: "100vh" }}>
      <div className="cart-page">
        <Link
          to="/"
          className="continue-shopping"
          onClick={handleContinueShopping}
        >
          <p className="arrow">
            <HiOutlineArrowNarrowLeft style={{ color: "#0aa7f5" }} />
            <span>Continue shopping</span>
          </p>
        </Link>
        <div className="content-three">
          <div className="thank-you">
            <TiTick className="tick" />
            <h2>Thank you for your order</h2>
          </div>
          <div className="invoice">
            <p>
              <b>Invoice No: </b>
              {invoiceNumber}
            </p>
          </div>
          <hr />
          <div className="order-cart">
            <img src={icon2} className="cart-bag" />
            <h3>Cart Summary</h3>
          </div>
          {cart.map((item) => (
            <div key={item.id}>
              <div className="order-last">
                <p>{item.name}</p>
                <p> x{item.quantity}</p>
                <p>${item.quantity * item.price}.00</p>
              </div>
            </div>
          ))}
          <hr />
          <div>
            <div className="order-cart">
              <img src={icon1} className="payment-card" />
              <h3>Payment</h3>
            </div>
            <div className="visa-card">
              <p>
                <b>Card type: </b>Credit{" "}
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={icon} alt="visa-icon" /> XXXX XXXX XXXX{" "}
                {orderData.last4}{" "}
              </p>
            </div>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <h2>Total:</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={icon3} className="dollar-bag" />
              <h2>{totalPrice}.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function generateInvoiceNumber() {
  const timestamp = new Date().getTime();
  const randomDigits = Math.floor(Math.random() * 1000); // Generate random 3-digit number

  return `INV-${timestamp}-${randomDigits}`;
}

export default OrderSummary;
