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
    <div className="flex flex-col gap-4 w-full m-auto bg-amber-50 p-4 rounded-md">
      <div className="bg-cabecalho flex flex-row items-center justify-between px-8 py-6 rounded-md">
        <h1 className="text-black font-bold text-3xl">Restaurante</h1>
        <div>
          <button
            onClick={() => navigate("/pedido")}
            className="flex flex-row items-center gap-3 bg-pedidos-button p-3 rounded-md text-white cursor-pointer"
          >
            <p>Veja seus pedidos</p>
            <LuShoppingBasket />
          </button>
        </div>
      </div>
      <div className="h-64 rounded-md overflow-hidden">
        <img className="w-full object-bottom" src={ImgRestaurante} alt="Imagem do Hashtaurante"/>
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
