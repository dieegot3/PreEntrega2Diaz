import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount.jsx";

export const ItemDetail = ({
  id,
  title,
  price,
  category,
  stock,
  launch,
  img,
}) => {
  const handleOnAdd = (quantity) => {
    console.log("agrega al carrito: ", quantity);
  };
  return (
    <article className="DetailGame">
      <header>
        <h2 className="GameTitle">{title}</h2>
      </header>
      <section className="GameDetails">
        <img src={img} alt={title} className="GameDetailsImg" />
        <section className="GameDetailsInfo">
          <p className="Category">Género: {category}</p>
          <p className="Price">${price}</p>
          <p className="Launch">Lanzamiento: {launch}</p>
          <p className="Stock">Stock Físico: {stock}</p>

          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        </section>
      </section>
    </article>
  );
};
