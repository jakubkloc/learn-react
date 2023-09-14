import React from "react";
import { ReactDOM } from "react-dom/client";
import Navigation from "./Navigation";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cards = data.map((item, index) => {
    return <Card key={index} item={item} />;
  });

  return (
    <div className="container">
      <Navigation />
      <div className="cards">{cards}</div>
    </div>
  );
}
