import Home from "./pages/Home";
import Header from "./pages/Header";

import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
