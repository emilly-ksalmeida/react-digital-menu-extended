import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LuCircleChevronLeft } from "react-icons/lu";
import Context from "../context/Context.js";
import CardsPedidos from "./CardsPedidos.jsx";

function Pedido() {
   const [itens, setItens] = useContext(Context);
  const navigate = useNavigate();
    
  return (
    <div className="container flex flex-col gap-4 mx-auto bg-amber-50 p-4 rounded-md">
      <div className="flex justify-between items-center w-full bg-cabecalho px-8 py-4 rounded-md">
        <button 
        className="flex flex-col sm:flex-row items-center gap-3 bg-pedidos-button p-2 rounded-md cursor-pointer"
        onClick={() => navigate(-1)}>
          <LuCircleChevronLeft size={24} className="text-white"/>
          <p className="text2xs text-white font-extrabold">Voltar</p>
        </button>
        <h1 className="text-white font-extrabold text-[1rem] sm:text-[1.5rem]">Lista de Pedidos</h1>
      </div>
      <div className="flex flex-col gap-5 py-2">
       <p className="text-black font-bold text-xl">
         Veja seus itens selecionados:
       </p>
        {itens.length == 0 ? (
          <p>Sua lista de pedidos está vazia!</p>
        ) : (
          <CardsPedidos />
        )
        }
      </div>
    </div>
  );
}
export default Pedido;
