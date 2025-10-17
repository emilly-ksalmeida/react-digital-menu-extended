import { useNavigate } from "react-router-dom";

function Pedido() {
  
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
      </div>
      
    </div>
  );
}
export default Pedido;
