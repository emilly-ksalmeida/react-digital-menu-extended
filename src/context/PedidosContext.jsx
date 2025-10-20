import { useState } from "react";
import Context from "./Context.js";

function PedidosContext({ children }) {
  const [itens, setItens] = useState([]);

  return (
    <Context.Provider value={[itens, setItens]}> {children}</Context.Provider>
  );
}
export default PedidosContext;
