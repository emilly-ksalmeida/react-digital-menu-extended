import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImgRestaurante from "./assets/hashtaurante.webp";
import Cards from "./components/Cards";
import Navegacao from "./components/Navegacao";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>
        <h1>Restaurante</h1>
            <div><button className="cabecalho__botao" onClick={()=> navigate("/pedido")}>Veja seus pedidos</button></div>
      </div>
      <div className="banner">
        <img src={ImgRestaurante} alt="Imagem do Hashtaurante" />
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
