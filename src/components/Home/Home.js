import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="title">Ensemble</h1>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
