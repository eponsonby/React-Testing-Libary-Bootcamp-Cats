import heartFilled from "../svgs/heartFilled.svg";
import heartOutlined from "../svgs/heartOutlined.svg";
import React, { useState } from "react";
import "../Card/Card.css";

const Card = ({ name, phone, email, image, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const toggleFavorited = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-image"></img>
        <button className="heart" onClick={toggleFavorited}>
          {isFavorited ? (
            <img src={heartFilled} alt="filled heart"></img>
          ) : (
            <img src={heartOutlined} alt="outlined heart"></img>
          )}
        </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
