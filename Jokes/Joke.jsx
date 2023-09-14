import React from "react";

export default function Joke({ setup, punchline }) {
  return(
  <div className="container">
    <p>{setup ? setup : null}</p>
    <p>{punchline}</p>
    <hr/>
  </div>
  );
}
