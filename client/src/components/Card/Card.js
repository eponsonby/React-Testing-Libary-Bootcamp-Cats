import heartFilled from "../svgs/heartFilled.svg";
import heartOutlined from "../svgs/heartOutlined.svg";
import React, { useState, useContext } from "react";
import { PetsContext } from "../Pets/Pets";
import "./Card.css";

const Card = ({ name, phone, email, image, favorited, index }) => {
  const { cats, setCats } = useContext(PetsContext);
  const [isFavorited, setIsFavorited] = useState(favorited);

  const toggleFavorited = () => {
    updateFavorite(index, !isFavorited);
    setIsFavorited(!isFavorited);
  };

  const updateFavorite = (index, favorited) => {
    const updatedCats = [...cats];
    updatedCats[index].favorited = favorited;
    setCats(updatedCats);
  };

  return (
    <article className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-img"></img>
        <button className="heart" onClick={toggleFavorited}>
          {isFavorited ? (
            <img src={heartFilled} alt="filled heart"></img>
          ) : (
            <img src={heartOutlined} alt="outlined heart"></img>
          )}
        </button>
        <div className="card-content">
          <h3>{name}</h3>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
