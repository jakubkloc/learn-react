import React from "react";

export default function Content() {
  return (
    <div className="content-container">
      <h1 className="content-name">Jakub Kloc</h1>
      <h3 className="content-job">Frontend Developer</h3>
      <p className="content-site">jakubkloc.website</p>

      <div className="btn-container">
        <button className="btn-email"> <img src="/images/Email Icon.png"/>Email</button>
        <button className="btn-linkedin"> <img src="/images/LinkedIn.png"/>LinkedIn</button>
      </div>

      <div className="describe">
        <h2 className="describe-title">About</h2>
        <p className="describe-paragraph">
          I am self-learning Frontend developer interest in new technologies and
          making things as fast as possible. I try to create things transparent
          and userfriendly
        </p>
        <h2 className="describe-title">Interests</h2>
        <p className="describe-paragraph">
          Guitar music, movies, mainstream, anime, self-development and
          programming
        </p>
      </div>
    </div>
  );
}
