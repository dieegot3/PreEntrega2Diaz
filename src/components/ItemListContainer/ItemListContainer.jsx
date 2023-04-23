import { useState, useEffect } from "react";
import { getGames, getGamesbyCategory } from "../../asyncMock.js";
import { ItemList } from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [games, setGames] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getGamesbyCategory : getGames;

    asyncFunc(categoryId)
      .then((response) => {
        setGames(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="productos">
      <h1>{greeting}</h1>
      <ItemList games={games} />
    </div>
  );
};
