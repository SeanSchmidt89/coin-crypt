import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import CoinDetail from "./routes/CoinDetail/CoinDetail";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
