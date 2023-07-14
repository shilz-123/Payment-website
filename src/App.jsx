import React, { useState } from "react";
import "./App.css";
import FirstPage from "./FirstPage";
import { Routes, Route, Link } from "react-router-dom";
import Cartpage from "./components/Cartpage";
import Checkout from "./components/Checkout";
import OrderSummary from "./components/Order-summary";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import StripeCheckout from "react-stripe-checkout";

function App() {
  const onToken = (token) => {
    console.log(token);
  };
  const stripePromise = loadStripe(
    "pk_test_51NQmp5SCHC45SOwUG6kHANTfgeMCnlso12Tq7r83Rx2KmLsCXmvBH7mWEBtjrOcB2Oze0qydJrSkTZy1NFU4bDSr00AdUVvLiX"
  );

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const handleUpdatedQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cart];
    if (newQuantity > 0) {
      updatedCartItems[index].quantity = newQuantity;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCart(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cart];
    updatedCartItems.splice(index, 1);
    setCart(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    console.log(cart);
    for (const item of cart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  console.log(cart);

  return (
    <Elements stripe={stripePromise}>
      <div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <FirstPage
                  addToCart={addToCart}
                  cart={cart}
                  calculateTotalPrice={calculateTotalPrice}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cartpage
                  cart={cart}
                  setCart={setCart}
                  handleUpdatedQuantity={handleUpdatedQuantity}
                  handleRemoveItem={handleRemoveItem}
                  calculateTotalPrice={calculateTotalPrice}
                />
              }
            />

            <Route
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  setCart={setCart}
                  handleUpdatedQuantity={handleUpdatedQuantity}
                  calculateTotalPrice={calculateTotalPrice}
                  onToken={onToken}
                />
              }
            />
            <Route
              path="/order-summary"
              element={
                <OrderSummary
                  cart={cart}
                  setCart={setCart}
                  handleUpdatedQuantity={handleUpdatedQuantity}
                  calculateTotalPrice={calculateTotalPrice}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Elements>
  );
}

export default App;
