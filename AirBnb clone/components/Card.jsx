import React from "react";

export default function Card({ item }) {
  const {
    title,
    price,
    coverImg: img,
    location,
    openSpots,
    stats: { rating, reviewCount },
  } = item;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT ";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}

      <img className="card-img" src={`../images/${img}`} alt={img} />
      <div className="card-text-container">
        <p className="card-first-line">
          <img className="card-star" src="/images/star.png" alt="star" />{" "}
          {rating}{" "}
          <span className="card-grey-text">
            ({reviewCount}) &#183; {location}
          </span>
        </p>
        <p className="card-second-line"> {title}</p>
        <p className="card-third-line">
          <b>From ${price}</b> / person{" "}
        </p>
      </div>
    </div>
  );
}
