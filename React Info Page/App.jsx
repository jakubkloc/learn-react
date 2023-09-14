import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  console.log('test')
  return(
    <div className="container">
    <Navbar/>
    <Main/>
    </div>
  )
}
