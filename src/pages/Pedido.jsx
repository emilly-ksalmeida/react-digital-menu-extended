import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context.js";
import CardsPedidos from "./CardsPedidos.jsx";

function Pedido() {
   const [itens, setItens] = useContext(Context);
  const navigate = useNavigate();
    
  return (
    <div>
      <div className="cabecalho">
        <button className="cabecalho__botao" onClick={() => navigate(-1)}>
          Voltar
        </button>
        <h2>Lista de Pedidos</h2>
      </div>

      <div>
       <p>Veja seus itens selecionados.</p>
       <div>
        {itens.length == 0 ? (
          <p>Sua lista de pedidos está vazia!</p>
        ) : (
          <CardsPedidos />
        )}
      </div>
      </div>
      
    </div>
  );
}
export default Pedido;
