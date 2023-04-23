import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getGameById } from "../../asyncMock.js";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [game, setGame] = useState([]);

  const { gameId } = useParams();

  useEffect(() => {
    getGameById(gameId)
      .then((response) => {
        setGame(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gameId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...game} />
    </div>
  );
};
