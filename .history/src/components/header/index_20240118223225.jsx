import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

import React from "react";

import logo from "@assets/images/logo.png";
import cartImg from "@assets/images/cart.png";

import "./index.css";
import SearchBar from "./search";

const Header = ({
  cart,
  categories,
  category,
  setCategory,
  search,
  setSearch,
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="header-parent flex">
            <div className="header-logo">
              <img src={logo} />
            </div>
            <SearchBar
              search={search}
              setSearch={setSearch}
              categories={categories}
              category={category}
              setCategory={setCategory}
              className="md-searchbar"
            />

            <div className="header-cart flex">
              <div className="sub-cart">
                <img src={cartImg} />
                <h5>Cart</h5>
              </div>

              {cart.length > 0 && (
                <div className="header-count">
                  <span>{cart.length}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
