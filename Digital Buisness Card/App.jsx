import React from "react";
import Photo from "./components/Photo";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Photo />
      <Content />
      <Footer />
    </div>
  );
}
