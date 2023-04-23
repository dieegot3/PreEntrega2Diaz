import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1 className="Brand">Nocturne</h1>
      </Link>
      <ul className="Categories">
        <NavLink
          to={`/category/estrategia`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Estrategia
        </NavLink>
        <NavLink
          to={`/category/supervivencia`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Supervivencia
        </NavLink>
        <NavLink
          to={`/category/rol`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Rol
        </NavLink>
      </ul>
      <CartWidget cantCarrito={0} />
    </div>
  );
};
