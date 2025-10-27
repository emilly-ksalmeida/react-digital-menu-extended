import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LuCircleChevronLeft } from "react-icons/lu";
import Context from "../context/Context.js";
import CardsPedidos from "./CardsPedidos.jsx";

function Pedido() {
   const [itens, setItens] = useContext(Context);
  const navigate = useNavigate();
    
  return (
    <div className="flex flex-col gap-4 w-full m-auto bg-amber-50 p-4 rounded-md">
      <div className="bg-cabecalho flex flex-row items-center justify-between px-8 py-6 rounded-md">
        <button 
        className="flex flex-row items-center gap-3 text-white bg-pedidos-button p-3 rounded-md cursor-pointer"
        onClick={() => navigate(-1)}>
          <LuCircleChevronLeft />
          Voltar
        </button>
        <h1 className="text-black font-bold text-3xl">Lista de Pedidos</h1>
      </div>

      <div className="flex flex-col gap-5 py-2">
       <p className="text-black font-bold text-xl">Veja seus itens selecionados:</p>
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
