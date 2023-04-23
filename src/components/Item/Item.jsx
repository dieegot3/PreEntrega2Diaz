import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, title, price, category, stock, launch, img }) => {
  return (
    <article className="CardGame">
      <picture>
        <img src={img} alt={title} className="GameImg" />
      </picture>
      <section className="GameInfo">
        <h2>{title}</h2>
        <p className="Price">${price}</p>
        <div className="GameInfoExtra">
          <p>{category}</p>
          <p>lanzamiento: {launch}</p>
        </div>
      </section>
      <button className="ClickSpace">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </button>
    </article>
  );
};
