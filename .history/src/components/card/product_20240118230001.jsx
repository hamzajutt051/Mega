import Rating from "react-rating";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

import React, { useState } from "react";

import "./product.css";

const Cart = ({ product, addToCart, cart }) => {
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <>
      <div className="cart-parent">
        <div className="image flex">
          <img src={product.image} alt="product" className="product-image" />
          <div
            className="btn-cart"
            onClick={() => {
              if (inCart) return;

              addToCart(product);
            }}
          >
            {inCart ? "View Cart" : "Add to Cart"}
          </div>
        </div>
        <div className="cart-sub-listings">
          <div>
            <h3>
              {product.title.length > 20
                ? product.title.substring(0, 20) + "..."
                : product.title}
            </h3>
          </div>
          <div>
            <h4>${product?.price}</h4>
          </div>
          <Rating
            initialRating={product?.rating?.rate}
            readonly
            emptySymbol={<MdOutlineStarOutline className="text-yellow" />}
            fullSymbol={<MdOutlineStarPurple500 className="text-yellow" />}
          />
        </div>
        {Math.random() > 0.5 && (
          <div className="discount">
            50%
            <br />
            off
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
