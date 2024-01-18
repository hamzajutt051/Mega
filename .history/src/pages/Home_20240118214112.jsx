import React from "react";
import "./css/Home.css";
import Cart from "../components/Cart";

const Home = ({
  products,
  setProducts,
  search,
  setSearch,
  loading,
  setLoading,
  cart,
  setCart,
  categories,
  setCategories,
  category,
  setCategory,
}) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="home-parent">
            <h2>Results</h2>
            <div className="cart-flex">
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
