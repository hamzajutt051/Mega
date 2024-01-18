import React from "react";
import "./css/Header.css";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

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
            <div className="header-search order-2 ">
              <div
                className="header-dropdown flex"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p>All</p>
                <FaAngleDown />

                {show && (
                  <div className="header-sub-menu">
                    <ul>
                      {categories.map((category) => (
                        <li
                          key={category}
                          onClick={() => {
                            setCategory(category);
                            setShow(false);
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="header-input flex">
                <input
                  type="text"
                  alt="search"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <CiSearch color="rgba(0, 142, 204, 1)" fontSize="18px" />
              </div>
            </div>

            <div className="header-cart flex">
              <div className="sub-cart">
                <img src={cart} />
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
