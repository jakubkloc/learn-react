import React from "react";
import { ReactDOM } from "react-dom/client";

export default function Card(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.item;
  return (
    <div className="card">
      <img  className="card-image" src={imageUrl} alt={title} />
      <div className="card-text-container">
        <div className="card-location-container">
          <img
            className="card-location-icon"
            src="/images/navigatoin_icon.png"
          />
          <p className="card-location">{location}</p>
          <a className="card-gooogle-maps-link" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="card-header">{title}</h2>
        <p className="card-date">
          {startDate} - {endDate}
        </p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
