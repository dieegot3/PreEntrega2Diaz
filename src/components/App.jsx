import "./App.css";
import { NavBar } from "./NavBar/NavBar.jsx";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer.jsx";
export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Productos"} />
    </div>
  );
};
