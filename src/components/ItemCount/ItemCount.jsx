import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="ControlButton" onClick={decrement}>
          -
        </button>
        <h2 className="Number">{quantity}</h2>
        <button className="ControlButton" onClick={increment}>
          +
        </button>
      </div>

      <div>
        <button
          className="AddButton"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};
