import React, { useState, useEffect } from "react";
import logo from "../src/Images/logo.svg";
import image1 from "../src/Images/halfmoon.webp";
import image2 from "../src/Images/dragonscale.webp";
import image3 from "../src/Images/crowntail.webp";
import image4 from "../src/Images/veiltail.webp";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FirstPage = ({ addToCart, cart, calculateTotalPrice }) => {
  const [cartItem, setCartItem] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const navigate = useNavigate();
  // console.log("***", calculateTotalPrice);

  const handleAddToCart = (productId) => {
    const filteredItems = [
      {
        id: 1,
        name: "Halfmoon betta",
        image: image1,
        price: 25.0,
      },
      {
        id: 2,
        name: "Dragonscale betta",
        image: image2,
        price: 35.0,
      },
      {
        id: 3,
        name: "Crowntail betta",
        image: image3,
        price: 7.0,
      },
      {
        id: 4,
        name: "Veiltail betta",
        image: image4,
        price: 5.0,
      },
    ];
    const selectedProduct = filteredItems.find(
      (product) => product.id === productId
    );
    addToCart(selectedProduct);
    navigate("/cart");
  };
 

  const filteredItems = [
    {
      id: 1,
      name: "Halfmoon betta",
      image: image1,
      price: 25.0,
    },
    {
      id: 2,
      name: "Dragonscale betta",
      image: image2,
      price: 35.0,
    },
    {
      id: 3,
      name: "Crowntail betta",
      image: image3,
      price: 7.0,
    },
    {
      id: 4,
      name: "Veiltail betta",
      image: image4,
      price: 5.0,
    },
  ];
  const totalPrice = calculateTotalPrice(cart);

  return (
    <div>
      <div className="full-content">
        <div className="header">
          <div className="fist-castle">
            <img src={logo} alt="logo" className="logo-image" />
            <h2>Fish Castle</h2>
          </div>
          <div className="cart">
            <Link to="/cart">
              <label><button className="cart-icon">
                <BsCart4 />
                <span className="cart-item-count">{cart.length}</span>
              </button></label>
            </Link>
            <p>${totalPrice}.00</p>
          </div>
        </div>
        <div className="content-one">
          <h5>R E D I S C O V E R</h5>
          <h1>Fishkeeping</h1>
          <p>
            An <b>exclusive collection of bettas </b>available for everyone.
          </p>
        </div>
        <div className="content-image-one">
          <div className="halfmoon">
            <img src={image1} alt="halfmoon" className="halfmoon1" />
          </div>
          <div className="half-content">
            <h2>Halfmoon Betta</h2>
            <p>
              The Halfmoon betta is arguably one of the prettiest betta species.
              It is recognized by its large tail that can flare upto 180
              degrees.
            </p>
            <div className="add-button">
              <h1>$25.00</h1>
              <div>
                <button
                  className="add-cart-button"
                  onClick={() => handleAddToCart(1)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-image-one">
          <div className="half-content">
            <h2>Dragon Scale Betta</h2>
            <p>
              The dragon scale betta is a rarer and higher maintenance fish. It
              is named by its thick white scales that looks like dragon scale
              armor.
            </p>
            <div className="add-button">
              <h1>$35.00</h1>
              <div>
                <button
                  className="add-cart-button"
                  onClick={() => handleAddToCart(2)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="halfmoon">
            <img src={image4} alt="halfmoon" className="halfmoon1" />
          </div>
        </div>
        <div className="content-image-one">
          <div className="halfmoon">
            <img src={image3} alt="halfmoon" className="halfmoon1" />
          </div>
          <div className="half-content">
            <h2>Crowntail Betta</h2>
            <p>
              The crowntail is pretty common, but interesting none the less.
              It's recognized by the shape of its tail that hasan appearance of
              a comb.
            </p>
            <div className="add-button">
              <h1>$7.50</h1>
              <div>
                <button
                  className="add-cart-button"
                  onClick={() => handleAddToCart(3)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-image-one">
          <div className="half-content">
            <h2>Veiltail Betta</h2>
            <p>
              By far the most common betta fish. You can recognize it by its
              long tail aiming downwards.
            </p>
            <div className="add-button">
              <h1>$5.00</h1>
              <div>
                <button
                  className="add-cart-button"
                  onClick={() => handleAddToCart(4)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="halfmoon">
            <img src={image2} alt="halfmoon" className="halfmoon1" />
          </div>
        </div>
      </div>
      <div className="section">
        <h2>
          Any questions? <b>Contact us.</b>
        </h2>
        <p>
          We are looking forward to hear from you. Feel free to contact us if
          you have any questions!
        </p>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="footer">
        <p>
          Next.js app with a <a href="#">Snipcart</a> - powered store
        </p>
        <a href="#" style={{ marginTop: "15px", marginRight: "150px" }}>
          Github
        </a>
      </div>

      {/* <Cartpage /> */}
    </div>
  );
};

export default FirstPage;
