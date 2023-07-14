import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

function Cartpage({
  cart,
  setCart,
  handleUpdatedQuantity,
  handleRemoveItem,
  calculateTotalPrice,
}) {
  return (
    <div style={{ backgroundColor: "#f1f2f4", minHeight: "100vh" }}>
      <div className="cart-page">
        <div className="cart-header">
          <Link to="/" className="continue-shopping">
            <p className="arrow">
              <HiOutlineArrowNarrowLeft style={{ color: "#0aa7f5" }} />
              <span>Continue shopping</span>
            </p>
          </Link>

          <h5>Cart summary</h5>
          <p className="bag-cart">
            <BsHandbag style={{ color: "#0aa7f5" }} /> {cart.length}
          </p>
        </div>
        {cart.map((item, index) => (
          <div key={item.id}>
            <div className="whole">
              <div className="cart-container">
                <div className="images">
                  <img src={item.image} alt={item.name} className="images1" />
                </div>

                <div className="name-price">
                  <p>{item.name}</p>
                  <button
                    className="delete-icon"
                    onClick={() => handleRemoveItem(index)}
                  >
                    <RiDeleteBin6Line className="delete" />
                  </button>
                </div>
              </div>
              <div className="qty">
                <label>Qty: </label>

                <div className="plus-minus">
                  <button
                    onClick={() =>
                      handleUpdatedQuantity(index, item.quantity - 1)
                    }
                    className="qty-minus"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdatedQuantity(index, item.quantity + 1)
                    }
                    className="qty-add"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="checkout">
            <h3>Shipping and taxes will be calculated at checkout.</h3>
            <div className="check-total">
              <h6>Total</h6>
              <h6>${calculateTotalPrice()}.00</h6>
            </div>
            <div className="checks-div">
              <Link to="/checkout">
                <button className="checks">
                  Checkout
                  <HiOutlineArrowNarrowRight className="right-checkout" />
                </button>
              </Link>
            </div>
            <div>
              <div className="lock">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  width="54"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  alt=""
                  title=""
                  class="snipcart-featured-payment-methods__title-icon snipcart__icon"
                >
                  <path
                    d="M16.615 23.765v-4.942C16.615 10.637 23.28 4 31.5 4c8.22 0 14.885 6.637 14.885 14.823v4.942H53V60H10V23.765h6.615zm0 3.294h-3.307v29.647h36.384V27.059H16.615zm13.231 9.882h3.308v9.883h-3.308V36.94zm-9.923-13.176h23.154v-4.942c0-6.367-5.183-11.529-11.577-11.529s-11.577 5.162-11.577 11.53v4.94z"
                    fill="currentColor"
                  ></path>
                </svg>
                Secured bySnipcart
              </div>
              <div></div>
            </div>
            <div className="visa">
              <svg
                viewBox="0 0 174 56"
                fill="none"
                width="54"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                alt="Visa"
                title="Visa"
                class="snipcart__icon--brand snipcart__icon"
              >
                <path
                  d="M74.98 55.192H60.965L69.73.982h14.016l-8.766 54.21zM125.793 2.308C123.028 1.21 118.643 0 113.221 0c-13.842 0-23.59 7.381-23.65 17.934-.114 7.786 6.98 12.111 12.285 14.707 5.423 2.653 7.267 4.385 7.267 6.75-.056 3.63-4.382 5.305-8.418 5.305-5.596 0-8.595-.863-13.151-2.884l-1.846-.866-1.962 12.169c3.288 1.498 9.345 2.827 15.633 2.885 14.707 0 24.282-7.267 24.396-18.513.056-6.171-3.69-10.9-11.766-14.764-4.902-2.48-7.905-4.152-7.905-6.69.058-2.307 2.54-4.67 8.074-4.67 4.557-.116 7.905.98 10.441 2.075l1.268.576 1.906-11.706zM144.423 35.988c1.154-3.114 5.596-15.168 5.596-15.168-.058.116 1.152-3.171 1.844-5.19l.98 4.672s2.654 12.976 3.23 15.686h-11.65zM161.725.983h-10.842c-3.344 0-5.884.98-7.326 4.498l-20.821 49.71h14.708l2.942-8.131h17.996a2177.47 2177.47 0 011.673 8.132h12.978L161.725.982zM49.257.983L35.529 37.949l-1.5-7.497C31.491 21.8 23.532 12.401 14.65 7.729l12.574 47.406h14.822L64.078.983H49.256z"
                  fill="#00579F"
                ></path>
                <path
                  d="M22.782.983H.232L0 2.078C17.592 6.577 29.242 17.42 34.03 30.454L29.126 5.54c-.807-3.463-3.288-4.443-6.345-4.557z"
                  fill="#FAA61A"
                ></path>
              </svg>
              <svg
                viewBox="0 0 104 64"
                fill="none"
                width="54"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                alt="Mastercard"
                title="Mastercard"
                class="snipcart__icon--brand snipcart__icon"
              >
                <path
                  d="M67.173 6.842H36.37v50.31h30.803V6.842z"
                  fill="#FF5F00"
                ></path>
                <path
                  d="M39.543 32.002a31.939 31.939 0 0112.22-25.15 31.994 31.994 0 100 50.31 31.939 31.939 0 01-12.22-25.16z"
                  fill="#EB001B"
                ></path>
                <path
                  d="M103.53 32.002a31.991 31.991 0 01-35.41 31.81 31.994 31.994 0 01-16.357-6.66 31.992 31.992 0 000-50.31 31.994 31.994 0 0151.767 25.151v.009z"
                  fill="#F79E1B"
                ></path>
              </svg>
            </div>
          </div>
        )}
        {cart.length === 0 && (
          <div className="empty-page">
            <h1>Your cart is empty!</h1>
            <Link to="/">
              <button className="back-to-store">
                <div>
                  <HiOutlineArrowNarrowLeft />
                </div>
                Back to store
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cartpage;
