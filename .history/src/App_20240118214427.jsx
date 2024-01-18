import axios from "axios";

import { useLayoutEffect, useMemo, useState } from "react";

import Home from "./pages/Home";
import Header from "./pages/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useLayoutEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setProducts(res.data);
        // get unique categories
        const uniqueCategories = [
          ...new Set(res.data.map((product) => product.category)),
        ];

        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchCart = async () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  };

  const filterProducts = useMemo(() => {
    let filteredProducts = products;

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredProducts;
  }, [products, search]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    let newCart = [];
    if (exist) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(newCart);
    } else {
      newCart = [...cart, { ...product, qty: 1 }];
      setCart(newCart);
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <Header
        cart={cart}
        categories={categories}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <Home products={filterProducts} loading={loading} addToCart={addToCart} />
    </>
  );
}

export default App;
