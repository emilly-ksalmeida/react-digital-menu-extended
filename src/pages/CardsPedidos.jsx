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
    <div className="flex flex-col gap-5 bg-list p-4 rounded-md m-auto w-96 shadow-xl/20">
      <div className="flex flex-col gap-2">
        {itens.map((item) => (
          <div className="flex flex-col gap-1 bg-card-pedido rounded-md p-3">
            <h3 className="font-bold">{item.produto}</h3>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço unitário: {formatarParaBRL(item.precoUnitario)}</p>
            <p>
              Total: {formatarParaBRL(item.quantidade * item.precoUnitario)}
            </p>
          </div>
        ))}
      </div>
      <p className="bg-card-pedido rounded-md p-2 font-extrabold">
        Total da compra: {totalDaCompra()}
      </p>
    </div>
  );
}
export default CardsPedidos;
