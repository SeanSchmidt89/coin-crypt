import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import CoinDetail from "./routes/CoinDetail/CoinDetail";
import Cart from "./routes/Cart/Cart";
import SignUp from "./routes/SignUp/SignUp";
import Login from "./routes/Login/Login";
import Profile from "./routes/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
