import React from "react";
import "./css/Header.css";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-parent flex">
            <div className="header-logo">
              <img src={logo} />
            </div>
            <div className="header-search order-2 ">
              <div className="header-dropdown flex">
                <p>All</p>
                <FaAngleDown />

                <div className="header-sub-menu items-start">
                  <ul>
                    <li>Mobile</li>
                    <li>Games</li>
                    <li>Toys</li>
                    <li>Deals</li>
                  </ul>
                </div>
              </div>
              <div className="header-input flex">
                <input type="text" alt="search" placeholder="Search here..." />
                <CiSearch color="rgba(0, 142, 204, 1)" fontSize="18px" />
              </div>
            </div>

            <div className="header-cart flex">
              <div className="sub-cart">
                <img src={cart} />
                <h5>Cart</h5>
              </div>

              <div className="header-count">1</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
