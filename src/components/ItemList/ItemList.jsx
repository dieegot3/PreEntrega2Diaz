import "./ItemList.css";
import { Item } from "../Item/Item.jsx";

export const ItemList = ({ games }) => {
  return (
    <div className="ListGroup">
      {games.map((game) => (
        <Item key={game.id} {...game} />
      ))}
    </div>
  );
};
