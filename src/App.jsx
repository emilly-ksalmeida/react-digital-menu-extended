import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuShoppingBasket } from "react-icons/lu";
import ImgRestaurante from "./assets/hashtaurante.webp";
import Cards from "./components/Cards";
import Navegacao from "./components/Navegacao";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col gap-4 mx-auto bg-amber-50 p-4 rounded-md">
      <div className="flex justify-between items-center w-full bg-cabecalho px-4 sm:px-6 py-4 rounded-md">
        <h1 className="text-white font-extrabold text-[1rem] sm:text-[1.5rem]">Restaurante</h1>
        <button
          onClick={() => navigate("/pedido")}
          className="flex flex-col sm:flex-row items-center gap-1 bg-pedidos-button p-2 rounded-md cursor-pointer"
        >
          <p className="text-xs text-white font-extrabold">Veja seus pedidos</p>
          <LuShoppingBasket  className="text-white"/>
        </button>
      </div>
      <div className="min-h-40 max-h-48 rounded-md overflow-hidden">
        <img className="w-full object-center min-h-40" src={ImgRestaurante} alt="Imagem do Hashtaurante"/>
      </div>

      <Navegacao
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}
      />

      <Cards categoriaSelecionada={categoriaSelecionada} />
    </div>
  );
}

export default App;
