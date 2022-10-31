import { useContext } from "react";
import { PetsContext } from "../Pets/Pets";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const { cats } = useContext(PetsContext);

  return (
    <div className="pet-cards-container">
      {cats.map((cat, index) => {
        return (
          <Card
            key={cat.id}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            image={cat.image}
            favorited={cat.favorited}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
