import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import CoinDetail from "./routes/CoinDetail/CoinDetail";
import Cart from "./routes/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
