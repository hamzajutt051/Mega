import { useState } from "react";

import Home from "./pages/Home";
import Header from "./pages/Header";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Home />
    </>
  );
}

export default App;
