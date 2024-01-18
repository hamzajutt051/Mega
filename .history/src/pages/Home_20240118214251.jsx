import React from "react";
import "./css/Home.css";
import Cart from "../components/Cart";

const Home = ({ products, loading, addToCart }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="home-parent">
            <h2>Results</h2>
            <div className="cart-flex">
              {products.length > 0 ? (
                products.map((product) => <Cart />)
              ) : (
                <div className="no-products">
                  <h2>No Products Found</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
