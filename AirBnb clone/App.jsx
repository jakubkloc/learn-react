import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((data) => {
    return <Card key={data.id} item={data} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards-container">{cards}</div>
    </>
  );
}
