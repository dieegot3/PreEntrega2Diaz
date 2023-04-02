import { CartWidget } from "../CartWidget/CartWidget";
export const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Nocturne</h1>
      <ul className="links">
        <li>Ofertas</li>
        <li>Juegos deseados</li>
        <li>Mis juegos</li>
      </ul>
      <CartWidget cantCarrito={0} />
    </div>
  );
};
