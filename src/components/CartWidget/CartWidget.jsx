import cartIcon from "./assets/cartIcon.svg";
export const CartWidget = ({ cantCarrito }) => {
  return (
    <div className="cartWidget">
      <img
        className="cartIcon"
        src={cartIcon}
        alt="Icono del Carrito de compras"
      />
      <p>{cantCarrito}</p>
    </div>
  );
};
