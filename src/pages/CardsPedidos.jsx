import { useContext } from "react";
import Context from "../context/Context.js";

const formatarParaBRL = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
};

function CardsPedidos() {
  const [itens, setItens] = useContext(Context);

  const totalDaCompra = () => {
    let total = 0;
    itens.forEach((item) => {
      total = total + (item.quantidade * item.precoUnitario);
    });
    return formatarParaBRL(total);
  };

  return (
    <div>
      <div>
        {itens.map((item) => (
          <div>
            <h3>{item.produto}</h3>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço unitário: {formatarParaBRL(item.precoUnitario)}</p>
            <p>
              Total: {formatarParaBRL(item.quantidade * item.precoUnitario)}
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
