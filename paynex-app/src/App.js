import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Send from "./components/Send"
import StockInvestment from "./components/Stock";

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Send/>
      <StockInvestment/>
      <Footer/>

    </div>
  );
}

export default App;
