import { useContext } from "react";
import Context from "../contexts/Context.js";

function CardsPedidos() {
  const [itens, setItens] = useContext(Context);

  const totalDaCompra = () => {
    let total = 0;
    itens.forEach((item) => {
      total = total + (item.quantidade * item.precoUnitario);
    });
    return total;
  };

  return (
    <div>
      <div>
        {itens.map((item) => (
          <div>
            <h3>{item.produto}</h3>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço unitário: {item.precoUnitario}</p>
            <p>
              Total: {item.quantidade * item.precoUnitario}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p>Total da compra: {totalDaCompra()}</p>
      </div>
    </div>
  );
}
export default CardsPedidos;
